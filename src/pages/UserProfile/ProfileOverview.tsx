import InfoTagCard from "../../components/common/UserProfile/InfoTagCard";
import { BowArrow, Dumbbell } from "lucide-react";
import React, { useRef, useState } from "react";
import ProfileHeader from "@/components/common/UserProfile/ProfileHeader";
import { useAuth } from "@/hooks/useAuth";
import { uploadProfileImage } from "@/lib/api/profile.api";
import { useMutation } from "@tanstack/react-query";
interface ProfileOverviewProps {
  aboutMe: string;
  fitnessGoal: string;
  preferredTraining: string;
}

export default function ProfileOverview({
  aboutMe,
  fitnessGoal,
  preferredTraining,
}: ProfileOverviewProps) {
  const { user, updateUser } = useAuth();
  const uploadInp = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | null>(null);

  const { mutate: uploadImage } = useMutation({
    mutationFn: uploadProfileImage,
    onSuccess: (data) => {
      updateUser({ profile_image: data?.profile_image });
      setUrl(null);
    },
  });

  const changePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setUrl(preview);
    updateUser({ profile_image: preview });
    uploadImage(file);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Profile Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your personal information and preferences
        </p>
      </div>

      <ProfileHeader
        name={user?.name ?? ""}
        member={
          user?.membership_date
            ? new Date(user.membership_date).getFullYear()
            : ""
        }
        sessionComplete={48}
        activePackage="Single Pack"
        nextSession="Today, 9:00 AM"
        avatarUrl={url ?? user?.profile_image ?? undefined}
        onAvatarClick={() => uploadInp.current?.click()}
        onEditProfile={() => console.log("edit profile")}
      />

      <input
        type="file"
        accept="image/jpeg,image/gif,image/png"
        hidden
        ref={uploadInp}
        onChange={changePhoto}
      />

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-base font-semibold text-foreground mb-3">
          About Me
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {aboutMe}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <InfoTagCard
          icon={<BowArrow size={18} />}
          label="Fitness Goal"
          value={fitnessGoal}
        />
        <InfoTagCard
          icon={<Dumbbell size={18} />}
          label="Preferred Training"
          value={preferredTraining}
        />
      </div>
    </div>
  );
}

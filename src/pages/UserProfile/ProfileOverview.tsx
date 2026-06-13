import InfoTagCard from "../../components/common/UserProfile/InfoTagCard";
import { BowArrow, Dumbbell } from "lucide-react";
import React, { useRef, useState } from "react";
import ProfileHeader from "@/components/common/UserProfile/ProfileHeader";
import { useAuth } from "@/hooks/useAuth";
import { uploadProfileImage } from "@/lib/api/profile.api";
import { useMutation } from "@tanstack/react-query";
import { usePackages, useSessions } from "@/hooks/useProfileData";

export default function ProfileOverview() {
  const { user, updateUser } = useAuth();
  const uploadInp = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | null>(null);
  const { data: packages } = usePackages();
  const { data: sessions } = useSessions();

  const activePackage = packages?.find((p) => p.status === "Active");
  const nextSession = sessions?.[0];

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

  const nextSessionLabel = nextSession
    ? `${nextSession.date}, ${nextSession.time}`
    : "No upcoming sessions";

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
        sessionComplete={activePackage?.sessions_used ?? 0}
        activePackage={activePackage?.name ?? "No active package"}
        nextSession={nextSessionLabel}
        avatarUrl={url ?? user?.profile_image ?? undefined}
        onAvatarClick={() => uploadInp.current?.click()}
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
          {user?.about_me ?? "No bio added yet."}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <InfoTagCard
          icon={<BowArrow size={18} />}
          label="Fitness Goal"
          value={user?.fitness_goals ?? "Not set"}
        />
        <InfoTagCard
          icon={<Dumbbell size={18} />}
          label="Preferred Training"
          value={user?.preferred_training ?? "Not set"}
        />
      </div>
    </div>
  );
}

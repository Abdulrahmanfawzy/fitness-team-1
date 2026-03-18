import {
Card,
CardAction,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"

export default function TrainerCertifictions() {
  return <>
      <div className="container w-10/12 mx-auto py-6 text-center">
      <h2 className="profile-heading">Certifications</h2>
      <p className="text-gray-400">Verified qualifications that demonstrate professional coaching expertise</p>
      <div className="certificate">

 <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
        </CardAction>
        <CardTitle>NASMA Certified Personel Training</CardTitle>
        <CardDescription>
        
        </CardDescription>
      </CardHeader>
      <CardFooter>

      </CardFooter>
    </Card>
      </div>
      </div>
    </>
  
}

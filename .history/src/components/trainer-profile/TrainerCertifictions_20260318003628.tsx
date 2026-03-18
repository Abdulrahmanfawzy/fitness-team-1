import certificate from "../../assets/img/certificate.png"

import {
Card,
CardAction,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card"

export default function TrainerCertifictions() {
  return <>
      <div className="container w-10/12 mx-auto py-6 text-center">
      <h2 className="profile-heading">Certifications</h2>
      <p className="text-gray-400">Verified qualifications that demonstrate professional coaching expertise</p>
      <div className="certificate">

 <Card className="">
      <div className=" aspect-video" />
      <img
        src={certificate}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
        </CardAction>
        <CardTitle>NASMA Certified Personel Training</CardTitle>
        <CardDescription>
        Nationel Academy Of Sports Medicine
        </CardDescription>
      </CardHeader>
      {/* <CardFooter>
Eslam mohamde
      </CardFooter> */}
    </Card>
      </div>
      </div>
    </>
  
}

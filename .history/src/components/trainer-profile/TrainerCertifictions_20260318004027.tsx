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

 <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="" />
      <img
        src={certificate}
        alt="Event cover"
        className="relative aspect-video w-full object-cover "
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
     <Card className="relative mx-auto w-full max-w-sm ">
      <div className="" />
      <img
        src={certificate}
        alt="Event cover"
        className="relative aspect-video w-full object-cover "
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
     <Card className="relative mx-auto w-full max-w-sm ">
      <div className="" />
      <img
        src={certificate}
        alt="Event cover"
        className="relative aspect-video w-full object-cover "
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
     <Card className="relative mx-auto w-full max-w-sm ">
      <div className="" />
      <img
        src={certificate}
        alt="Event cover"
        className="relative aspect-video w-full object-cover "
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

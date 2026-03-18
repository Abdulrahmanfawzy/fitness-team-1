import PackageCard from "../common/PackageCard";


export default function TrainingPackages() {
  return <>
    <div className="container w-10/12 mx-auto py-6 text-center">
    <h2 className="profile-heading">Training packages</h2>
    <p className="text-gray-400 my-4">Choose a training plan that matches your goals and schedule</p>
    <div className="">
<PackageCard title="single Pack" price="300" sessions="30" features={["Try any Trainer","No commitment"]} isRecommended={false}></PackageCard>
<PackageCard title="Monthly Pack" price="1500" sessions="20" features={["Eslam","Mohamed"]} isRecommended={true}></PackageCard>
<PackageCard title="Premium Pack" price="5000" sessions="25" features={["Eslam","adel"]} isRecommended={false}></PackageCard>
    </div>
    </div>
    </>
  
}

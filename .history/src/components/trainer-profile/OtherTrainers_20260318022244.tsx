import TrainerCard from "../common/TrainerCard";
import trainerImage from "../trainer-profile/"


export default function OtherTrainers() {
  return     <>
      <div className="container w-10/12 mx-auto text-center py-12">
      <h2 className="profile-heading ">Explore Other Trainers</h2>
      <p className="text-gray-400 my-4 py-4"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<TrainerCard image={trainerImage} name="Kareem Moustafa" rating= {4.5} price={180}  specialties={["body Transformation","general Fitness","Functional Training"]}  location="cairo"></TrainerCard>
      </div>
      </div>
    </>
  
}

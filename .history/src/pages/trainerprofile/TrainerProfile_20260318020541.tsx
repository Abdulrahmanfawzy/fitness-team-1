import OtherTrainers from '@/components/trainer-profile/OtherTrainers'
import TrainerCertifictions from '@/components/trainer-profile/TrainerCertifictions'
import TrainerDescription from '@/components/trainer-profile/TrainerDescription'
import TrainerInfo from '@/components/trainer-profile/TrainerInfo'
import TrainingPackages from '@/components/trainer-profile/TrainingPackages'


export default function TrainerProfile() {
  return  <>
      <div className="">
    
    <TrainerInfo></TrainerInfo>
    <TrainerDescription></TrainerDescription>
    <TrainerCertifictions></TrainerCertifictions>
    <TrainingPackages></TrainingPackages>
    <OtherTrainers></OtherTrainers>
    </div>
    </>
  
}

import TrainerCertifictions from '@/components/trainer-profile/TrainerCertifictions'
import TrainerDescription from '@/components/trainer-profile/TrainerDescription'
import TrainerInfo from '@/components/trainer-profile/TrainerInfo'


export default function TrainerProfile() {
  return  <>
      <div className="">
    
    <TrainerInfo></TrainerInfo>
    <TrainerDescription></TrainerDescription>
    <TrainerCertifictions></TrainerCertifictions>
    <Train></>
    </div>
    </>
  
}

import trainerImage from "../../assets/img/trainerIMG.png"

export default function TrainerInfo() {
    return <>
    <div className="container w-10/12 mx-auto">
        <h2 className="text-center">Meet your Trainer</h2>
        <div className=''>
            <div>
                <img src={trainerImage} alt="Ahmed Mohamed " />
            </div>
<div>
<h3>Ahmed Mohamed </h3>
<ul>
    <li>Weight Loss Coach</li>
</ul>
</div>
        </div>
    </div>
    </>

}

import trainerImage from "../../assets/img/trainerIMG.png"

export default function TrainerInfo() {
    return <>
        <h2 className="text-center text-white text-xl">Meet your Trainer</h2>
        <div className=''>
            <div>
                <img src={trainerImage} alt="Ahmed Mohamed " />
            </div>
<div>
<h3>Ahmed Mohamed </h3>
<ul>
    <li className="px-2 py-1 bg-black text-white rounded-md relative ">Weight Loss Coach</li>
</ul>
</div>
        </div>
    </>

}

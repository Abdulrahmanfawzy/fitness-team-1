import trainerImage from "../../assets/img/trainerIMG.png"

export default function TrainerInfo() {
    return <>
        <h2 className="text-center text-white text-4xl font-semibold my-4">Meet your Trainer</h2>
        <div className=''>
            <div>
                <img src={trainerImage} alt="Ahmed Mohamed " />
            </div>
<div>
<h3>Ahmed Mohamed </h3>
<ul>
    <li className="px-2 py-1 bg-black text-white rounded-md relative before:absolute before:top- before:left-0 before:rounded-full before:content-[''] before:w-3 before:h-3 before:bg-red-500 font-light">Weight Loss Coach</li>
</ul>
</div>
        </div>
    </>

}

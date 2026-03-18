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
<ul >
    <li className=" w-1/2 px-8 py-2 before:mx-3 bg-black text-white rounded-md relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:rounded-full before:content-[''] before:w-3 before:h-3 before:bg-red-500 font-light">Weight Loss Coach</li>
</ul>
</div>
        </div>
    </>

}

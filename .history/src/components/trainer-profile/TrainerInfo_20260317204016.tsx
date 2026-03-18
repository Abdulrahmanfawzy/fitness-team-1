import trainerImage from "../../assets/img/trainerIMG.png"

export default function TrainerInfo() {
    return <>
    <div className="bg-linear-to-b from-[#363636] to-[#121212]">

        <h2 className="text-center text-white text-4xl font-semibold py-12">Meet your Trainer</h2>
        <div className='container w-10/12 mx-auto flex gap-4'>
            <div>
                <img src={trainerImage} alt="Ahmed Mohamed " />
            </div>
<div>
<h3 className="text-3xl text-white py-2 px-1 font-bold">Ahmed Mohamed </h3>
<ul className="flex gap-3 flex-wrap">
    <li className=" px-8 py-2 before:mx-3 bg-black text-white rounded-md relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:rounded-full before:content-[''] before:w-3 before:h-3 before:bg-red-500 font-light">Weight Loss Coach</li>
    <li className=" px-8 py-2 before:mx-3 bg-black text-white rounded-md relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:rounded-full before:content-[''] before:w-3 before:h-3 before:bg-red-500 font-light">Muscle Gain Coach</li>
    <li className=" px-8 py-2 before:mx-3 bg-black text-white rounded-md relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:rounded-full before:content-[''] before:w-3 before:h-3 before:bg-red-500 font-light">General Fitness Coach</li>
</ul>
</div>
        </div>
    </div>
    </>

}

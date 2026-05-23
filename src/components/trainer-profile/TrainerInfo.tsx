import { FaCheck, FaLocationDot, FaStar } from "react-icons/fa6";
import trainerImage from "../../assets/img/trainerIMG.png";
import { BiMoney } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useBookingAuth } from "@/context/useBookingAuth";

export default function TrainerInfo() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { openSheet } = useBookingAuth();

  const handleBook = () => {
    if (isLoggedIn) navigate("/booking");
    else openSheet();
  };

  return (
    <div className="bg-linear-to-b from-[#363636] to-[#121212] pb-12">
      <h2 className="text-center text-white text-2xl sm:text-4xl font-semibold py-8 sm:py-12">
        Meet your Trainer
      </h2>
      <div className="container w-11/12 sm:w-10/12 mx-auto flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="flex justify-center sm:block shrink-0">
          <img
            src={trainerImage}
            alt="Ahmed Mohamed"
            className="w-48 sm:w-auto rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl sm:text-3xl text-white font-bold">
            Ahmed Mohamed
          </h3>
          <ul className="flex gap-2 flex-wrap">
            {[
              "Weight Loss Coach",
              "Muscle Gain Coach",
              "General Fitness Coach",
            ].map((tag) => (
              <li
                key={tag}
                className="hover:bg-primary transition-colors duration-300 px-4 sm:px-8 py-2 before:mx-3 bg-black text-white rounded-md relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:rounded-full before:content-[''] before:w-3 before:h-3 before:bg-red-500 font-light text-sm sm:text-base">
                {tag}
              </li>
            ))}
          </ul>
          <p className="text-white text-lg sm:text-2xl font-semibold">
            Helping clients Build Strength for 8+ Years
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2 items-center text-white text-sm sm:text-base">
              <FaCheck className="bg-green-500 w-5 h-5 sm:w-6 sm:h-6 p-1 rounded-full shrink-0" />
              Available This Week
            </li>
            <li className="flex gap-2 items-center text-white text-sm sm:text-base">
              <FaStar className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 shrink-0" />
              4.8 (124 Reviews)
            </li>
            <li className="flex gap-2 items-center text-white text-sm sm:text-base">
              <FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 shrink-0" />
              Nasr City, Egypt
            </li>
            <li className="flex gap-2 items-center text-white text-sm sm:text-base">
              <BiMoney className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 shrink-0" />
              From EGP 300 / session
            </li>
          </ul>
          <button
            className="primary-btn w-full sm:w-48 mt-2"
            onClick={handleBook}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

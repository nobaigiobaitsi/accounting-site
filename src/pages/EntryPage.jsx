import logo01 from "../images/logo01.png";
import FadeContent from '../components/FadeContent/FadeContent'
import { Link } from "react-router-dom";

export default function EntryPage() {

  return (
    <FadeContent blur={true} duration={3000} easing="ease-out" initialOpacity={0}>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <img src={logo01} alt="Main Logo" className="w-3/4 max-w-[600px] mx-auto" />
        <Link to="/home">
          <button className="px-10 py-4 text-xl font-bold rounded-2xl shadow-lg
                     bg-gradient-to-r from-[#A71D40] to-[#0F4E8C] text-white
                     hover:scale-105 hover:shadow-2xl transition-all hover:from-[#0F4E8C] hover:to-[#A71D40] duration-300 ease-in-out">
            Enter
          </button>
        </Link>
      </div>
    </FadeContent>
  );
}

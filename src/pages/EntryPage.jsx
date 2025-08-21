import logo01 from "../images/logo01.png";
import FadeContent from '../components/FadeContent/FadeContent'
import { Link } from "react-router-dom";

export default function EntryPage() {

  return (
    <FadeContent blur={true} duration={3000} easing="ease-out" initialOpacity={0}>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <img src={logo01} alt="Main Logo" className="w-3/4 max-w-[600px] mx-auto" />
        <Link to="/home">
          <button className="px-6 py-3 bg-brand text-black font-semibold rounded-xl shadow-lg">
            Enter
          </button>
        </Link>
      </div>
    </FadeContent>
  );
}

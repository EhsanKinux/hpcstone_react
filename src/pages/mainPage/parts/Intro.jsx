import { Link } from "react-router-dom";
import "./intro.css";

const Intro = () => {
  return (
    <div className="w-full h-screen flex overflow-hidden relative bgPattern">
      <div className="flex-1 p-24 pr-0 flex flex-col justify-around">
        {/* <Circle
                backgroundColor="#b0ff49"
                top="-50vh"
                left="-50vh"
                width="100vh"
                height="100vh"
            /> */}
        <div>
          <h1 className="text-5xl ">
            <span className="text-green-600">H P C </span>STONE
          </h1>
          <p className="text-xl">Hard Precious Colorful</p>
        </div>
        <div>
          <h1 className="text-2xl">
            خرید سریع و مطمئن و ارزان مرغوب ترین سنگ های قروه
          </h1>
        </div>
        <div>
          <Link
            to="/products"
            className="text-white border-none bg-green-600 p-4 rounded-xl"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="./src/assets/top-view-boards-mdf-material.jpg"
          className="rounded-es-[100%] z-[100] h-full object-cover"
          alt="img"
        />
        {/* <Circle
                backgroundColor="#01c686"
                right="-40vh"
                width="100vh"
                height="100vh"
            /> */}
      </div>
    </div>
  );
};

export default Intro;

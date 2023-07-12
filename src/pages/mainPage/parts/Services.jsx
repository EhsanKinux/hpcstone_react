import { Link } from "react-router-dom";
import { data } from "../../../data/data";
import "./services.css";

const Services = () => {
  return (
    <div className="px-24 mt-10">
      <div className="rtlText" >
        <h1 className="text-2xl border-b-4 border-green-500 w-fit">
          مرغوبترین سنگ های قروه
        </h1>
      </div>
      <div className="flex flex-wrap justify-between mt-5">
        {data.map((data) => (
          <Link key={data.id} to={`/products/${data.name}`}>
            <div className="w-[350px] h-[350px] flex justify-center items-center p-2 bg-gray-100 relative hover">
              <div className="w-[70%] text-center absolute z-50 bg-gray-100 opacity-0 rounded-lg p-3 desc">
                {data.desc}
              </div>
              <span className="absolute top-2 left-2 text-gray-500">
                {data.title}
              </span>
              <div className="w-[80%] h-[80%] rounded-[50%] overflow-hidden media">
                {data.video ? (
                  <video
                    src={data.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={data.photo}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;

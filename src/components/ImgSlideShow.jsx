import { useRef } from "react";
import { BiSolidSkipNextCircle } from "react-icons/bi";
// import { GrFormNextLink } from "react-icons/gr";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const ImgSlideShow = () => {
  const slideRef = useRef(null);
  const properties = {
    prevArrow: (
      <button>
        <BiSolidSkipNextCircle className="w-8 h-8 transform scale-x-[-1] opacity-40" />
      </button>
    ),
    nextArrow: (
      <button>
        <BiSolidSkipNextCircle className="w-8 h-8 opacity-40" />
      </button>
    ),
    display: "flex",
  };
  return (
    <>
      <Slide indicators={true} ref={slideRef} {...properties}>
        <div
          style={{
            textAlign: "center",
            background: "red",
            padding: "200px 0",
            fontSize: "30px",
          }}
        >
          First Slide
        </div>
        <div
          style={{
            textAlign: "center",
            background: "orange",
            padding: "200px 0",
            fontSize: "30px",
          }}
        >
          Second Slide
        </div>
        <div
          style={{
            textAlign: "center",
            background: "yellow",
            padding: "200px 0",
            fontSize: "30px",
          }}
        >
          Third Slide
        </div>
        <div
          style={{
            textAlign: "center",
            background: "green",
            padding: "200px 0",
            fontSize: "30px",
          }}
        >
          Fourth Slide
        </div>
      </Slide>
      {/* <div
        style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
      >
        <button
          type="button"
          style={{ marginRight: "20px" }}
          onClick={() => slideRef.current.goBack()}
        >
          <GrFormNextLink className="w-8 h-8 transform scale-x-[-1]" />
        </button>
        <button
          type="button"
          style={{ marginRight: "20px" }}
          onClick={() => slideRef.current.goNext()}
        >
          <GrFormNextLink className="w-8 h-8" />
        </button>
        <select
            onChange={(event) =>
              slideRef.current.goTo(parseInt(event.currentTarget.value))
            }
          >
            <option>--Select--</option>
            <option value="0">First</option>
            <option value="1">Second</option>
            <option value="2">Third</option>
            <option value="3">Fourth</option>
          </select>
      </div> */}
    </>
  );
};

export default ImgSlideShow;

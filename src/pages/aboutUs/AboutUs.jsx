import RootLayout from "../../RootLayout";
import Circle from "../../components/Circle";
import ImgSlideShow from "../../components/ImgSlideShow";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <RootLayout>
        <div className="overflow-hidden relative h-screen flex flex-col justify-center items-center">
          <Circle
            backgroundColor="#b0ff49"
            top="-50vh"
            left="-50vh"
            width="100vh"
            height="100vh"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="flex flex-col items-center justify-center text-2xl font-bold">
              درباره ی ما
            </h2>
            <div className="flex items-center justify-center mx-4 mt-10 ">
              <img
                src="./src/assets/market.jpg"
                alt="travertin"
                width="400"
                height="30"
              />
              <p className="flex rtlForP">
                شرکت بازرگانی HPCStone، یک شرکت بازرگانی ممتاز، صادق و قابل
                اعتماد با کادری پر تلاش است که مشتریان را در یافتن سنگ های مرغوب
                به شکل اسلب، تایل یا بلوک از معادن غرب کشور و به طور خاص شهرستان
                قروه یاری می نماید.
              </p>
            </div>
          </div>
          <Circle
            backgroundColor="#b0ff49"
            top="10vh"
            right="-50vh"
            width="100vh"
            height="100vh"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-8 h-screen">
          <div className="flex flex-col items-center gap-5">
            <p className="font-bold text-2xl">
              تجربه سالها حضور در بازار سنگ داخل و خارج ایران، همکاری با
              معتبرترین معادن استخراج داخلی
            </p>
            <p className="font-bold text-xl">
              صادرات مرغوب ترین سنگ های غرب کشور به تمام دنیا
            </p>
          </div>
          <div className="w-[800px]">
            <ImgSlideShow />
          </div>
        </div>
      </RootLayout>
    </>
  );
};

export default AboutUs;

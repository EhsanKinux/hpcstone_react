import RootLayout from "../../RootLayout";
import Circle from "../../components/Circle";

const ContactUs = () => {
  return (
    <RootLayout>
      <div className="h-screen">
        <div className="flex justify-center items-center mt-10">
          <Circle
            backgroundColor="#b0ff49"
            top="5vh"
            left="-30vh"
            width="100vh"
            height="100vh"
            // z-index="10"
          />
          <Circle
            backgroundColor="#C7D36F"
            top="5vh"
            left="-50vh"
            width="100vh"
            height="100vh"
            // z-index="10"
          />
          <Circle
            backgroundColor="#9EB23B"
            top="5vh"
            left="-70vh"
            width="100vh"
            height="100vh"
            // z-index="10"
          />
          <div className="flex justify-center items-center mt-20">
            <img
              src="./src/assets/ContactUs.png"
              alt="contact"
              className="w-2/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <div>
              <h3>ارتباط تلفنی و پیامکی</h3>
              <span>+989189834232</span>
            </div>
            <div>
              <h3>ایمیل</h3>
              <span>info@hpcstone.com</span>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ContactUs;

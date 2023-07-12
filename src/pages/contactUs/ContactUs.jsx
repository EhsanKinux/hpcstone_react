import RootLayout from "../../RootLayout";

const ContactUs = () => {
  return (
    <RootLayout>
      <div className="h-screen">
        <div className="flex justify-center items-center gap-64 mt-10">
          <div className="flex justify-center items-center">
            <img
              src="./src/assets/contactus.jpg"
              alt="contact"
              className="w-96"
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

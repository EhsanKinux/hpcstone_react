import RootLayout from "../../RootLayout";
import Intro from "./parts/Intro";
import Services from "./parts/Services";
import Testimonials from "./parts/Testimonials";

const MainPage = () => {
  return (
    <RootLayout>
      <Intro />
      <Services />
      <Testimonials />
    </RootLayout>
  );
};

export default MainPage;

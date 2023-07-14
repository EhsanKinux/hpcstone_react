import RootLayout from "../../RootLayout";
import CountUp from "./parts/CountUp";
import Intro from "./parts/Intro";
import Services from "./parts/Services";
import Testimonials from "./parts/Testimonials";

const MainPage = () => {
  return (
    <RootLayout>
      <Intro />
      <Services />
      <Testimonials />
      <CountUp />
    </RootLayout>
  );
};

export default MainPage;

import Footer from "./components/HeaderFooter/Footer";
import Navbar from "./components/HeaderFooter/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

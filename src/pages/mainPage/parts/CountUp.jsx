import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { IconContext } from "react-icons";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { LiaProductHunt } from "react-icons/lia";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const CountUp = () => {
  // Refs for each count-up animation
  const countupRef1 = useRef(null);
  const countupRef2 = useRef(null);
  const countupRef3 = useRef(null);

  // Count-up animations for orders, products, and customers
  const {
    countUp: countUpOrders,
    start: startCountUpOrders,
    reset: resetCountUpOrders,
  } = useCountUp({
    start: 0,
    end: 85,
    duration: 5,
    ref: countupRef1,
  });

  const {
    countUp: countUpProducts,
    start: startCountUpProducts,
    reset: resetCountUpProducts,
  } = useCountUp({
    start: 0,
    end: 10,
    duration: 5,
    ref: countupRef2,
  });

  const {
    countUp: countUpCustomers,
    start: startCountUpCustomers,
    reset: resetCountUpCustomers,
  } = useCountUp({
    start: 0,
    end: 96,
    duration: 5,
    ref: countupRef3,
  });

  useEffect(() => {
    // Intersection Observer options
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    // Intersection Observer to start count-up animations when component is visible
    const observer = new IntersectionObserver(handleIntersection, options);

    // Elements to observe for intersection
    const targets = [
      countupRef1.current,
      countupRef2.current,
      countupRef3.current,
    ];

    // Start observing the elements
    targets.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to handle intersection changes and start/reset count-up animations
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        if (target === countupRef1.current) {
          resetCountUpOrders();
          startCountUpOrders();
        } else if (target === countupRef2.current) {
          resetCountUpProducts();
          startCountUpProducts();
        } else if (target === countupRef3.current) {
          resetCountUpCustomers();
          startCountUpCustomers();
        }
      }
    });
  };

  return (
    <div className="flex justify-center items-center gap-10 p-10 px-20 my-10">
      <div className="flex flex-col border p-10 gap-5 shadow-md shadow-slate-300 hover:-translate-y-1 transition-all glassEffect w-1/4">
        <div className="text-8xl text-center">
          <IconContext.Provider
            value={{ size: "80", className: "m-auto mb-5 text-green-500" }}
          >
            <IoPeopleCircleOutline />
          </IconContext.Provider>
          <span>+</span>
          <span ref={countupRef1}>{countUpOrders}</span>
        </div>

        <h2 className="text-2xl font-bold border-b-4 border-green-500 w-fit m-auto py-2">
          تعداد سفارشات
        </h2>
      </div>
      <div className="flex flex-col border p-10 gap-5 shadow-md shadow-slate-300 hover:-translate-y-1 transition-all glassEffect w-1/4">
        <div className="text-8xl text-center">
          <IconContext.Provider
            value={{ size: "80", className: "m-auto mb-5 text-green-500" }}
          >
            <LiaProductHunt />
          </IconContext.Provider>
          <span>+</span>
          <span ref={countupRef2}>{countUpProducts}</span>
        </div>
        <h2 className="text-2xl font-bold border-b-4 border-green-500 w-fit m-auto py-2">
          تعداد محصولات
        </h2>
      </div>
      <div className="flex flex-col border p-10 gap-5 shadow-md shadow-slate-300 hover:-translate-y-1 transition-all glassEffect w-1/4">
        <div className="text-8xl text-center">
          <IconContext.Provider
            value={{ size: "80", className: "m-auto mb-5 text-green-500" }}
          >
            <PiShoppingBagOpenDuotone />
          </IconContext.Provider>
          <span>+</span>
          <span ref={countupRef3}>{countUpCustomers}</span>
        </div>
        <h2 className="text-2xl font-bold border-b-4 border-green-500 w-fit m-auto py-2">
          تعداد مشتریان
        </h2>
      </div>
    </div>
  );
};

export default CountUp;

import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

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
    <>
      <div>
        <h1>تعداد سفارشات</h1>
        <span ref={countupRef1}>{countUpOrders}</span>
      </div>
      <div>
        <h2>تعداد محصولات</h2>
        <span ref={countupRef2}>{countUpProducts}</span>
      </div>
      <div>
        <h3>تعداد مشتریان</h3>
        <span ref={countupRef3}>{countUpCustomers}</span>
      </div>
    </>
  );
};

export default CountUp;

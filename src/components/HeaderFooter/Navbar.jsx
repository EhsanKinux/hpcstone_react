import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="bg-gray-100 text-slate-800 h-16 flex items-center justify-between px-24 z-50 sticky top-0">
      <Link to="/">HPCstone</Link>
      <ul className="text-slate-800 flex gap-4 right-0">
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/stoneblog">سنگ بلاگ</Link>
        </li>
        <li>
          <Link to="/products">محصولات</Link>
        </li>
        <li>
          <Link to="/aboutus">درباره ما</Link>
        </li>
        <li>
          <Link to="/contactus">تماس با ما</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

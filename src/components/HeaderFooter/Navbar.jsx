import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-gray-900 text-white h-14 flex items-center justify-between px-24 z-50'>
      <Link to="/">HPCstone</Link>
      <ul className='text-gray-300 flex gap-4 right-0'>
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
  )
}

export default Navbar
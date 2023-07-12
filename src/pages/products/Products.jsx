import { Link, Outlet } from "react-router-dom";
import RootLayout from "../../RootLayout";

const Products = () => {
  return (
    <RootLayout>
      <h2>Products</h2>
      <nav>
        <ul>
          <li>
            <Link to="/products/bazalt">بازالت</Link>
          </li>
          <li>
            <Link to="/products/granite">گرانیت</Link>
          </li>
          <li>
            <Link to="/products/marble">مرمر</Link>
          </li>
          <li>
            <Link to="/products/porslain">چینی</Link>
          </li>
          <li>
            <Link to="/products/travenix">تراونیکس</Link>
          </li>
          <li>
            <Link to="/products/travertin">تراورتن</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Renders the child routes */}
    </RootLayout>
  );
};

export default Products;

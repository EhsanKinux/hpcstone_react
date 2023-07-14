import { Link, Outlet } from "react-router-dom";
import "./products.css";
import RootLayout from "../../RootLayout";

const Products = () => {
  const categories = [
    { id: 1, name: "بازالت", pathName: "bazalt" },
    { id: 2, name: "گرانیت", pathName: "granite" },
    { id: 3, name: "مرمر", pathName: "marble" },
    { id: 4, name: "چینی", pathName: "porslain" },
    { id: 5, name: "تراونیکس", pathName: "travenix" },
    { id: 6, name: "تراورتن", pathName: "travertin" },
  ];

  return (
    <RootLayout>
      <div className="min-h-screen flex products">
        <nav className="w-2/12 bg-gray-100 text-slate-800">
          <ul className="flex flex-col sticky top-20 gap-2 h-3/6 overflow-y-auto">
            <h2 className="text-center mb-4">محصولات</h2>
            {categories.map((category) => {
              return (
                <>
                  <Link
                    className="p-5 hover:bg-green-100"
                    to={`/products/${category.pathName}`}
                    key={category.id}
                  >
                    {category.name}
                  </Link>
                </>
              );
            })}
          </ul>
        </nav>
        <div className="bg-gray-300 flex-1 h-[1080px]">
          <Outlet />
          {/* Renders the child routes */}
        </div>
      </div>
    </RootLayout>
  );
};

export default Products;

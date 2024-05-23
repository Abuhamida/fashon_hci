import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Nav() {
  const route = useRouter();
  const [checkCart, setCheckCart] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cart = await fetch("/api/products/getUserCart");
        if (cart.ok) {
          const data = await cart.json();
          setCheckCart(data.data.products);
        }
      } catch (error) {
        // Handle error
      }
    };
    fetchData();

    const checkUser = async () => {
      const response = await fetch("/api/user/checkUser");
      if (response.ok) {
        const data = await response.json();
        if (data.data) {
          setIsLogged(true);
        }
      }
    };
    checkUser();
  }, []);

  const handelLogout = async () => {
    const response = await fetch("/api/auth/logout");
    if (response.ok) {
      route.refresh();
    }
  };

  const navData = [
    { name: "home", path: "/" },
    { name: "story", path: "/story" },
    { name: "FAQs", path: "/FAQs" },
    { name: "products", path: "/products" },
    { name: "contact", path: "/contact" },
  ];
  const router = usePathname();
  return (
    <div className="navbar bg-base-100 py-[25px] flex justify-between items-center">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-72 h-72 mx-2 flex flex-col items-start gap-5 z-40"
          >
            {navData.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`hover:text-primary hover:border-b-2 capitalize translate-x-2 duration-300 ${
                  item.path == router && "text-primary border-b-2"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Link
          href={"/"}
          className="text-2xl font-semibold hover:cursor-pointer z-40"
        >
          <span className=" text-primary ">Little </span>
          <span className=" hover:text-primary translate-x-2 duration-300">
            Fashion
          </span>
        </Link>
      </div>
      <div className=" hidden lg:flex  ">
        <ul className=" text-secondary  px-1 flex gap-10 z-40">
          {navData.map((item, index) => (
            <Link
              href={item.path}
              key={item.name}
              className={`hover:text-primary hover:border-b-2 capitalize translate-x-1 duration-75  ${
                item.path == router && "text-primary border-b-2"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className=" text-secondary  md:ml-4  text-2xl flex gap-5 md:gap-7 pr-2 lg:pr-24 z-40 relative">
        {!isLogged ? (
          <Link
            href="/sign-in"
            className="hover:text-primary translate-x-1 duration-75 "
          >
            <CgProfile />
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn  btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li> */}
              <li>
                <a onClick={handelLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
        <Link
          href="/cart"
          className="hover:text-primary translate-x-1 duration-75  "
        >
          {checkCart && isLogged && (
            <div className="badge  badge-xs  bg-primary text-white border-none w-3 h-3 absolute right-0 top-0 -mr-2 -mt-1">
              {checkCart.length}
            </div>
          )}

          <FaBagShopping />
        </Link>
      </div>
    </div>
  );
}

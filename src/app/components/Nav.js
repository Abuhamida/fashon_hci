import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const navData = [
    { name: "home", path: "/" },
    { name: "store", path: "/store" },
    { name: "FAQs", path: "/FAQs" },
    { name: "products", path: "/products" },
    { name: "contact", path: "/contact" },
  ];
  const router = usePathname();
  return (
    <div className="navbar bg-base-100 py-[25px] lg:px-24 flex justify-between items-center">
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
            className="dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-72 h-72 mx-2 flex flex-col items-start gap-5"
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
        <Link href={'/'}  className="text-2xl font-semibold hover:cursor-pointer">
          <span className=" text-primary ">Little </span>
          <span className=" hover:text-primary translate-x-2 duration-300">Fashion</span>
        </Link>
      </div>
      <div className=" hidden lg:flex  ">
        <ul className=" text-secondary  px-1 flex gap-10">
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
      <div className=" text-secondary cursor-pointer ml-4  text-2xl flex gap-7 ">
        <Link href="/sign-in" className="hover:text-primary translate-x-1 duration-75 ">
          <CgProfile />
        </Link>
        <Link href="/cart" className="hover:text-primary translate-x-1 duration-75 ">
          <FaBagShopping />
        </Link>
      </div>
    </div>
  );
}

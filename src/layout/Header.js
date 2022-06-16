import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const linkText = ["首頁", "測驗", "產品", "課程", "關於我們"];
const linkPath = [
  "/",
  "/main/test",
  "/main/product",
  "/main/course",
  "/main/about",
];

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full pt-3 pb-3 bg-white ">
      <div className="flex flex-wrap justify-between mx-auto max-w-7xl">
        <div className="flex justify-end w-full mb-2">
          <AiOutlineSearch className="mx-1 icon-sm" />
          <AiOutlineShoppingCart className="mx-1 icon-sm" />
          <Link to="/login">
            <AiOutlineUserAdd className="mx-1 icon-sm" />
          </Link>
          <AiOutlineUnorderedList className="mx-1 icon-sm" />
        </div>
        <div>logo</div>
        <nav>
          <ul className="flex p">
            {linkText.map((text, i) => (
              <li key={text} className="mx-2">
                <Link to={linkPath[i]}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import { bebas } from "../fonts";
import { FaFilePdf } from "react-icons/fa";

const NavBar = () => {
  const links = [{}];
  return (
    <div
      className={"flex justify-between p-4 pb-0 " + bebas.className}
      id="navbar"
    >
      <Link className="text-2xl pl-4" href="/">
        Abhishek Codes
      </Link>
      <div className="flex gap-4 text-xl pr-4">
        {/* <Link
          href="/Abhishek Singh Senior Front End Developer Resume June 2024.pdf"
          target="_blank"
          className="flex"
        >
          <FaFilePdf
            className="text-red-500 mt-1 mr-[0.5px]"
            style={{ fontSize: 18 }}
          />
          Resume
        </Link> */}
        {/* <Link href="#about">About</Link> */}
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;

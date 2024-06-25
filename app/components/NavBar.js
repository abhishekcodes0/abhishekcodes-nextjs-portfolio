import Link from "next/link";
import { bebas } from "../fonts";

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
        <Link href="#about">About</Link>
        <Link href="#work">Work</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;

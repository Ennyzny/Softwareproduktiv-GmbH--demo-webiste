import Image from "next/image";
import logo from "@/public/projectphotos/logo.png";
import logo2 from "@/public/projectphotos/logo2.png";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300 border-b border-transparent backdrop-blur-md">
        <div className="">
          <a href="#top" className="flex flex-wrap">
            <Image src={logo} alt="logo" width={38} height={30} />
            <Image src={logo2} alt="logo2" width={204} height={14} />
          </a>
          <div></div>
        </div>
      </nav>
    </>
  );
}

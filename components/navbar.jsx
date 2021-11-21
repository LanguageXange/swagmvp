import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black px-12 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-8">
        <span className="font-semibold text-xl tracking-tight">SwagHunt</span>
        <Image
          className="w-16 transform rotate-45"
          src="/rocket_green.svg"
          alt="rocket logo"
          width={75}
          height={60}
        />
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-lg lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-8">
              Home
            </a>
          </Link>

          <Link href="/store">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-8">
              Store
            </a>
          </Link>
          <Link href="/rank">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-8">
              Ranking
            </a>
          </Link>

          <Link href="/request">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300">
              Request
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import Link from "next/link";

const NavBar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-black px-12 py-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-lg tracking-tight">SwagHunt</span>
        <img class="w-16 transform rotate-45" src="/asset/rocket_green.svg" />
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div class="text-sm lg:flex-grow">
          <Link href="/">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4">
              Home
            </a>
          </Link>

          <Link href="/store">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4">
              Store
            </a>
          </Link>

          <Link href="/request">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300">
              Request New Swag
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

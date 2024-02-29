import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center text-center font-raleway text-md md:justify-between  md:space-x-10 md:text-left xxl:space-x-36">
        <li className="mb-3 block w-full md:mb-0 md:inline-block md:w-auto">
          <Link
            href="/"
            className="block w-full font-regular text-black hover:text-blue md:inline-block md:w-auto"
          >
            Why Valadate?
          </Link>
        </li>
        <li className="mb-3  block  w-full md:mb-0 md:inline-block md:w-auto">
          <Link
            href="/"
            className="block w-full font-regular text-black hover:text-blue md:inline-block md:w-auto"
          >
            Our Mission
          </Link>
        </li>
        <li className="mb-3  block  w-full md:mb-0 md:inline-block md:w-auto">
          <Link
            href="/"
            className="block w-full font-regular text-black hover:text-blue md:inline-block md:w-auto"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

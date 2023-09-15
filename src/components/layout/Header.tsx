import Link from "next/link";
import LightDarkModeButton from "../LightDarkModeButton";

const routes = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

const Header = () => {
  return (
    <header className="sticky h-20 top-2 z-50 bg-white dark:bg-black main-transition">
      <div className="layout flex items-center justify-between py-4">
        <div className="flex-auto h-full flex flex-row">
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.name}
              className="mr-4 hover:text-primary-color"
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div>
          <LightDarkModeButton />
        </div>
      </div>
    </header>
  );
};
export default Header;

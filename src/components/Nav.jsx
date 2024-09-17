import headerLogo from "../assets/images/header-logo.svg";
import hamberger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="Header Logo" />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat text-slate-gray leading-normal">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamberger} width={25} height={25} alt="Hamberger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

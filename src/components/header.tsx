import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';

const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="flex gap-8 ">
          <li className="flex items-center">
            <a
              href="#"
              className="before:inline-block before:content-[''] before:w-px before:h-3 before:bg-green before:mr-0.5"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="opacity-70">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="opacity-70">
              Categorias
            </a>
          </li>
          <li>
            <a href="#" className="opacity-70">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-nowrap justify-end">
        <input
          type="text"
          placeholder="Buscar"
          className="rounded-l bg-dark-bg py-4 px-6 placeholder:text-white font-roboto"
        />
        <button
          type="button"
          className="bg-button-bg flex items-center justify-center rounded-r px-6 hover:brightness-90 transition-all duration-200"
        >
          <img src={search} alt="search" />
        </button>
      </div>
    </header>
  );
};

export default Header;

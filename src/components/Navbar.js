import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="mb-10 flex justify-between p-5 w-full">
      <div className={"bg-neutral-50 shadow-md shadow-neutral-300 p-3 text-white rounded-md dark:bg-slate-700 dark:shadow-slate-950"}>
        <h1 className={"bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-bold"}>
            J H
        </h1>
      </div>
      <ul className="flex items-center">
        <li className={"bg-neutral-200 dark:bg-slate-800 w-10 p-1 rounded-3xl shadow-inner shadow-gray-600 dark:shadow-black cursor-pointer"}
            onClick={()=>toggleDarkMode()}>
            <BsFillMoonStarsFill className="transition fill-black dark:fill-white dark:translate-x-4"/>
        </li>
        <li className={"transition ease-in-out hover:scale-95"}>
          <a href={"#"} className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-5 py-2 rounded-md ml-6">
              Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
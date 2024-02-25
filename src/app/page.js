import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
export default function Home() {
  return (
    <main>
      <section className="min-h-screen">
          <nav className="p-2.5 mb-10 flex justify-between">
              <h1>Johan Hernandez</h1>
              <ul>
                  <li>
                      <BsFillMoonStarsFill/>
                  </li>
                  <li>
                      <a href="#">Resume</a>
                  </li>
              </ul>
          </nav>
      </section>
    </main>
  );
}

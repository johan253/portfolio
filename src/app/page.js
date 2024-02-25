import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-white p-10 text-black font-burtons">
      <section className="min-h-screen">
          <nav className="mb-10 flex justify-between">
              <h1 className="text-xl">Johan Hernandez</h1>
              <ul className="flex items-center">
                  <li>
                      <BsFillMoonStarsFill className="cursor-pointer"/>
                  </li>
                  <li>
                      <a href="#" className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-5 py-2 rounded-md ml-8">
                          Resume
                      </a>
                  </li>
              </ul>
          </nav>
          <div>
              <h2>Aspiring Software Engineer</h2>
              <p>Computer Science Student at UWT. Passionate about programming and solving problems.
              Connect with me and get to know me better!</p>
          </div>
          <div>
              <AiFillLinkedin/>
              <AiFillGithub/>
              <AiFillMail/>
          </div>
      </section>
    </main>
  );
}

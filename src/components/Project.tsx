import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import error from "../assets/error.png";

export type Project = {
    id: string,
    name: string,
    tags: { name: string }[],
    img: string,
    description: string,
    url: string,
    order: number
}

export default function ProjectCard({ project }: { project: Project }) {
    const listTags = project.tags.map(tag =>
        <div key={tag.name} className="bg-sky-500 text-xs rounded-full py-1 px-3 inline-block m-1 text-white transition-transform transform hover:scale-105">
            {tag.name}
        </div>
    );

    return (
        <div className="bg-gradient-to-br from-neutral-100 dark:from-slate-900 dark:to-slate-800 max-w-screen-xl overflow-hidden rounded-3xl my-12 mx-auto shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="md:flex group">
                <div className="md:shrink-0 p-2 overflow-hidden">
                    <Image
                        src={project.img || error}
                        alt={project.name}
                        className="rounded-3xl h-48 w-full object-cover md:h-full md:w-56 transition-transform transform group-hover:scale-110"
                        width={1}
                        height={1}
                    />
                </div>
                <div className="flex flex-col justify-between p-6">
                    <div>
                        <h1 className="text-3xl font-sans font-bold transition-colors duration-200 group-hover:text-sky-500 flex items-center justify-between">
                            {project.name}
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className="scale-150 transition-transform transform hover:scale-175" />
                            </a>
                        </h1>
                        <p className="mt-4 text-md font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <div className="mt-4 flex flex-wrap">
                        {listTags}
                    </div>
                </div>
            </div>
        </div>
    );
}

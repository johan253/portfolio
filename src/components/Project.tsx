import Image from "next/image";
import {AiFillGithub} from "react-icons/ai";

export default function Project(props) {
    const listTags = props.tags.map(tag =>
        <div key={tag.name} className={"bg-sky-500 rounded-2xl py-1 px-3 inline-block m-2 text-white"}>{tag.name}</div>)
return (
    <div className={"bg-gradient-to-br from-neutral-100 dark:from-slate-900 dark:to-slate-800 max-w-screen-xl overflow-hidden rounded-2xl my-12 mx-auto shadow-md"}>
        <div className={"md:flex group"}>
            <div className={"md:shrink-0 p-2"}>
                <Image src={props.img} alt={props.title}
                className={"rounded-2xl h-48 w-full object-cover md:h-full md:w-56"}
                width={1}
                height={1}/>
            </div>
            <div className={"flex-wrap p-4 md:inline-block text-black dark:text-white"}>
                <h1 className={"flex text-2xl font-mono justify-between transition ease-in group-hover:text-sky-500 font-bold"}>
                    {props.title}
                    <a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>
                        <AiFillGithub className={"scale-125 transition hover:scale-150"}/>
                    </a>
                </h1>
                <p className={"text-md font-mono p-4"}>{props.desc}</p>
                <div className={"p-2"}>
                    {listTags}
                </div>
            </div>
        </div>
    </div>
)
}
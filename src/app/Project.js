import Image from "next/image";
import {AiFillGithub} from "react-icons/ai";

export default function Project(props) {
    const listTags = props.tags.map(tag =>
        <div key={tag.name} className={"bg-gradient-to-br from-sky-500 to-sky-400 rounded-2xl py-1 px-3 inline-block m-2 shadow-xl"}>{tag.name}</div>)
return (
    <div className={"bg-gradient-to-br from-blue-900 to-blue-700 max-w-screen-2xl overflow-hidden rounded-2xl my-4 shadow-lg shadow-slate-900"}>
        <div className={"md:flex"}>
            <div className={"md:shrink-0 p-2"}>
                <Image src={props.img} alt={props.title}
                className={"rounded-2xl h-48 w-full object-cover md:h-full md:w-56"}/>
            </div>
            <div className={"flex-wrap p-4 md:inline-block"}>
                <h1 className={"flex text-2xl font-mono justify-between"}>
                    {props.title}
                    <a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>
                        <AiFillGithub className={"scale-150"}/>
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
import Image from "next/image";
import {AiFillGithub} from "react-icons/ai";

export default function Project(props) {
    const listTags = props.tags.map(tag =>
        <div key={tag.name} className={"bg-gradient-to-br from-sky-500 to-sky-400 rounded-2xl py-1 px-3 inline-block m-2 shadow-xl"}>{tag.name}</div>)
return (
    <main className={"bg-gradient-to-br from-blue-900 to-blue-500 " +
        "p-5 m-5 inline-block rounded-3xl shadow-2xl shadow-gray-700 text-white max-w-md max-h-md"}>
        <div className={"flex justify-between"}>
            <h1 className={"text-2xl font-mono"}>{props.title}</h1>
            <a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>
                <AiFillGithub className={"scale-150"}/>
            </a>
        </div>
        <div className={"scale-75 max-h-fit"}>
            <Image src={props.img} alt={props.title}/>
        </div>
        <h3 className={"text-md font-mono"}>{props.desc}</h3>
        <div>
            {listTags}
        </div>
    </main>
)
}
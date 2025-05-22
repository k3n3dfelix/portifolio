import ConteudoMD from "../shared/ConteudoMD";

export interface ReadmeProps {
    markdown: string;
}

export default function Readme(props: ReadmeProps){
    return (
        <div className="flex flex-col items-stretch border border-zinc-8-- rounded-2xl">
            <div className="prose prose-zinc prose-invert">
                <ConteudoMD markdown={props.markdown} />
            </div>
        </div>
    )
}
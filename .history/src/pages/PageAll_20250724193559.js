import MyIntroduce from "./MyIntroduce";
import MySelf from "./Myself";
import Project from "./Project";
import { useRef } from "react";
import PageButton from "./PageButton";
export default function CombinedResume(){

    const pdfRef = useRef();
    return(
        <div>
            <PageButton pdfRef={pdfRef}/>
            <div ref={pdfRef} className="container col">
            <MySelf/>
            <Project/>
            <MyIntroduce/>
            </div>
        </div>
    )
}
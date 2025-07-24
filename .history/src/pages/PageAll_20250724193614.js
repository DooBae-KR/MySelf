import MyIntroduce from "./MyIntroduce";
import MySelf from "./Myself";
import Project from "./Project";
import { useRef } from "react";
import PageButton from "./PageButton";
export default function CombinedResume(){

    const pdfRef = useRef();
    return(
        <div className="container col">
            <PageButton pdfRef={pdfRef}/>
            <div ref={pdfRef} >
            <MySelf/>
            <Project/>
            <MyIntroduce/>
            </div>
        </div>
    )
}
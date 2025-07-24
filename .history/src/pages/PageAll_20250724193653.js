import MyIntroduce from "./MyIntroduce";
import MySelf from "./Myself";
import Project from "./Project";
import { useRef } from "react";
import PageButton from "./PageButton";
export default function CombinedResume(){

    const pdfRef = useRef();
    return(
        <div className="container ">
            <PageButton pdfRef={pdfRef} />
            <div ref={pdfRef} className="A4 rec">s
            <MySelf/>
            <Project/>
            <MyIntroduce/>
            </div>
        </div>
    )
}
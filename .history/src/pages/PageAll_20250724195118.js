import MyIntroduce from "./MyIntroduce";
import MySelf from "./Myself";
import Project from "./Project";
import { useRef } from "react";
import PageButton from "./PageButton";
export default function CombinedResume(){

    const pdfRef = useRef();
    return(
        <div className="container ">
            <div ref={pdfRef} className="A4 rec">
            <MySelf/>
            <Project/>
            <MyIntroduce/>
            </div>
            <PageButton pdfRef={pdfRef} />
        </div>
    )
}
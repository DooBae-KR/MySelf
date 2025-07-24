import MyIntroduce from "./MyIntroduce";
import MySelf from "./Myself";
import Project from "./Project";
import { useRef } from "react";
import PageButton from "./PageButton";
export default function CombinedResume(){

    const pfRef = useRef();
    return(
        <div>
            <PageButton pdfRef={pdfRef}/>
            <div pdfclassName="container row">
            <MySelf/>
            <Project/>
            <MyIntroduce/>
            </div>
        </div>
    )
}
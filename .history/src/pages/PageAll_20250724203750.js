import MyIntroduce from "./MyIntroduce";
import MySelf from "./Myself";
import Project from "./Project";
import { useRef } from "react";
export default function CombinedResume(){
    const pdfRef = useRef();
    return(
        <div className="container ">
            <div ref={pdfRef} className="A4 rec">
                <div className="page-section">
                    <MySelf />
                </div>
                <div className="page-break" />
                <div className="page-section">
                    <Project />
                </div>
                <div className="page-break" />
                <div className="page-section">
                    <MyIntroduce />
                </div>
                </div>
        </div>
    )
}
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
             <div>
          <MySelf />
        </div>

        <div className="page-break">
          <Project />
        </div>

        <div className="page-break">
          <MyIntroduce />
        </div>
            </div>
            <PageButton pdfRef={pdfRef} />
        </div>
    )
}
import { useRef } from "react"
import PageButton from "./PageButton"
import IntroFrom from "../data/IntroFrom";

export default function myIntroduce(){
    const pdfRef = useRef();
    return(
        <div>
            <PageButton/> 
            <div className="container">
               <div ref={pdfRef} className="A4 rec">
                <div className="title">Project</div>
                </div>
            </div>
        </div>
    )
}
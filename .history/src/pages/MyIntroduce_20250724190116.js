import { useRef } from "react"
import PageButton from "./PageButton"
import {introduce} from "../data/IntroFrom";

export default function MyIntroduce(){
    const pdfRef = useRef();
    return(
        <div>
            <PageButton pdfRef={pdfRef}/> 
            <div className="container">
               <div ref={pdfRef} className="A4 rec">
                <div className="title">Self-Introduction</div>
                </div>
            </div>
        </div>
    )
}
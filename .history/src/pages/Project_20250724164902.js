import { useRef } from "react"
import PageButton from "./PageButton"
export default function Project(){
    const pdfRef = useRef();

    return(
        <div>
            <PageButton/>
            <div className="container">
               <div ref={pdfRef} className="A4 rec">
                <div className="title">Project</div>
                    <div className="container content">
                    <div className="contentTitle">인 적 사 항</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
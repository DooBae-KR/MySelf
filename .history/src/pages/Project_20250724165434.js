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
                <div className="contentTitle">프로젝트1</div>
                    <div className="container">
                        <div className="contianer col">
                            <h2>ERD</h2>
                            <img src={}/>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
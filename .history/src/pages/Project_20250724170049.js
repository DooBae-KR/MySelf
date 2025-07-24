import { useRef } from "react"
import PageButton from "./PageButton"
import pr1ERD from "../data/img/pr1ERD.png";
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
                        <div className="container col">
                            <h2>ERD</h2>
                            <img src={pr1ERD} className="prImg"/>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
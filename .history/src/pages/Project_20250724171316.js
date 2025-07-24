import { useRef } from "react"
import PageButton from "./PageButton"
import pr1ERD from "../data/img/pr1ERD.png";
import { project } from "../data/ProjectData";
export default function Project(){
    const pdfRef = useRef();

    return(
        <div>
            <PageButton/>
            <div className="container">
               <div ref={pdfRef} className="A4 rec">
                <div className="title">Project</div>
                    <div className="contentTitle">프로젝트1</div>
                        <div className="container col full">
                            <h2>ERD</h2>
                            <dt>
                                <img src={pr1ERD} className="prImg"/>
                                <pre>내용 1</pre>
                            </dt>

                                <h2>페이지별 기능 </h2>
                            {project.map((item,index)=>(
                            <dt>
                                <strong>{item.title}</strong>
                                <img src={pr1ERD} className="prImg"/>
                                <pre>{item.context}</pre>
                            </dt>
                        ))}
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
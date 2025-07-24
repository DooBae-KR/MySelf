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
                        {project.map((item,index)=>(
                    <div className="contentTitle">프로젝트1</div>
                        <div className="container col full">
                            <h2>ERD</h2>
                            <div className="container">                            
                                <img src={pr1ERD} className="prImg"/>
                                <pre>내용 1</pre>
                            </div>  
                            <div  key={index}>
                                <strong>{item.title}</strong>
                                <div className="container">
                                    <img src={pr1ERD} className="prImg"/>
                                    <pre>{item.context}</pre>
                                </div>
                            </div>
                        ))}
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
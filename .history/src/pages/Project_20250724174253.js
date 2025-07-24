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
                    <div className="contentTitle"></div>
                        <div className="container col full">
                            <h2>ERD</h2>
                            <div className="container">                            
                                <img src={pr1ERD} className="prImg"/>
                                <pre>{item.erdContext}</pre>
                            </div>
                            <dt>
                            <strong>제작기간</strong>
                                <pre>{item.prDate}</pre>
                            </dt>
                            <dt>
                                <strong>프로젝트 목표</strong>
                                <pre>{item.mygoal}</pre>
                            </dt>
                            <dt>
                                <strong>프로젝트 내 역할 </strong>
                                <pre>{item.mypos}</pre>
                            </dt>
                            <div className="qrImg">
                                완료보고서 
                                <a href="https://docs.google.com/document/d/1c7s0ALs4KEspovYpJXpFgz7kD0j3aIFDr1LOGzLMwaE/edit?tab=t.0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <img src={item.img}/>
                                </a>
                            </div>
                                                        
                    </div>
            ))}
                </div>
            </div>
        </div>
    )
}
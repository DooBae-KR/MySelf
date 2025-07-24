import { useRef } from "react"
import PageButton from "./PageButton"
import { project } from "../data/ProjectData";
export default function Project(pdfRef){
    const pdfRef = useRef();

    return(
        <div>
            <PageButton/>
            <div className="container">
               <div ref={pdfRef} className="A4 rec">
                <div className="title">Project</div>
                {project.map((item,index)=>(
                    <div className="container col full">
                            <div className="contentTitle">{item.prTitle}</div>
                            <h2>ERD</h2>
                            <div className="container">                            
                                <img src={item.erdImg} className="prImg"/>
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
                                <a href={item.docuLink}
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
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
                        {project.map((item,index)=>(
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
                            <div className="prImg">
                                <img src={item.img}/>
                            </div>
                                                        
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
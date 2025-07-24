import { useRef } from "react"
import PageButton from "./PageButton"
import { project } from "../data/ProjectData";
export default function Project(){
    const pdfRef = useRef();

    return(
        <div>
            <PageButton  ref={pdfRef}/>
            <div className="container">
               <div ref={pdfRef} className="A4 rec">
                <div className="title">Project</div>
                {project.map((item,index)=>(
                    <div key={index} className="container col full">
                            <div className="contentTitle">{item.prTitle}</div>
                            
                            <div className="container pr">                 
                                <div className="container col">
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
                                </div>  
                                <div className="container col">
                                <h2>ERD</h2>         
                                <img src={item.erdImg} className="prImg"/>
                                {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <img
            src={item.erdImg}
            alt="확대된 이미지"
            className="modal-image"
            onClick={(e) => e.stopPropagation()} // 클릭 시 닫히지 않도록 방지
          />
           </div>
      )}
                                </div>
                            </div>
                            <div className="qrImg">
                                완료보고서 
                                <a href={item.docuLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <img src={item.img}/>
                                </a>
                            </div>
                                                        
                            <div className="line"/>
                    </div>
            ))}
            
                </div>
            </div>
        </div>
    )
}
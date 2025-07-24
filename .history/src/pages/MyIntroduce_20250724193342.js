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
                    {introduce.map((item,index)=>(
                        <div key={index} className="work-item" style={{ marginBottom: "20px" }}>
                            <div  className="contentTitle"><br/>지원동기</div>
                            <div className="work-item">
                                <pre>{item.context1}</pre>
                                <pre>{item.context2}</pre>
                                <pre>{item.context3}</pre>
                                <pre>{item.end}</pre>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    )
}
import { useRef } from "react"
import PageButton from "./PageButton"
export default function Project(){
    const pdfRef = useRef();

    return(
        <div>
            <PageButton/>
            <div className="container">
               <div ref={pdfRef} className="A4 rec">
                <div className="title">Introduce</div>


            </div>
        </div>
    )
}
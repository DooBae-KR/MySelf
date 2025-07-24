import React, {useRef} from "react";
import { myInfo,myWorkSkill,myLicense,myQr } from "../data/MyInform"
import * as html2pdf  from "html2pdf.js";
import profile from "../data/증명사진.jpg";
import notion from "../data/notion.svg";
export default function MySelf(){
    const pdfRef = useRef();

    const handleDownloadPDF = () => {
    const element = pdfRef.current;
    const opt = {
      margin: 0.2,
      filename: '이력서.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };
    return(
            <div className="htmltoPdfbtn"style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={handleDownloadPDF}>PDF로 저장하기</button>
            </div>
        <div ref={pdfRef} className="A4 rec">
            <div className="title">Introduce</div>
            <div className="container content">
                <div className="contentTitle">인 적 사 항</div>
                <div className="container">
                     <img src={profile}alt="프로필 사진" className="myimg" />                
                    <div className="context">
                        <p><strong>· 이름 : </strong>{myInfo.name}</p>
                        <p><strong>· 이메일 : </strong> {myInfo.email}</p>
                        <p><strong>· 연락처 : </strong>{myInfo.phone}</p>
                        <p><strong>· 대학교 : </strong>{myInfo.collage} ({myInfo.collageMajor})</p>
                        <p><strong>· 고등학교 : </strong>{myInfo.highSchool} ({myInfo.highScMajor})</p>
                    </div>
                </div>
                    <div className="line"/>
                <div className="container">
                    <div className="container col">
                        <div className="contentTitle">경 력 사 항</div>
                        <div className="context">
                            {myWorkSkill.map((item, index) => (
                                <div key={index} className="work-item" style={{ marginBottom: "20px" }}>
                                <h2>{item.name}</h2>
                                <pre><span>{item.time} </span> | {item.session}</pre>
                                <strong>· 주업무 : <br/></strong>
                                <pre>
                                    {item.content}
                                </pre>

                                {/* study */}
                                <strong>· 업무 :</strong> 
                                <pre style={{ marginTop: "10px" }}>
                                {item.study}
                                </pre>
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div className="container col">
                        <div className="contentTitle">프 로 젝 트</div>
                        <div className="context">
                            {myQr.map((item,index)=>(
                                <div key={index} className="work-item" >
                                    <span className="placeholder">Qr코드 클릭 시 링크 접속 가능</span>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                   <img className="imgQr" src={notion}/>
                                   </a>
                                </div>
                            ))}
                        </div>
                         <div className="contentTitle">자 격 증</div>
                         <div className="context">
                            {myLicense.map((item,index)=>(
                                <div key={index} className="work-item" style={{ marginBottom: "20px" }}>
                                <strong>· {item.name}</strong>
                                <pre>취득일 : {item.date}</pre>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
        
    </div>
        
    )
}
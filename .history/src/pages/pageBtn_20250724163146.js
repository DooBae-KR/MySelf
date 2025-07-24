import { useLocation,useNavigate } from "react-router-dom";

export default function PageBtn(){

    const navigate = useNavigate();
    const location = useLocation();
  //pdf변환
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

  //프로젝트이동
    
    const goProject = () => {
        navigate("/project");
    };



    return(
        <div className="htmltoPdfbtn"style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={handleDownloadPDF}>PDF로 저장하기</button>
                <button onClick={goProject}>프로젝트로 이동하기</button>
            </div>
    )
}
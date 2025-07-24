import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function PageButton({pdfRef}) {
  const navigate = useNavigate();
  const location = useLocation();

  // PDF 변환
  const handleDownloadPDF = () => {
    const element = pdfRef.current;
    if(!element){
      return;
    }
    const opt = {
      margin: 0.2,
      filename: "이력서.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { 
        scale: 2,
        scrollY: 0,
        useCORS: true,
       },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  // 프로젝트 이동
  const goProject = () => {
    if (location.pathname === "/project") {
      navigate("/"); // 이력서 페이지 경로 예시 (필요 시 변경 가능)
    } else {
      navigate("/project");
    }
  };
  const goIntroduce =()=>{
    if (location.pathname === "/myIntro") {
      navigate("/"); // 이력서 페이지 경로 예시 (필요 시 변경 가능)
    } else {
      navigate("/myIntro");
    }
  }

  // 현재 경로에 따라 버튼 문구 다르게 설정
  const buttonText =
    location.pathname === "/project"
      ? "지원자 이력으로 이동"
      : "프로젝트로 이동하기";

  const buttonText2 =
    location.pathname === "/myIntro"
    ? "지원자 이력으로 이동"
    : "자기소개서로 이동하기";

    const buttonText3 =
    location.pathname === "/page"
    ? "지원자 이력으로 이동"
    : "자기소개서로 이동하기";

  return (
    <div className="htmltoPdfbtn" style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleDownloadPDF}>PDF로 저장하기</button>
      <button onClick={goProject}>{buttonText}</button>
      <button onClick={goIntroduce}>{buttonText2}</button>
    </div>
  );
}

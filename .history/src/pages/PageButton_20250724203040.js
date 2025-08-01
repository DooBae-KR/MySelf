import { useLocation, useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";

export default function PageButton({pdfRef}) {
  const navigate = useNavigate();
  const location = useLocation();

  // PDF 변환
  const handleDownloadPDF = () => {
   setTimeout(() => {
    const element = pdfRef.current;
    if (!element) {
      alert("PDF DOM 요소가 아직 준비되지 않았습니다.");
      return;
    }

    const opt = {
      margin: 0.1,
      filename: "이력서.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { 
        scale: 1,
        scrollY: 0,
        useCORS: true,
       },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  },300);
}

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
   const goAll =()=>{
    if (location.pathname === "/page") {
      navigate("/"); // 이력서 페이지 경로 예시 (필요 시 변경 가능)
    } else {
      navigate("/page");
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
    : "전체보기";

  return (
    <div className="htmltoPdfbtn" style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleDownloadPDF}>PDF로 저장하기</button>
      <button onClick={goProject}>{buttonText}</button>
      <button onClick={goIntroduce}>{buttonText2}</button>
      <button onClick={goAll}>{buttonText3}</button>
    </div>
  );
}

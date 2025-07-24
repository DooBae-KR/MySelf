export default function PageBtn(){
    return(
        <div className="htmltoPdfbtn"style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={handleDownloadPDF}>PDF로 저장하기</button>
                <button onClick={goProject}>프로젝트로 이동하기</button>
            </div>
    )
}
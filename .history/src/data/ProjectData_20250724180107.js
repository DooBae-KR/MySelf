import pr1Docu from "./img/qr/pr1docu.svg";
import pr1ERD from "./img/pr1ERD.png";
import pr2ERD from "./img/pr2Erd.jpg";

export const project= [
    {   
    prTitle: "CGV 벤치마킹",
    mypos :"프론트와 CSS담당",
    erdImg : pr1ERD,
    mygoal : `가) CGV홈페이지 벤치마킹으로 html, 개념 확립
 나) 예매기능을 통해 실시간 데이터 처리기능
 다) 회원정보 유효성 검사
 라) 내가 본영화들 리뷰기능
`,
    prDate : "2025.05.20 ~ 2025.06.02 ",
    erdContext : "사용자가 영화를 극장안에 있는 상영관에서 예매하고, 리뷰를 작성하는 구조입니다.",
    img :pr1Docu,
    docuLink : "https://docs.google.com/document/d/1c7s0ALs4KEspovYpJXpFgz7kD0j3aIFDr1LOGzLMwaE/edit?tab=t.0"
    },
    {
        prTitle: "음식점 위생지도",
        mypos :"카카오맵api와 css 프론트기능,  유저시스템 구축",
        erdImg : pr2ERD,
        mygoal : `가) 유저 기능과 검색어 등 웹 서비스의 전반적인 구조 학습
나) DB설계를 통해 정규화 및 관계형 구조 학습
다) 공공데이터를 활용한 주소 기반 위치 표시
라) 카테고리 기능을 사용한 지도위치 노출 범위 조정 및 변경
마) 공공데이터 OpenAPI를 활용하여 데이터 전처리 및 가공 학습
바) 위생 정보 시각화를 통한 사용자 편의성 및 정보 접근성 향상
사) 파일관리로 가독성 향상

`,
prDate : "2025.07.03 ~ 2025.07.16 ",
erdContext : "공공데이터api를 통해 데이터를 전처리, 가공을 하여 지도에 마커와 오버레이를 랜더링하는 구조입니다.",
       img :pr1Docu,
    docuLink : "https://docs.google.com/document/d/1c7s0ALs4KEspovYpJXpFgz7kD0j3aIFDr1LOGzLMwaE/edit?tab=t.0"
    }


]


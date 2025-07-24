import { myInfo,myWorkSkill,myLicense } from "../data/MyInform"
export default function MySelf(){

    return(
        <div className="A4 rec">
            <div className="title">Introduce</div>
            <div className="container content">
                <div className="contentTitle">인 적 사 항</div>
                  <div className="context">
                    <p><strong>이름 : </strong>{myInfo.name}</p>
                    <p><strong>이메일 : </strong> {myInfo.email}</p>
                    <p><strong>연락처 : </strong>{myInfo.phone}</p>
                    <p><strong>대학 : </strong>{myInfo.collage} ({myInfo.collageMajor})</p>
                    <p><strong>고등학교 : </strong>{myInfo.highSchool} ({myInfo.highScMajor})</p>
                </div>
            </div>


        </div>
    )
}
import { myInfo,myWorkSkill,myLicense } from "../data/MyInform"
export default function MySelf(){

    return(
        <div className="A4 rec">
            <div className="title">Introduce</div>
            <div className="container content">
                <div className="contentTitle">인 적 사 항</div>
                  <div className="context">
                    <p><strong>이름: </strong>{myInfo.name}</p>
                    <p>이메일: {myInfo.email}</p>
                    <p>연락처: {myInfo.phone}</p>
                    <p>학력: {myInfo.highSchool} ({myInfo.highScMajor})</p>
                    <p>대학: {myInfo.collage} ({myInfo.collageMajor})</p>
                </div>
            </div>


        </div>
    )
}
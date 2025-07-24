import { myInfo,myWorkSkill,myLicense } from "../data/MyInform"
import profile from "../data/증명사진.jpg";
export default function MySelf(){

    return(
        <div className="A4 rec">
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
                <div className="contentTitle">경 력 사 항</div>
                   <div className="context">
                    {myWorkSkill.map((item, index) => (
                        <div key={index} className="work-item" style={{ marginBottom: "20px" }}>
                        <strong>· {item.name}</strong>
                        <p><span>{item.time} </span> | {item.session}</p>
                        <strong>주업무 : <br/></strong>
                        <pre>
                            {item.content}
                        </pre>

                        {/* study */}
                        <strong>📌 배운 점:</strong> 
                        <p style={{ marginTop: "10px" }}>
                          {item.study}
                        </p>
                        </div>
                    ))} 
            </div>


            </div>
        </div>
        
    )
}
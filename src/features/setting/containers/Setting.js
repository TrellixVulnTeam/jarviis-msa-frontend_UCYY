import React, { useEffect } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";


const setting = () => {
    var datagrid;
    var SBGridProperties;
        
    //임의의 jsonData
    var grid_data = [
            {"check":"true", "academy":"대성학원", "name":"이현수", "phone":"010-5555-1548","link":"a"},
            {"check":"false","academy":"노량진학원","name":"이기승","phone":"010-4861-0321","link":"b"}];

    
    useEffect(()=>{
        createGrid()
    },[])
        
    //그리드 선언
    function createGrid(){
            SBGridProperties.parentid = 'SBGridArea';
            SBGridProperties.id = 'datagrid';
            SBGridProperties.jsonref = 'grid_data';
            SBGridProperties.columns = [
                    {caption : [''],               ref : 'check',        width : '30px',    style : 'text-align:center',    type : 'checkbox'},
                    {caption : ['학원명'],          ref : 'academy',      width : '168px',   style : 'text-align:center',    type : 'input'},
                    {caption : ['설립자(성명)'],    ref : 'name',         width : '163px',   style : 'text-align:center',    type : 'output'},
                    {caption : ['전화번호'],        ref : 'phone',        width : '120px',   style : 'text-align:center',    type : 'input'},
                    {caption : ['바로가기'],        ref : 'link',         width : '100px',   style : 'text-align:center',    type : 'outputbutton'}
            ];
            datagrid = _SBGrid.create(SBGridProperties);
    };
    return(
        <>
          <div id="SBGridArea" style={{width:"100%", height:"300px"}}>ddddddddddddddddd</div>
        </>
    )
};

export default setting;


// const setting = () => {

//     let boxStyle = {
//         width: '40%',
//         height: '200px',
//         fontSize: '30px',
//         lineHeight: '200px',
//         background: 'black',
//         color: 'white',
//         textAlign: 'center'
//     }

//     useEffect(() => {
//         AOS.init({
//             duration : 1000
//         });
//     });

//     return(
//         <>
//           <div>
//             <div>
//                 <p data-aos="fade-up">AOS 테스트1</p>
//             </div>
//             <div style={{height: '500px'}}></div>
//             <div style={boxStyle}>
//                 <p data-aos="fade-up">AOS 테스트2</p>
//             </div>
//             <div style={{height: '500px'}}></div>
//             <div style={boxStyle} data-aos="fade-up">
//                 <p>AOS 테스트3</p>
//             </div>
//             <div style={{height: '500px'}}></div>
            
//           </div>
//         </>
//     )
// };

// export default setting;
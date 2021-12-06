

export default function Test (){

var donutChart;
var datagrid;
 
function fnDonutChart() {
    donutChart = sb.chart.render("#donutChartWrap", {
        data : {
            type:"donut",
            json: grid_data,
            keys: {
                x: "month",
                value: ["inchon","kimhae","kimpo","jeju","busan"]
            },
            legends: {"inchon":"인천","kimhae":"김해","kimpo":"김포","jeju":"제주","busan":"부산"}
        },
        legend: {
            padding: 20
        },
        title : {
            text: "2019년 지역별 자산 대 부채율(단위: %)",
            position: "top-center",
            padding: {
                top: 0, right: 0, bottom: 10, left: 0
            }
        },
        extend: {
            donut: {
                padding: 3
            }
        },
        global: {
            color : {
                pattern: ["#5071B8","#49C6B8","#F1983E","#F16448","#A266AC"]
            },
            animation: {
                show: true,                            
                type: "circle",                          
                delay: 800,                            
                ease: "linear"                   
            }
        }   
    }).render();        
};                                      
return(
function createElements() {
    var SBGridProperties = {};  
    SBGridProperties.parentid           = 'sbGridArea';
    SBGridProperties.id                 = 'datagrid';
    SBGridProperties.jsonref            = 'grid_data';
    SBGridProperties.backcoloralternate = '#FAFAFA';
    SBGridProperties.rowheight          = '30';
    SBGridProperties.fixedrowheight     = '38';
    SBGridProperties.extendlastcol      = 'scroll';
    SBGridProperties.oneclickedit       = true;
    SBGridProperties.explorerbar        = 'move';
     
    SBGridProperties.columns = [
        {caption: ['년도','2019년'],           width:'7%',     ref: 'month',   type : 'output',       style: 'text-align:center;'},
        {caption: ['지역정보','인천'],            width:'9%',     ref: 'inchon',  type : 'input',         style: 'text-align:center;' , "format" : "#,###" },
        {caption: ['지역정보','김해'],            width:'9%',     ref: 'kimhae',  type : 'input',         style: 'text-align:center;' , "format" : "#,###" },
        {caption: ['지역정보','김포'],            width:'9%',     ref: 'jeju',    type : 'input',         style: 'text-align:center;' , "format" : "#,###" },
        {caption: ['지역정보','부산'],            width:'9%',     ref: 'busan',   type : 'input',         style: 'text-align:center;' , "format" : "#,###" },
        {caption: ['통계정보','소득비'],       width:'12%',    ref :'income',  type : 'combo',         style: 'text-align:center;' ,   typeinfo : {ref:'chComboData', label:'name', value:'code' , itemcount : 4, 'displayui':true} },
        {caption: ['통계정보','지출비'],       width:'12%',    ref :'outcome', type : 'inputcombo',    style: 'text-align:center;' ,   typeinfo : {ref:'chComboData', label:'name', value:'code' , itemcount : 4} },
        {caption: ['통계정보','시책발표'],      width:'5%',     ref :'chk',     type : 'checkbox',      style: 'text-align:center;' ,   typeinfo : {checkedvalue : 'Y'} },
        {caption: ['통계정보','전환시점'],      width:'5%',     ref :'rao',     type : 'radio',         style: 'text-align:center;' },
        {caption: ['통계정보','통계발표일'], width:'14%',    ref :'stDate',  type : 'inputdate',     style: 'text-align:center;' ,   typeinfo : {locale : 'ko', dateformat : 'yymmdd'}},
        {caption: ['통계정보','비고'],            width:'9%',     ref :'etc',     type : 'textarea',      style: 'text-align:center;'}            
    ];
    datagrid = _SBGrid.create(SBGridProperties);
    datagrid.bind("valuechanged","chartDataChange");
});

 
function chartDataChange(){
    donutChart.data({json:grid_data}).render();}
}
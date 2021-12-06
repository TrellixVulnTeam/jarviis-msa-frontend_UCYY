import React from "react";
import { BarChart, BarData, LineChart, LineData, LogChart, PieChart, PieData } from "features/review/index";
import styled from 'styled-components'

export default function Review() {
    return(<>
    <div style={{textAlign:"center"}}>
        <h1>Review test</h1>
    </div>
    <ChartDiv>
        <BarChart data= {BarData}/>
    </ChartDiv>
    <ChartDiv>
        <LineChart data= {LineData}/>
    </ChartDiv>
    <ChartDiv>
        <PieChart data= {PieData}/>
    </ChartDiv>
    <ChartDiv>
        <LogChart/>
    </ChartDiv>
    </>)
}
const ChartDiv = styled.div`
    margin: 0 auto;
    height: 400px;
    width: 850px;
`
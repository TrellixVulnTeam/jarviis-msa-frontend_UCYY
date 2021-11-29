import React, { useState } from "react";
import { BarChart, BarData, LineChart, LineData, LogChart, PieChart, PieData } from "features/review/index";
import styled from 'styled-components'


export default function Goal() {
    return(<>
    <div>
        <h1>Goal test</h1>
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
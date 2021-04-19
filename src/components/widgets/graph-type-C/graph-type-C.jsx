import React from 'react'; 
import CanvasJSReact from '../../../assets/canvasjs.stock.react';
const CanvasJSStockChart=CanvasJSReact.CanvasJSStockChart;
// const CanvasJS=CanvasJSReact.CanvasJS;


const GraphTypeC=({ dataPoints1,dataPoints2,dataPoints3,sliderMin,sliderMax,isLoaded,graphType,socialMatrix })=>{

    const containerProps={
        width: "95%",
        height: "35rem",
        margin:"auto"
    };

    const options={
        backgroundColor:"#01010eea",
        theme:"dark1",
        colorSet:"colorSet3",
        animationEnabled: true,
        animationDuration: 3000,
        subtitles:[{
            text: `Price--${socialMatrix.label}  Trend`,
            horizontalAlign:"left",
            fontColor:"#b90dee"
        }],
        navigator: {
            data: [{
                dataPoints: dataPoints3
            }],
            slider: {
                minimum: sliderMin,
                maximum: sliderMax
            }
        },
        charts:[
            {
                axisX:{
                    lineThickness: 1,
                    tickLength: 0,
                    labelFormatter: (e)=>{
                        return "";
                    },
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true,
                        labelFormatter: (e)=>{
                        return "";
                        }
                    }
                },
                axisY: {
                    title: "Price",
                    prefix: "$",
                    tickLength: 0,
                    lineThickness: 0
                },
                toolTip: {
                    shared: true
                },
                data: [{
                    name: "Price (in USD)",
                    yValueFormatString: "$#,###.##",
                    risingColor: "#48e248",
                    color: "#eb1b1b",
                    type: "candlestick",
                    dataPoints : dataPoints1
                }]
            },
            {
                axisX: {
                    lineThickness: 0,
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true
                    },
                },
                axisY: {
                    title: "Price",
                    lineThickness: 0,
                    prefix: "$",
                    gridColor:"#d0ccd4",
                    gridThickness:1,
                    labelFontColor:"#a5aaac",
                    titleFontColor:"#f1ecf3"
                },
                toolTip: {
                    shared: true
                },
                data: [{
                    name: "Price (in USD)",
                    height: "5rem",
                    yValueFormatString: "$#,###.##",
                    type: "spline",
                    lineColor:"#b90dee",
                    lineThickness:1,
                    dataPoints : dataPoints2
                }]
            },
            {
                height: 100,
                axisX: {
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true
                    }
                },
                axisY: {
                    title: `${socialMatrix.label}`,
                    tickLength: 0
                },
                toolTip: {
                    shared: true
                },
                data: [{
                    name: `${socialMatrix.label}`,
                    yValueFormatString: "#,###.##",
                    type: "column",
                    dataPoints : dataPoints3
                }]
            }
        ]
    };

    (()=>{
        let newCharts=options.charts.filter((item,index)=>{
            return (item.data[0].type==='column' || item.data[0].type===`${graphType}`)              // perform string checking 
        })
        options.charts=newCharts; 
    })(); 


    return (
        <>
            {
                isLoaded &&     <CanvasJSStockChart 
                                    containerProps={containerProps} 
                                    options={options}
                                    /* onRef = {ref => this.chart = ref} */
                                />
            }
        </>
    );
}; 

export default GraphTypeC; 

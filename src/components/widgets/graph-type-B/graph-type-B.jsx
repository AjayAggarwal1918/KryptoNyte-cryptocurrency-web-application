import React from 'react'; 
import { CartesianGrid,Tooltip,AreaChart,Area,XAxis,YAxis,linearGradient} from "recharts";

const GraphTypeB=(props)=>{	
    
    return (
        <AreaChart
            width={990}
            height={500}
            data={props.data}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" axisLine={false}  />
            { props.right && <YAxis 
                                yAxisId="right" 
                                orientation="right" 
                                axisLine={false} 
                            />}
            <Tooltip 
                offset={2}
                contentStyle={{
                                background:'#01010eea'
                            }}
                labelStyle={{
                                color:'white'
                            }}
            />
            <Area 
                yAxisId="left" 
                type="monotone" 
                dataKey={props.YAxes1} 
                dot={false}
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#colorUv)"
                activeDot={{ r: 4,strokeWidth:4 }} 
                animationEasing='ease-in-out'
                animationDuration={2000}
            />
            { props.right && <Area yAxisId="right" 
                                type="monotone" 
                                dataKey={props.YAxes2} 
                                stroke="#82ca9d" 
                                fillOpacity={1} 
                                fill="url(#colorPv)"
                                dot={false} 
                                activeDot={{ r: 4,strokeWidth:4 }}
                                animationEasing='ease-in-out'
                                animationDuration={2000}
                                legendType='circle'
                            />}
            </AreaChart>
    );
}

export default GraphTypeB;


// props.YAxes2
// props.YAxes1
// props.right
// props.data=[{name:'',props.YAxes1,props.YAxes2}]




// <LineChart
// width={990}
// height={500}
// data={props.data}
// >

// <CartesianGrid vertical={false} />
// <XAxis dataKey="name" />
// <YAxis yAxisId="left" axisLine={false}  />
// { props.right && <YAxis 
//                     yAxisId="right" 
//                     orientation="right" 
//                     axisLine={false} 
//                 />}
// <Tooltip 
//     offset={2}
//     contentStyle={{
//         background:'rgb(34, 31, 48)'
//     }}
//     labelStyle={{
//         color:'white'
//     }}
// />
// <Line 
//     yAxisId="left" 
//     type="monotone" 
//     dataKey={props.YAxes1} 
//     dot={false} 
//     stroke="#8884d8" 
//     activeDot={{ r: 4,strokeWidth:4 }} 
// />
// { props.right && <Line yAxisId="right" 
//                 type="monotone" 
//                 dataKey={props.YAxes2} 
//                 stroke="#82ca9d" 
//                 dot={false} 
//                 activeDot={{ r: 4,strokeWidth:4 }} 
//             />
// }
// </LineChart>














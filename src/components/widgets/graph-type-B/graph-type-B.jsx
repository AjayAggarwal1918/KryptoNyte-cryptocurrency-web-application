import React from 'react'; 
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

const GraphTypeB=(props)=>{	
    
    return (
        <LineChart
            width={1000}
            height={550}
            data={props.data}
        >

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
                    background:'rgb(34, 31, 48)'
                }}
                labelStyle={{
                    color:'white'
                }}
            />
            <Legend />
            <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey={props.YAxes1} 
                dot={false} 
                stroke="#8884d8" 
                activeDot={{ r: 4,strokeWidth:4 }} 
            />
            { props.right && <Line yAxisId="right" 
                            type="monotone" 
                            dataKey={props.YAxes2} 
                            stroke="#82ca9d" 
                            dot={false} 
                            activeDot={{ r: 4,strokeWidth:4 }} 
                        />
            }
        </LineChart>
    );
}

export default GraphTypeB;


// props.YAxes2
// props.YAxes1
// props.right
// props.data=[{name:'',props.YAxes1,props.YAxes2}]
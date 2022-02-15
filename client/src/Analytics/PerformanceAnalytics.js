import { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { getPerf } from "../services/UserService";
import './Analytics.css'

export default function PerformanceAnalytics(props) {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getPerformance() {
            const response = await getPerf(props.userID)
            const newData = []

            if (!response) return

            response.data.map(d => {
                newData.push(
                    {
                        value: d.value,
                        name: response.kind[d.kind]
                    }
                )
            })
            setData(newData)

        }

        getPerformance()
    }, [])

    console.log(data);

    
    if (!data) return (
        <div>
            <h1>NOT DATA</h1>
        </div>
    )
    
    console.log(data);

    return (
            <RadarChart cy="50%" cx="50%" outerRadius="80%" width={220} height={220} data={data} className="PerformanceAnalytics">
                <PolarGrid color="#ffffff" stroke="#ffffff" />
                <PolarAngleAxis dataKey="name" stroke="#ffffff" />
                <Radar dataKey="value" fill="#ff0101" stroke="#ff0101" fillOpacity={0.7} strokeOpacity={0.7}  />
            </RadarChart>
        
    )

}
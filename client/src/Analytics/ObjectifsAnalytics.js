import { useEffect, useState } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis } from "recharts";
import { getAvarageSession } from "../services/UserService";
import './Analytics.css'

export default function ObjectifsAnalytics() {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getSession() {
            const response = await getAvarageSession(12)
            setData(response)
        }

        getSession()
    }, [])

    if (!data) return (
        <div>
            <h1>ERREUR !</h1>
        </div>
    )

    function CustomTooltip({ active, payload, label }) {
        
        if (active && payload[0].value !== null) {
            return (
                <div className="tooltip-objectifs">
                    <h4>{ payload[0].value } min</h4>
                </div>
            )
        }

        return null
    }

    return (
        <LineChart width={258} height={263} data={data.sessions} className="ObjectifsAnalytics" >
            <XAxis dataKey="day" tickLine={false} axisLine={false} domain={[ "L", "M", "M", "J", "V", "S", "D" ]} />
            <Tooltip name="DAY" content={<CustomTooltip />} />
            <defs>
                <linearGradient id="lineID" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={10}/>
                </linearGradient>
            </defs>
            <Line name="day" type="monotone" dataKey="sessionLength" stroke="url(#lineID)" dot={false} strokeWidth={4} strokeOpacity={10} />
            <Legend />
        </LineChart>
    )

}
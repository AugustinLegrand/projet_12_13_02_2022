import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, PolarGrid, Tooltip, XAxis, YAxis } from "recharts";
import { getActivity } from "../services/UserService";
import './Analytics.css'

export default function ActivityAnalytics() {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getActivities() {
            const response = await getActivity(12)

            setData(response.sessions)
        }

        getActivities()
    }, [])

    function CustomTooltip({ active, payload, label }) {
        
        if (active && payload[0].value !== null && payload[1].value !== null) {
            return (
                <div className="tooltip">
                    <h4>{ payload[0].value }kg</h4>
                    <h4>{ payload[1].value }Kcal</h4>
                </div>
            )
        }

        return null
    }


    return (
        <BarChart width={1000} height={400} data={data} barGap={10}>
            <CartesianGrid stroke="#eee" vertical={false} />
            <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{paddingBottom: "20px"}} />
            <YAxis tickLine={false} axisLine={false} orientation='right' />
            <XAxis tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#E60000', color: 'white', padding: "6px", display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            <Bar barSize={10} dataKey="kilogram" fill="#000000" name="Poigds (kg)" radius={[10, 10, 0, 0]} />
            <Bar barSize={10} dataKey="calories" fill="#ff0000" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} />
        </BarChart>
    )

}
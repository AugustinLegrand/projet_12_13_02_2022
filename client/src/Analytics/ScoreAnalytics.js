import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Cell, Label, Pie, PieChart, Text } from "recharts";
import { findID } from "../services/UserService";

export default function ScoreAnalytics(props) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        async function getUser() {
            const response = await findID(props.userID)
            const data = []

            data.push(
                {
                    value: (response.todayScore && response.todayScore) * 100 || (response.score && response.score) * 100,
                    hidden: false
                },
                {
                    value: 100 - ((response.todayScore && response.todayScore * 100) || (response.score && response.score) * 100),
                    hidden: true
                }
            )

            setUser(data)
        }

        getUser()
    }, [])

    const COLORS = ['#FF0000', '#FFFFFF']

    if (!user) return 'NO USER ID'

    function CustomLabel({ viewBox, value1, value2 }) {
        console.log(viewBox, "v");
        const { cx, cy } = viewBox;
        return (
          <svg
            // width="500"
            // height="200"
            className="recharts-text recharts-label"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <text x={cx} y={cy} fill="#3d405c">
              <tspan x={cx} dy="0em" alignmentBaseline="middle" fontSize="26" fontWeight="bold">
                {value1}
              </tspan>
              <tspan x={cx} dy="1em" fontSize="16">
                {value2}
              </tspan>
            </text>
          </svg>
          //  <text x={cx} y={cy} fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
          //     <tspan alignmentBaseline="middle" fontSize="26">{value1}</tspan>
          //     <tspan fontSize="14">{value2}</tspan>
          //  </text>
        );
      }
    return (
        <PieChart width={200} height={200} startAngle={90}>
            <Pie 
                data={user} 
                cx={100} 
                cy={100}
                startAngle={-270}
                labelLine={false}
                innerRadius={80} 
                outerRadius="100%"
                fill="#FF0000"
                textAnchor='end'>
                    <Label width={50} position="center" content={<CustomLabel value1={(user[0].value) + "%"} value2={"de votre objectif"} />}>
                    </Label>
                    {
                        user && user.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} display={(user.hidden === true) ? "none" : ""} />)
                    }
                
            </Pie>
        </PieChart>
    )

}
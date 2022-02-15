import { useEffect, useState } from "react"
import ActivityAnalytics from "../../Analytics/ActivityAnalytics"
import ObjectifsAnalytics from "../../Analytics/ObjectifsAnalytics"
import PerformanceAnalytics from "../../Analytics/PerformanceAnalytics"
import ScoreAnalytics from "../../Analytics/ScoreAnalytics"
import { findID } from "../../services/UserService"
import Stats from "./Components/Stats/Stats"
import './User.css'

export default function UserPage(props) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        async function getUser() {
            const response = await findID(props.userID)
            setUser(response)
        }

        getUser()
    }, [])

    if (!user) return 'NO USER ID'

    console.log(user);

    return (
        <div className="user">
            <div className="user-infos">
                <h1>Bonjour <span>{user && user.userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez exposé vos objectifs hier 👏</p>
            </div>
            <div className="user-container">
                <div className="user-analytics">
                    <div className="user-stats">
                        <ActivityAnalytics userID={props.userID} />
                    </div>
                    <div className="user-test">
                        <div>
                            <ObjectifsAnalytics userID={props.userID} />
                        </div>
                        <div>
                            <PerformanceAnalytics userID={props.userID} />
                        </div>
                        <div>
                            <ScoreAnalytics userID={props.userID} />
                        </div>
                    </div>
                </div>
                <div className="stats-container">
                    <Stats name="Calories" value="1,930kCal" img="../../calories-icon.svg" />
                    <Stats name="Proteines" value="155g" img="../../protein-icon.svg" />
                    <Stats name="Glucides" value="290g" img="../../carbs-icon.svg" />
                    <Stats name="Lipides" value="50g" img="../../fat-icon.svg" />
                </div>
            </div>
        </div>
    )
}
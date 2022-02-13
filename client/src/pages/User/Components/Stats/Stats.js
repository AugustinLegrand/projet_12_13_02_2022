import './Stats.css'

export default function Stats(props) {

    return (
        <div className="stats">
            <div className="stats-icon">
                <img src={props.img && props.img} alt="img stats" />
            </div>
            <div className="stats-info">
                <p className="stats-value">{ props.value && props.value }</p>
                <p className="stats-name">{ props.name && props.name }</p>
            </div>
        </div>
    )

}
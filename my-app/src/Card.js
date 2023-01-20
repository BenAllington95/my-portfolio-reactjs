export default function Card(props) {
    return (
        <div className="card">
            <div className="card-box-text">
                <h3 className="card-title">{props.title}</h3>
                <div className="card-links">
                    <span className="card-link">View Code</span>
                    <span className="card-link">View Site</span>
                </div>
            </div>
            <img className="card-img" src={props.url}/>
        </div>
    )
}
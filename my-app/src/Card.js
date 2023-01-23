export default function Card(props) {
    return (
        <div className="card">
            <div className="card-box-text">
                <h3 className="card-title">{props.title}</h3>
                <div className="card-links">
                    <a href="https//www.google.com" className="card-link"><span>View Code</span></a>
                    <a href="https//www.google.com" className="card-link"><span>View Site</span></a>
                </div>
            </div>
            <img className="card-img" src={props.url} alt={props.title}/>
        </div>
    )
}
export default function Card(props) {
    return (
        
        <a href={props.siteUrl} className="card" target="_blank" rel="noreferrer">
            <img className="card-img" src={props.url} alt={props.title}/>
            <div className="card-box-text">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-desc">{props.description}</p>
                <div className="card-links">
                    <a href={props.siteUrl} className="card-link code-link" target="_blank" rel="noreferrer">View Site</a>
                    <a href="www.google.com" className="card-link" target="_blank" rel="noreferrer">View Code</a>
                </div>
            </div>
        </a>
    )
}
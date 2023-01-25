export default function Card(props) {
    return (
        <>
        <a href={props.siteUrl} className="card" target="_blank" rel="noreferrer">
            <div className="card-box-text">
                <h3 className="card-title">{props.title}</h3>
                <div className="card-links">
                    <a href="www.google.com" className="card-link" target="_blank" rel="noreferrer">View Code</a>
                    <a href={props.siteUrl} className="card-link" target="_blank" rel="noreferrer">View Site</a>
                </div>
            </div>
            <img className="card-img" src={props.url} alt={props.title}/>
        </a>
        </>
    )
}
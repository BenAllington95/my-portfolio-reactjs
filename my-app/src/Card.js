export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <div className="card-box-text">
                <h3 className="card-title">{props.title}</h3>
            </div>
            <img className="card-img" src={props.url}/>
        </div>
    )
}
export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <img className="card-img" src={props.url}/>
        </div>
    )
}
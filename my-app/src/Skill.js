export default function Skill(props) {
    return (
        <div className="skill">
            <h3 className="skill-title">{props.title}</h3>
            <ion-icon name={props.iconName}></ion-icon>
        </div> 
    )
}
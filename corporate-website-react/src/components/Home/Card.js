import './Card.css'
const Features = (props) => {

    const title = props.featureTitle;
    const body = props.featureBody;
    const isDark = props.isDark;


    return (
        <div>
            <div className={"card" + (isDark ? ' dark': '')}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}
export default Features;

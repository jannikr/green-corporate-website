import styles from './Card.module.css';

const Card = (props) => {

    const title = props.featureTitle;
    const body = props.featureBody;
    const isDark = props.isDark;


    return (
        <div>
            <div className={`card ${(isDark ? styles.dark: '')}`}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Card
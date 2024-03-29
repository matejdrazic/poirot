import styles from './Audit.module.css';

const Audit = ({contest, description, rewards, started, ends}) => {
    return (
        <div className={styles.Audit}>
            <p>{contest}<br/>{description}</p>
            <p>{rewards}</p>
            <p>{started}</p>
            <p>{ends}</p>
        </div>
    );
}

export default Audit;
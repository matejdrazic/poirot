import styles from './Audit.module.css';

const Audit = ({contest, rewards, started, ends}) => {
    return (
        <div className={styles.Audit}>
            <p>{contest}</p>
            <p>{rewards}</p>
            <p>{started}</p>
            <p>{ends}</p>
        </div>
    );
}

export default Audit;
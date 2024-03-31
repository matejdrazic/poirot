import styles from './AuditHeaders.module.css';

const AuditHeaders = ({contest, description, rewards, started, ends}) => {
    return (
        <div className={styles.AuditHeaders}>
            <p>{contest}<br/>{description}</p>
            <p>{rewards}</p>
            <p>{started}</p>
            <p>{ends}</p>
        </div>
    );
}

export default AuditHeaders;
import styles from './Audit.module.css';

const Audit = ({contest, description, rewards, started, ends, icon}) => {
    return (
        <div className={styles.Audit}>
            <p className='font-semibold text-lg'>{contest}<br/><br /></p>
            <p className='font-semibold text-lg'>{rewards}</p>
            <p className='font-semibold text-lg'>{started}</p>
            <p className='font-semibold'>{ends}</p>
        </div>
    );
}

export default Audit;
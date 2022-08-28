import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';

const TitleBar = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}><img src='../public/images/logo.png' /></div>
        <div className={styles.buttons}>
          <button id='minBtn' className={`${styles.button} ${styles.min_btn}`}>
            <MinimizeRoundedIcon fontSize='small'/>
          </button>
          <button id='closeBtn' className={`${styles.button} ${styles.exit_btn}`}>
            <CloseRoundedIcon fontSize='small'/>
          </button>
        </div>
      </div>   
    </div>
  );
}

export default TitleBar
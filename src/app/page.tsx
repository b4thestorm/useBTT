import styles from "./page.module.css";
import Carousel from "./components/carousel";
import * as motion from "motion/react-client"

// import IconButton from '@mui/material/IconButton';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Home() {
  return (
    <div className={styles.page}>
         <h1>Better Today Tech</h1>
      <main className={styles.main}>
        <div className={styles.wall}>
          <Carousel reverse={false}/>
          <Carousel reverse={true}/>
          <Carousel reverse={false}/>
        </div>
        <div className={styles.about}>
          <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
              opacity: 1
          }}>
            BTT is a small digital consultancy 
            specializing in crafting modern
            <br/>
            digital experiences
          </motion.p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 UseBTT</p>
      </footer>
    </div>
  );
}

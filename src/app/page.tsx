import styles from "./page.module.css";
import Carousel from "./components/carousel";
import * as motion from "motion/react-client"

// import IconButton from '@mui/material/IconButton';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Better Today Tech
        </h1>
        <div className={styles.wall}>
          <Carousel reverse={false}/>
          <Carousel reverse={true}/>
          <Carousel reverse={false}/>
        </div>
        <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
              opacity: 1
        }}
        >
          BTT is a small digital consultancy
          <br/>
          specializing in crafting modern
          digital experiences
        </motion.p>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 UseBTT</p>
      </footer>
    </div>
  );
}

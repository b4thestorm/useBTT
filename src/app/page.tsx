import styles from "./page.module.css";
// import IconButton from '@mui/material/IconButton';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Better Today Tech</h1>
        <div className={styles.about}>
          <p>
            BTT is a small digital consultancy 
            <br />
            specializing in crafting modern digital experiences
          </p>
        </div>
     


      </main>
      <footer className={styles.footer}>
        <p>© 2025 UseBTT</p>
      </footer>
    </div>
  );
}

import Container from "../Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Developed by{" "}
          <a
            href="https://github.com/Vi7ality/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            vi7ality
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

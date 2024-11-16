import Container from '@/components/Container';

// import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer {...rest}>
      {/* <Container className={`${styles.footerContainer} ${styles.footerLegal}`}> */}
      <Container>
        <p>
          &copy; <a href="https://github.com/SakshiDangi">Sakshi Dangi</a>, {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
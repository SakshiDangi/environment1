import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@/components/Container';

// import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <Container >
        {/* <div className={styles.headerLogo}> */}
          {/* <p className={styles.headerTitle}> */}
        <div>
          <p>
            <Link href="/">
              Image Carbon
            </Link>
          </p>
          <h1>You could reduce 6% of the CO2 by optimizing your images!</h1>
        </div>
        {/* <ul className={styles.headerLinks}> */}
        <ul>
          <li>
            <a href="https://github.com/SakshiDangi" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
import StarWarsLogo from 'assets/star-wars-logo.png';
import StarWarsIntroVideo from 'assets/star-wars-intro.mp4';
import { Link } from "react-router-dom";
import styles from './style.module.css';

function Home() {
    return (
        <>
            <div className={styles.homeContainer}>
                <video
                    loop
                    muted
                    autoPlay
                    src={StarWarsIntroVideo}
                    className={styles.starWarsIntroVideo}
                />
                <img
                    alt="star wars logo"
                    className={styles.startWarsLogo}
                    src={StarWarsLogo}
                />
                <div className={styles.navigationContainer}>
                    <Link className={styles.link} to="characters">characters</Link>
                    <Link className={styles.link} to="planets">planets</Link>
                    <Link className={styles.link} to="starships">starships</Link>
                </div>
            </div>
        </>
    );
}

export default Home;

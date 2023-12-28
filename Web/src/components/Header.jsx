import toDoLogo from '../assets/rocket.svg';
import styles from './Header.module.css';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logo ToDo List" />
            <p>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </p>
        </header>
    )
}
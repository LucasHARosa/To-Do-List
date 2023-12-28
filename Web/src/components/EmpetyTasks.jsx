import Clipboard from '../assets/Clipboard.svg';
import styles from './EmpetyTasks.module.css';

export function EmpetyTasks(){
    return(
        <div className={styles.empety}>
            <img src={Clipboard} alt="" />
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}
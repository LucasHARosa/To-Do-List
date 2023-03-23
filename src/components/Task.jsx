import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from 'phosphor-react';
import { CheckIcon } from '@radix-ui/react-icons';
import styles from './Task.module.css';

export function Task(props){

    function handleDeleteTask(){
        props.onDeleteTask(props.id);

    }
    function handleCompletTask(){
        props.onAlterCompleteTask(props.id);
    }
    

    return(
        
        <div className={styles.task}>
            <div>
                <Checkbox.Root className={styles.CheckboxRoot} onCheckedChange={handleCompletTask} checked={props.isComplete}>
                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                        <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                {props.isComplete &&
                    <p className={styles.TextTasknot}>
                        {props.task}
                    </p>
                }
                {props.isComplete == false &&
                    <p>
                        {props.task}
                    </p>
                }
                
            </div>
            <button onClick={handleDeleteTask}  title="Deletar tarefa">
                <Trash size={24}/>
            </button>
        </div>
    )
}
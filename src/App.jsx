import { useState } from 'react'
import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css';
import { EmpetyTasks } from './components/EmpetyTasks';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './components/Task';


function App() {
  const [tasks,setTasks] = useState([
    {
      id:uuidv4(),
      task:'Finalizar a aplicação',
      isComplete: false
    },
  ]);
  
  const [newTask,setNewTask] = useState('')
  function handleCreateNewTask() {
    event.preventDefault()
    const task ={
      id: uuidv4(),
      task: newTask,
      isComplete:false
    }
    setTasks([...tasks,task])
  }

  function handleNewTasksChange(){
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <main>
          <div>
            <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
              <textarea 
                name="task" 
                placeholder="Adicione uma nova tarefa"
                value ={newTask.task}
                onChange={handleNewTasksChange}
                onInvalid={handleNewTaskInvalid}
                required 
              />
              <button>
                <span>Criar</span> 
                <PlusCircle size={16} />
              </button>
            </form>
          </div>

          <header>
            <div className={styles.created}>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div className={styles.done}>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </header>
          
          if(true){
            <EmpetyTasks/>
          }else{
            tasks.map(task=>{
              return(
                  <Task
                    key={task.id}
                    task={task.task}
                    isComplete={task.isComplete}
                  />
              )
            }) 
          }
         
          
        </main>

        
      </div>
    </div>
  )
}

export default App

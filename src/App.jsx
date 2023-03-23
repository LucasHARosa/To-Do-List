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

  let taskCompleted=0;

  function handleCreateNewTask() {
    event.preventDefault()
    const task ={
      id: uuidv4(),
      task: newTask,
      isComplete:false
    }
    setTasks([...tasks,task])
    setNewTask('')
  }

  function handleNewTasksChange(){
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(id) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    })
    setTasks(tasksWithoutDeletedOne);
  }

  function alterCompleteTask(id){
    const newTasks = tasks.map(task => {
      if(task.id === id){
        task.isComplete = !task.isComplete;
      }
      return task
    })
    setTasks(newTasks);
  }

  function tasksCompleted(){
    let numberTaskCompleted = tasks.reduce((result, task) =>{
      if(task.isComplete){
        result++;
      }
      
      return result
    },0)
    return numberTaskCompleted;
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
                value ={newTask}
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
              <span>{tasks.length}</span>
            </div>
            <div className={styles.done}>
              <p>Concluídas</p>
              {taskCompleted = tasksCompleted()}
              <span>{taskCompleted} de {tasks.length}</span>
            </div>
          </header>
          {tasks.length > 0 &&
            tasks.map(task=>{
              return(
                <Task
                  key={task.id}
                  id={task.id}
                  task={task.task}
                  isComplete={task.isComplete}
                  onDeleteTask={deleteTask}
                  onAlterCompleteTask={alterCompleteTask}
                />
              )
            })  
          }
          {tasks.length === 0 &&
            <EmpetyTasks/>
          }
          
        </main>

        
      </div>
    </div>
  )
}

export default App

import { AddIcon, Box, Checkbox, DeleteIcon, HStack, Icon, Pressable, Text, TextArea } from "native-base";

import { Header } from "../../components/Header";
import { useState } from "react";
import { taskDTO } from "../../DTO/dataDTO";
import { HideKeyBoard } from "../../components/HideKeyBoard";
import { Forms } from "../../components/Forms";


export function Home() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<taskDTO[]>([
    {id: 0, name: 'Tarefa 1', isComplete: false},
  ])

  function handleAddTask(){
    if(newTask.trim() !== ''){
      setTasks([...tasks, {id: tasks.length, name: newTask, isComplete: false}])
      setNewTask('')
    }
  }

  function handleCompleteTask(id: number){
    const newTasks = tasks.map(task => {
      if(task.id == id){
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task
    })
    setTasks(newTasks)
  }
  
  return (
    <HideKeyBoard>
      <Box w={"100%"} h={"100%"} bg={"gray.600"}>
        <Header />
        <Forms newTask={newTask} setNewTask={setNewTask} onPress={handleAddTask}/>  
        {tasks.length == 0 ? (
          <Box flex={1} alignItems={"center"} justifyContent={"center"}>
            <Text color={"gray.200"}>Sem tarefas</Text>
          </Box>
        )
        :
          <Box p={"24px"}>
            {tasks.map(task => (
              <Box key={task.id} px={"12px 8px"} py={"12px"} borderBottomWidth={"1px"} borderBottomColor={"gray.500"} bg={"gray.500"} rounded={"md"} >
                <HStack space={"8px"} alignItems={"center"} justifyContent={"center"}>
                 
                  <Box flex={1}>
                    <Text color={task.isComplete?"gray.300":"gray.100"} strikeThrough={task.isComplete} size={14} fontFamily={"body"}   >
                      {task.name}
                    </Text>
                  </Box>
                  
                  <Pressable>
                    <DeleteIcon color={"gray.200"} size={"lg"} />
                  </Pressable>
                </HStack>
              </Box>
            ))}
          </Box>
        }



        
      </Box>
    </HideKeyBoard>
  )
}


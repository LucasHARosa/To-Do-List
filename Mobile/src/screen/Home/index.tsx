import { AddIcon, Box, Checkbox, DeleteIcon, HStack, Icon, Pressable,Text,  TextArea } from "native-base";

import { Header } from "../../components/Header";
import { useState } from "react";
import { taskDTO } from "../../DTO/dataDTO";
import { HideKeyBoard } from "../../components/HideKeyBoard";
import { Forms } from "../../components/Forms";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { INTER_400, THEME } from "../../themes";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { Task } from "../../components/Task";


export function Home() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<taskDTO[]>([
    { id:0,name: 'Tarefa 1', isComplete: false},
  ])
  

  function handleAddTask(){
    if(newTask.trim() !== ''){
      
      setTasks([...tasks, { id: tasks.length +1  ,  name: newTask, isComplete: false}])
      setNewTask('')
    }
  }
  //console.log("verifica as tasks",tasks)

  function handleCompleteTask(name: string) {
    //console.log("Entrou na função da task completed",tasks)
    const newTasks = tasks.map(task =>
      task.name === name ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(newTasks);
  }

  function handleDeleteTask(name: string){
    const newTasks = tasks.filter(task => task.name !== name)
    setTasks(newTasks)
  }
  
  
  return (
    <HideKeyBoard>
      <Box w={"100%"} h={"100%"} bg={"gray.600"}>
        <Header />
        <Forms newTask={newTask} setNewTask={setNewTask} onPress={handleAddTask}/>  

        <Box justifyContent={"space-between"} p={"24px"} flexDirection={"row"}>
          <Box flexDirection={"row"} alignItems={"center"} justifyContent={"center"} >
            <Text color={"blue"} fontSize={'14px'} fontWeight={"bold"}>Criadas</Text>
            <Box px={"10px"}  rounded={"full"} bg={"gray.400"} alignItems={"center"} justifyContent={"center"} marginLeft={"8px"}>
              <Text color={"gray.200"} fontSize={'12px'} fontWeight={"bold"}>{tasks.length}</Text>
            </Box>
          </Box>
          <Box flexDirection={"row"}>
            <Text color={"purple"} fontWeight={"bold"}>Concluídas</Text>
            <Box px={"10px"}  rounded={"full"} bg={"gray.400"} alignItems={"center"} justifyContent={"center"} marginLeft={"8px"}>
              <Text color={"gray.200"} fontSize={'12px'} fontWeight={"bold"}>{tasks.filter(task => task.isComplete).length}</Text>
            </Box>
            
          </Box>
        </Box>
        {tasks.length == 0 ? (
          <Box  alignItems={"center"} justifyContent={"center"} h={"100%"}>
            <Text color={"gray.200"}>Sem tarefas</Text>
          </Box>
        )
        :
          <Box px={"24px"}>
            {tasks.map(task => (
              <Task key={task.name} task={task} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask}/>
            ))}
          </Box>
        }



        
      </Box>
    </HideKeyBoard>
  )
}

const styles = StyleSheet.create({
  text:{
    color: '#FFF',
    fontSize: 14,
    fontFamily: INTER_400,
  },
})
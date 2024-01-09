import { Box, CheckIcon, Checkbox, DeleteIcon, HStack, Pressable, Text } from "native-base"
import { taskDTO } from "../../DTO/dataDTO"

interface Props {
  task: taskDTO;
  handleCompleteTask: (name: string) => void;
  handleDeleteTask: (name: string) => void;
}
export function Task({task, handleCompleteTask, handleDeleteTask}: Props){
  return(
    <Box key={task.name} px={"12px 8px"} py={"12px"}  bg={"gray.500"} rounded={"md"} marginBottom={"8px"} >
      <HStack space={"8px"} alignItems={"center"} justifyContent={"center"}>
      
        <Pressable onPress={()=>handleCompleteTask(task.name)} rounded={"full"} h={"20px"} w={"20px"} borderWidth={"2px"} borderColor={task.isComplete?"purple":"blue"} bg={task.isComplete?"purple":"transparent"}> 
          {task.isComplete && <CheckIcon color={"#FFF"} size={"sm"} />}
        </Pressable>

          <Box flex={1}>
            <Text  color={task.isComplete?"gray.300":"gray.100"} strikeThrough={task.isComplete} fontSize={14} fontFamily={"body"}  >
              {task.name}
            </Text>
          </Box>
        
        
        <Pressable onPress={()=>handleDeleteTask(task.name)}>
          <DeleteIcon color={"gray.200"} size={"lg"} />
        </Pressable>
      </HStack>
    </Box>
  )
}
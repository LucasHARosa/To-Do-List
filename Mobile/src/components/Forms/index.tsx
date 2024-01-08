import { AddIcon, Box, HStack, Pressable } from "native-base"
import { TextInput, StyleSheet } from "react-native"
import { INTER_400, THEME } from "../../themes"

interface Props {
  newTask: string
  setNewTask: (text: string) => void
  onPress: () => void
}

export function Forms({ newTask, setNewTask, onPress }: Props) {
  return (
    <Box marginTop={"-26px"} px={"24px"}>
    <HStack space={"4px"}  >
      <Box px={"16px"} justifyContent={"center"} rounded={"md"} borderColor={"purple"} borderWidth={"2"} flex={1} bg={"gray.500"}  h={"52px"}>
        <TextInput
          placeholder="Descrição da atividade"
          placeholderTextColor={THEME.colors.gray[200]}
          cursorColor={THEME.colors.purple}
          value={newTask}
          onChangeText={setNewTask}
          autoCapitalize="sentences"
          style={styles.textInput}
        />
      </Box>
      <Pressable onPress={onPress}
        bg={"purple_dark"}
        rounded={"sm"}
        p={"16px"}        
        h={"52px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <AddIcon color={"#FFF"} h={"16px"} />
      </Pressable>
    </HStack>
    </Box>
  )

}

const styles = StyleSheet.create({
  textInput:{
    color: '#FFF',
    fontSize: 16,
    fontFamily: INTER_400,
  },
})
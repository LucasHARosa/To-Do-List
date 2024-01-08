import { Box, KeyboardAvoidingView, Pressable } from "native-base";
import { Keyboard, Platform } from "react-native";
interface Props {
  children: React.ReactNode
}

export function HideKeyBoard({ children }: Props) {
  return(
    <Pressable w={"100%"} h={"150%"} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? undefined : "height"}
      enabled={Platform.OS === "ios" ? true : false}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    >
      {children}
    </KeyboardAvoidingView>
    </Pressable>
  )
}
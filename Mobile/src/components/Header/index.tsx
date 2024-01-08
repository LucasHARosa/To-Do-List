import { Box } from "native-base";
import LogoSvg from "../../asset/Logo.svg";

export function Header() {
  return(
    <Box background={"gray.700"} w={"100%"} h={"173px"} alignItems={"center"} justifyContent={"center"}>
      <LogoSvg />
    </Box>
  )
}
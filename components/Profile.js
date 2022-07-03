import CustomContainer from "./CustomContainer";
import { Flex,Text,Button,Box,Tabs,TabPanel,TabList,Tab,TabPanels } from "@chakra-ui/react"

export default function Profile({user}){
    return(
        <CustomContainer>
            <Text><b>🔥&nbsp; Username:</b> {user.getUsername()}</Text>
            <Text><b>💵&nbsp; Wallet Address:</b> {user.get('ethAddress')}</Text>

        </CustomContainer>

    )
}
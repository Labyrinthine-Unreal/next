import { Center, Flex, Text,Button } from "@chakra-ui/react"

export default function Header({user, logout}){
    return(
    <header>
        <Flex>
            <Center>
                <Text>
                    Tauros Dashboard: <br></br>
                </Text>
            </Center>
            <Center>
                <Text>
                    {user.getUsername()}
                </Text>
                    <Button onClick={logout}>
                        Logout
                    </Button>
            </Center>
        </Flex>
    </header>
    )
}
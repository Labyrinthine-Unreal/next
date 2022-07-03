import { Center, Flex, Text,Button } from "@chakra-ui/react"

export default function Header({user, logout, isLoggingOut}){
    return(
    <header>
        <Flex px="10" py="6" justifyContent="space-between" bg="purple.400" color="white">
            <Center>
                <Text fontSize="xl" fontWeight="bold">
                    Tauros Dashboard: <br></br>
                </Text>
            </Center>
            <Center>
                <Text>
                    {user.getUsername()}
                </Text>
                    <Button ml="4" colorScheme="pink" onClick={logout} disable={isLoggingOut}>
                        Logout
                    </Button>
            </Center>
        </Flex>
    </header>
    )
}
import Head from "next/head"
import { useMoralis } from "react-moralis"
import { Flex,Text,Button } from "@chakra-ui/react"
import Header from "../components/Header"
export default function Home() {
  const {isAuthenticated, authenticate, user, logout} =  useMoralis()
  console.log(isAuthenticated)
  if(!isAuthenticated){
    return(
      <>
      
        <Head>
          <title>
            Login | Dashboard
          </title>
        </Head>
        <Flex 
        direction="column" 
        justifyContent="center" 
        alignItems="center"
        width="100vw"
        height="100vw"
        bgGradient="linear(to-br, teal.400,purple.300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Tauros Dashboard<br></br></Text>
            <Button colorScheme="purple"
            onClick={()=>authenticate({
              signingMessage:"Tauros SignIN"
            })}>
              Metamask Login
              </Button>
        </Flex>
      </>
    )
  }
  return (
    <>

    <Head>
      <tile>
        Tauros Dashboard
      </tile>
    </Head>
    <Flex>
      <Header user={user} logout={logout}/>
    </Flex>

    </>
  )
}

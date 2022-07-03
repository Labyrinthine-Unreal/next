import Head from "next/head"
import { useMoralis } from "react-moralis"
import { Flex,Text,Button } from "@chakra-ui/react"
export default function Home() {
  const {isAuthenticated, authenticate} =  useMoralis()
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
            onClick={()=>authenticate({})}>
              Metamask Login
              </Button>
        </Flex>
      </>
    )
  }
  return (
    <div>
    <h1> Hello,World</h1>
    </div>
  )
}

import CustomContainer from "./CustomContainer";
import { Divider,useToast,Flex,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,NumberInputField,Text,NumberInput,Link,Button,Box,Tabs,TabPanel,TabList,Tab,TabPanels,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useWeb3Transfer, useMoralisWeb3Api,useERC20Balances,useNFTBalances } from "react-moralis";
import Moralis from "moralis";

export default function Send() {

    const [amount, setAmount] = useState(0)
    const [receiver,setReceiver ] = useState('')
    const handleChange = (value) => setAmount(value)
    const toast = useToast()
    const {fetch, isFetching} = useWeb3Transfer({
        amount: Moralis.Units.ETH(amount),
        receiver: receiver,
        type: 'native'
    })

    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">
                <form onSubmit={async e=>{
                    e.preventDefault()
                    await Moralis.enableWeb3()
                    fetch({
                        onSuccess: () => {
                            toast({
                                title: 'Eth Successfully sent',
                                description:"Fresh eth are showing up in the receivers wallet",
                                status: "Success",
                                duration: 9000,
                                isClosable: true
                            })
                            setReceiver('')
                        },
                        onError: (error) => {
                            toast({
                                title: 'Error',
                                description:error,
                                status: "error",
                                duration: '9000',
                                isClosable: true
                            }) 
                        }
                    })
                }}>
                    <FormControl mt="4">
                    <FormLabel htmlFor="amount">
                        Amount of ETH
                    </FormLabel>
                    <NumberInput step={0.01} onChange={handleChange}>
                        <NumberInputField id ="amount" value={amount}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel mt="4" htmlFor="receiver">
                        Send To:
                    </FormLabel>
                    <Input id="reveiver" type="text" placeholder="receiver address" value={receiver} onChange={e => setReceiver(e.target.value)}/>
                    </FormControl>
                    <Button mt="4" type ="submit" disabled={isFetching}>
                    📡&nbsp; Send ETH
                    </Button>
                </form>
            </Text>
        </CustomContainer>
    )
}
import CustomContainer from "./CustomContainer";
import { Divider,Flex,Text,Link,Button,Box,Tabs,TabPanel,TabList,Tab,TabPanels,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useMoralisWeb3Api,useERC20Balances } from "react-moralis";
import Moralis from "moralis";
export default function Transactions({user}){
    const Web3Api = useMoralisWeb3Api()
    const BASE_URL = "https://rinkeby.etherscan.io/tx/"
    const[transactions, setTransactions] = useState([])

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 12
        })
        if(data) {
            setTransactions(data.result)

        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return(
        <CustomContainer>
           <Text>
                <Text fontSize="xl" mb="6" fontWeight="bold">Last 12 Transactions</Text>
                {transactions && transactions.map(transactions =>(
                    <div key={transactions.hash}>
                        <Link href={`${BASE_URL}${transactions.hash}`} isExternal>
                        ➡️&nbsp; {transactions.hash}
                        </Link>
                        <Divider />
                    </div>
                ) )}
           </Text>
        </CustomContainer>
    )
}
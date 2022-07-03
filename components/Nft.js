import CustomContainer from "./CustomContainer";
import { Divider,Flex,Text,Link,Button,Box,Tabs,TabPanel,TabList,Tab,TabPanels,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useMoralisWeb3Api,useERC20Balances,useNFTBalances } from "react-moralis";
import Moralis from "moralis";
export default function Nft({user}) {
    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress')
            }
        })
    }, [])
    console.log(data)

    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">
                My NFTs
            </Text>
            {data && data.result.map(nft => (
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                    {nft.imaage && <Image src={nft.image} />}
                    
                    <p>{nft.token_uri}</p>
                </Box>
            ))}
        </CustomContainer>
    )
}
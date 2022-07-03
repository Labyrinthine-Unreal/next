import CustomContainer from "./CustomContainer";
import { Divider,Flex,Text,Link,Button,Box,Tabs,TabPanel,TabList,Tab,TabPanels,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useMoralisWeb3Api,useERC20Balances,useNFTBalances } from "react-moralis";
import Moralis from "moralis";

export default function Dao() {
    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">
                Mint Dao
            </Text>
        </CustomContainer>
    )
}
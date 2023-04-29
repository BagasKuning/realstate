import React from "react";
import { Flex, Heading} from "@chakra-ui/react";

const Header = () => (
  <Flex align={'center'} justify='center' height='350px' minWidth={'100%'} padding='20px 50px' >
      <Flex className="header-bg" flexDirection={'column'} w={'100%'} h='100%' padding='0 50px' align={{
        base: "center",
        xl: 'flex-start',
        lg: 'flex-start',
        md: 'center'
      }} justify={'center'}>
        <Heading as={'h1'} fontSize='7xl' color='blue.50' backgroundColor='#395B64' p={'0 15px'} m='5px 0'>Realtor</Heading>
        <Heading as={'h2'} fontSize={'2xl'} color={'#395B64'} background='blue.50' padding={'3px 15px'} >Best Deals for Buying and Renting Homes</Heading>
      </Flex>
  </Flex>  
);

export default Header;
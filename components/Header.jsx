import React from "react";
import { Flex, Heading, Box} from "@chakra-ui/react";

const Header = () => (
  <Flex align='center' justify='center' height='500px' minWidth={'100%'} p='25px 0px'>
      <Flex w='50%' justify='center' align='center' textAlign='left' flexDirection='column'>
        <Box p='20'>
          <h1 className='header-title'>Come see the homes </h1>
          <h1 className='header-title'>We <span>rent</span> and <span>sell</span>.</h1>
          <p color='#CBD5E0'>realtors provide services for those of you who want to buy or rent a housing need</p>
        </Box>
      </Flex>
      <Box className='header-bg' borderRadius='150px 0px 0px 0px'>

      </Box>
  </Flex>  
);

export default Header;
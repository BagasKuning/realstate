import React from "react";
import { Flex, Heading, Box} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";



const Header = () => {
  
  const [isLargerThan345] = useMediaQuery('(min-width: 345px)')

  return(
  <Flex align='center' justify='center' position={'relative'} height='500px' minWidth={'100%'} p={{sm : "25px 0px" , md : "25px 0px" , lg : "25px 0px" , xl : "25px 0px" ,}}>
      <Flex style={{width : isLargerThan345 ? '50%' : '100%'}} justify='center' align='center' textAlign='left' flexDirection='column'>
        <Box className="header-title-container">
          <h1 className='header-title'>Come see the homes </h1>
          <h1 className='header-title'>We <span>rent</span> and <span>sell</span>.</h1>
          <p color='#CBD5E0' className="header-desc">realtors provide services for those of you who want to buy or rent a housing need</p>
        </Box>
      </Flex>
      <Box className='header-bg' style={{borderRadius : isLargerThan345 ? "150px 0 0 0 " : "0px"}} >

      </Box>
  </Flex>  
  )
}

export default Header;
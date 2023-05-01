import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from "@chakra-ui/react";
import {FcMenu, FcHome, FcAbout} from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi"

const Navbar = () => (
        <Flex p='2' m={{
            base: '0 30px',
            md: '0 40px',
            lg: '0 40',
            xl: '0'
        }} borderBottom='1px' borderColor='gray.100' justifyContent={'space-around'}>
            <Box fontSize={{ base: '2xl', sm: '3xl'}} color='blue.400' fontWeight='bold'>
                <Link href='/' paddingLeft="2" >Realtor</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu color='black'>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
                    <MenuList zIndex='99999'>
                        <Link href='/' passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );


export default Navbar;
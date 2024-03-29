// import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from 'utils/fetchApi'

import Property from '../../components/Property'
import Header from 'components/Header';



// const inter = Inter({ subsets: ['latin'] })

const Banner = ({purpose, imageUrl, title1, title2, desc1, desc2, buttonText, linkName}) => {
  return(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Flex p='5' flexDirection={'column'} textAlign={{base: 'center', lg: 'start'}}>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3x1' fontWeight='bold'>{title1} <br/> {title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.300'>{desc1} <br/> {desc2}</Text>
    <Button fontSize='xl'>
      <Link href={linkName}>{buttonText}</Link>
    </Button>
    </Flex>
  </Flex>
  )
}


export default function Home({propertyForSale, propertyForRent}) {
  
  return (
      <Box>
        <Header/>

        <Banner 
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Flex flexWrap='wrap' justifyContent={'space-evenly'}>
          {propertyForRent.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
        <Banner 
        purpose={'BUY A HOME'}
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText={'Explore Buying'}
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/198256719/026fc4b608df413ab7d6fe8842c858f5'
        />
        <Flex flexWrap='wrap' justifyContent={'space-evenly'}>
          {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
        
      </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }
}
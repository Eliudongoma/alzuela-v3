import { Box, Card, CardBody,CardFooter, Heading, Image, Stack, Text, Grid, GridItem} from "@chakra-ui/react"
import product from '../assets/product.jpg'
import AddToCart from "../components/AddToCart"

function Home() {
  return (
    <Box >
      <Grid templateColumns='repeat(4, 1fr)' gap={4} mx={'auto'} my={5} maxW={'80vw'}>
        <GridItem bg={'blue.50'}>
        <Card datatype="Card" bg={'blue.50'}>
           <CardBody datatype="CardBody">
             <Image src={ product} alt="Loading" bg={'blue.50'} border={1} borderRadius={9} />
             <Stack datatype="Stack">
               <Heading datatype="Heading" size={'md'}>Shower Gel</Heading>
               <Text fontSize={13}>A premium product with profound results in a global scale!!</Text>
               <Heading fontSize={13}>ksh200</Heading>
             </Stack>
           </CardBody>
           <CardFooter justify={'center'}>{AddToCart()}</CardFooter>
         </Card>
        </GridItem>
        <GridItem>
        <Card datatype="Card" bg={'blue.50'}>
           <CardBody datatype="CardBody">
             <Image src={ product} alt="Loading" bg={'blue.50'} border={1} borderRadius={9} />
             <Stack datatype="Stack">
               <Heading datatype="Heading" size={'md'}>Shower Gel</Heading>
               <Text fontSize={13}>
                 A premium product with profound results in a global scale!!
               </Text>
               <Heading fontSize={13}>
                 ksh200
               </Heading>
             </Stack>
           </CardBody>
           <CardFooter justify={'center'}>
             {AddToCart()}
           </CardFooter>
         </Card>
        </GridItem>
        <GridItem>
        <Card datatype="Card" bg={'blue.50'}>
           <CardBody datatype="CardBody">
             <Image src={ product} alt="Loading" bg={'blue.50'} border={1} borderRadius={9} />
             <Stack datatype="Stack">
               <Heading datatype="Heading" size={'md'}>Shower Gel</Heading>
               <Text fontSize={13}>
                 A premium product with profound results in a global scale!!
               </Text>
               <Heading fontSize={13}>
                 ksh200
               </Heading>
             </Stack>
           </CardBody>
           <CardFooter justify={'center'}>
             {AddToCart()}
           </CardFooter>
         </Card>
        </GridItem>
        <GridItem>
        <Card datatype="Card" bg={'blue.50'}>
           <CardBody datatype="CardBody">
             <Image src={ product} alt="Loading" bg={'blue.50'} border={1} borderRadius={9} />
             <Stack datatype="Stack">
               <Heading datatype="Heading" size={'md'}>Shower Gel</Heading>
               <Text fontSize={13}>
                 A premium product with profound results in a global scale!!
               </Text>
               <Heading fontSize={13}>
                 ksh200
               </Heading>
             </Stack>
           </CardBody>
           <CardFooter justify={'center'}>
             {AddToCart()}
           </CardFooter>
         </Card>
        </GridItem>
        <GridItem>
        <Card datatype="Card" bg={'blue.50'}>
           <CardBody datatype="CardBody">
             <Image src={ product} alt="Loading" bg={'blue.50'} border={1} borderRadius={9} />
             <Stack datatype="Stack">
               <Heading datatype="Heading" size={'md'}>Shower Gel</Heading>
               <Text fontSize={13}>
                 A premium product with profound results in a global scale!!
               </Text>
               <Heading fontSize={13}>
                 ksh200
               </Heading>
             </Stack>
           </CardBody>
           <CardFooter justify={'center'}>
             {AddToCart()}
           </CardFooter>
         </Card>
        </GridItem>
        <GridItem>
        <Card datatype="Card" bg={'blue.50'}>
           <CardBody datatype="CardBody">
             <Image src={ product} alt="Loading" bg={'blue.50'} border={1} borderRadius={9} />
             <Stack datatype="Stack">
               <Heading datatype="Heading" size={'md'}>Shower Gel</Heading>
               <Text fontSize={13}>
                 A premium product with profound results in a global scale!!
               </Text>
               <Heading fontSize={13}>
                 ksh200
               </Heading>
             </Stack>
           </CardBody>
           <CardFooter justify={'center'}>
             {AddToCart()}
           </CardFooter>
         </Card>
        </GridItem>
        </Grid>
    </Box>    
  )
}

export default Home

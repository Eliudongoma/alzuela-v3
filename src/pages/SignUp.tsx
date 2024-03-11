import { Box, Button, Flex, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom";

export interface UserLogin{
  username: "";
  password: "";
  address: "";
  phone:"";
  firstname:"";
  lastname:"";
  email:"";
}

function SignIn() {
  const [credentials, setCredentials] = useState<UserLogin>({
    username: "",
    password: "",
    address: "",
    phone:"",
    firstname:"",
    lastname:"",
    email:""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target;
    setCredentials({...credentials, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCredentials({
      username:"",
      password:"",
      address: "",
      phone:"",
      firstname:"",
      lastname:"",
      email:""
    })
  }
  return (
    <>
    <Flex justify={'center'} align={'center'} mt={'90px'}>
      <Box border={"1px"} borderRadius={"10px"} borderColor={'grey.200'} w={'500px'} alignItems={"center"} justifyItems={'center'}
        padding={6} boxShadow={'lg'} bg={'gray.50'} h={'485px'}>
        <Heading mb={3}>Sign Up</Heading>
        <form onSubmit={handleSubmit}>   
          <Flex>
            <FormControl id="Firstname" mb={2}>
              <FormLabel fontSize={16}>Username</FormLabel>
              <Input type="text" value={credentials.firstname} name="firstname" placeholder="First name" fontSize={16} onChange={handleChange}></Input>
            </FormControl>
            <FormControl id="username" mb={2}>
              <FormLabel fontSize={16}>Username</FormLabel>
              <Input type="text" value={credentials.lastname} name="lastname" placeholder="Last name" fontSize={16} onChange={handleChange}></Input>
           </FormControl>
          </Flex>
          <FormControl id="email" mb={2}>
              <FormLabel fontSize={16}>Email</FormLabel>
              <Input type="mail" value={credentials.email} name="email" placeholder="Email" fontSize={16} onChange={handleChange}></Input>
          </FormControl>        
            
          <Flex>
            <FormControl id="username" mb={2}>
              <FormLabel fontSize={16}>Username</FormLabel>
              <Input type="text" value={credentials.username} name="username" placeholder="username" fontSize={16} onChange={handleChange}></Input>
            </FormControl>
            <FormControl id="password" mb={2}>
              <FormLabel fontSize={16}>Password</FormLabel>
              <Input type="password" value={credentials.password} name="password" placeholder="password" fontSize={16} onChange={handleChange}></Input>
          </FormControl>
          </Flex>    
          <Flex>
             <FormControl id="phone" mb={2}>
              <FormLabel fontSize={16}>Phone</FormLabel>
              <Input type="number" value={credentials.phone} name="phone" placeholder="Phone" fontSize={16} onChange={handleChange}></Input>
          </FormControl>
            <FormControl id="address" mb={4}>
              <FormLabel fontSize={16}>Address</FormLabel>
              <Input type="text" value={credentials.address} name="address" placeholder="Address" fontSize={16} onChange={handleChange}></Input>
            </FormControl>  
            </Flex>  
          <FormControl id="submit" mb={2}>
            <Link to={""}>
              <Button bg={'blue.100'} w={'100%'}>Create Account</Button>
            </Link>            
          </FormControl>
        </form>
      </Box>
    </Flex>
    </>
  )
}

export default SignIn

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserLogin } from "../components/interfaces/UserLogin";

function SignIn() {
  const [credentials, setCredentials] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCredentials({
      username: "",
      password: "",
    });
  };

  return (
    <Flex justify={"center"} align={"center"} mt={"160px"}>
      <Box
        border={"1px"}
        borderRadius={"10px"}
        borderColor={"grey.200"}
        w={"400px"}
        alignItems={"center"}
        justifyItems={"center"}
        padding={6}
        boxShadow={"lg"}
        bg={"gray.50"}
        h={"380px"}
      >
        <Heading mb={3}>Login</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="username" mb={3}>
            <FormLabel fontSize={22}>Username</FormLabel>
            <Input
              type="text"
              value={credentials.username}
              name="username"
              placeholder="username"
              fontSize={20}
              onChange={handleChange}
            ></Input>
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel fontSize={22}>Password</FormLabel>
            <Input
              type="password"
              value={credentials.password}
              name="password"
              placeholder="password"
              fontSize={20}
              onChange={handleChange}
            ></Input>
          </FormControl>
          <FormControl id="submit" mb={3}>
            <Link to={""}>
              <Button bg={"blue.100"} w={"100%"}>
                Login
              </Button>
            </Link>
          </FormControl>
          <Flex justify={"space-between"}>
            <Link to={"/forgotPassword"}>
              <Text _hover={{ textDecoration: "underline" }} fontSize={18}>
                Forgot Password?
              </Text>
            </Link>
            <Link to={"/signup"}>
              <Text _hover={{ textDecoration: "underline" }} fontSize={18}>
                Create an account!
              </Text>
            </Link>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}

export default SignIn;

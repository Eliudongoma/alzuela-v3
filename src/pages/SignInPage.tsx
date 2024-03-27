import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";

const initialValues = { username: "", password: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string().min(4).max(50).required().label("Username"),
  password: Yup.string().min(6).required().label("Password"),
});

type Credentials = Yup.InferType<typeof validationSchema>;

function SignInPage() {
  const handleSubmit = (info: Credentials) => {
    console.log(info);
    toast.info("User signed in");
  };

  return (
    <Flex 
      justify={"center"} 
      align={"center"} 
      mt={"160px"}>
      <Box
        borderRadius={"10px"}
        borderColor={"gray.200"}
        w={"400px"}        
        padding={6}
        boxShadow={"lg"}
        bg={"gray.100"}
        h={"auto"}>
        <Heading mb={2}>Login</Heading>
        <Form
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <FormField name="username" />
          <FormField name="password" type="password" />
          <SubmitButton bg="blue.100" mb={3} title="Login" />
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
        </Form>
      </Box>
    </Flex>
  );
}

export default SignInPage;

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

function SignIn() {
  const handleSubmit = (info: Credentials) => {
    console.log(info);
    toast.info("User signed in");
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
        bg={"gray.500"}
        h={"380px"}
      >
        <Heading mb={3}>Login</Heading>
        <Form
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField name="username" placeholder="Username" />
          <FormField name="password" placeholder="Password" />
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

export default SignIn;

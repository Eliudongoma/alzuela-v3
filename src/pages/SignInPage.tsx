import { Box, Flex, Heading } from "@chakra-ui/react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Form, FormField, FormLink, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  username: Yup.string().min(4).max(50).required().label("Username"),
  password: Yup.string().min(6).required().label("Password"),
});

type UserInfo = Yup.InferType<typeof validationSchema>;

function SignInPage() {
  const handleSubmit = (info: UserInfo) => {
    console.log(info);
    toast.info("User signed in");
  };

  return (
    <Flex justify={"center"} align={"center"} mt={"130px"}>
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
      >
        <Heading mb={3}>Login</Heading>
        <Form
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField name="username" />
          <FormField name="password" type="password" />
          <SubmitButton bg="blue.100" mb={3} title="Login" />
          <Flex justify="space-between">
            <FormLink label="Forgot Password?" route="/forgotPassword" />
            <FormLink label="Create an account!" route="/signup" />
          </Flex>
        </Form>
      </Box>
    </Flex>
  );
}

export default SignInPage;

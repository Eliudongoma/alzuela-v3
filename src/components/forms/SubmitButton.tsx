import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props extends ButtonProps {
  title: string;
}

const SubmitButton = ({ title, ...otherProps }: Props) => {
  const { handleSubmit } = useFormikContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleSubmit();
  };

  return (
    <Button onClick={handleClick} w="100%" mb={1} {...otherProps} bg={"gray.300"}>
      {title}
    </Button>
  );
};

export default SubmitButton;

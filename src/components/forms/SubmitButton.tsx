import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props extends ButtonProps {
  title: string;
}

const SubmitButton = ({ title, ...otherProps }: Props) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={() => handleSubmit()} w="100%" mb={2} {...otherProps}>
      {title}
    </Button>
  );
};

export default SubmitButton;

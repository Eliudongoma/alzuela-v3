import { Text } from "@chakra-ui/react";

interface Props {
  error?: string;
  visible: boolean;
}

const ErrorMessage = ({ error, visible }: Props) => {
  if (visible)
    return (
      <Text color="red.600" fontSize="sm" mt={0.5}>
        {error}
      </Text>
    );

  return null;
};

export default ErrorMessage;

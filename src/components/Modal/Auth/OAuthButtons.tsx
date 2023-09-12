import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientapp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(auth);
  return (
    <Flex direction={"column"} w={"100%"}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/google.png" alt="google" h={"20px"} mr={4} />
        Continue with Google
      </Button>
      <Text textAlign={"center"} color={"red"} fontSize={"10pt"}>
        {error && error.message}
      </Text>
    </Flex>
  );
};
export default OAuthButtons;

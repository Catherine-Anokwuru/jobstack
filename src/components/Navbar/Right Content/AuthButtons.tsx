import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Flex>
        <Button
          variant={"outline"}
          height={"28px"}
          display={{ base: "none", sm: "flex" }}
          mr={2}
          onClick={() => setAuthModalState({open: true, view: 'login'})}
        >
          Log in
        </Button>
        <Button
          height={"28px"}
          display={{ base: "none", sm: "flex" }}
          mr={2}
          onClick={() => setAuthModalState({open:true, view:'signup'})}
        >
          Sign up
        </Button>
      </Flex>
    </>
  );
};
export default AuthButtons;

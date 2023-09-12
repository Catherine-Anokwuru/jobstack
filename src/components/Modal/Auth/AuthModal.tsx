import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Login from "./Login";
import SignUp from "./SignUp";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { auth } from "@/firebase/clientapp";
import { useAuthState } from "react-firebase-hooks/auth";
import ResetPassword from "./ResetPassword";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // USER AUTHENTICATION/AUTO CLOSE MODAL
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) handleClose();
    console.log("user", user);
  }, [user]);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={modalState.open}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {(modalState.view === "login" && "Login") ||
              (modalState.view === "signup" && "Sign up") 
             }
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            pb={6}
          >
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              w={"70%"}
            >
              {modalState.view === "login" ||
              modalState.view === "signup" ? (
                <>
                  <OAuthButtons />
                  <Text color={"gray.500"} fontWeight={700} mb={4}>
                    OR
                  </Text>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;

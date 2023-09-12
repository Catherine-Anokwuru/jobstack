import React, { useState } from "react";
import { Button, Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { BsDot } from "react-icons/bs";
import logo from '../../../../public/images/Jobstack.svg'
import {
  authModalState
} from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientapp";
import { useSetRecoilState } from "recoil";

type ResetPasswordProps = {

};

const ResetPassword: React.FC<ResetPasswordProps> = ({

}) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Image src={"/images/favicon.ico"} alt="logo" w={"2rem"} mb={2} />
      <Image
        src={"/images/Jobstack.svg"}
        w={"8rem"}
        h={"3rem"}
        mb={2} alt='logo text'
      />
      <Text fontWeight={700} mb={2} fontSize={20}>
        Reset your password
      </Text>
      {success ? (
        <Text mb={4} textAlign={'center'}>Check your email to reset your password</Text>
      ) : (
        <>
          <Text fontSize="sm" textAlign="center" mb={2}>
            Enter the email associated with your account and we will
            send you a reset link
          </Text>
          <form onSubmit={onSubmit} style={{ width: "100%" }}>
            <Input
              required
              name="email"
              placeholder="email"
              type="email"
              mb={2}
              onChange={(event) => setEmail(event.target.value)}
              fontSize="10pt"
              _placeholder={{ color: "gray.500" }}
              _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              bg="gray.50"
            />
            <Text textAlign="center" fontSize="10pt" color="red">
              {error?.message}
            </Text>
            <Button
              width="100%"
              height="36px"
              mb={2}
              mt={2}
              type="submit"
              isLoading={sending}
            >
              Reset Password
            </Button>
          </form>
        </>
      )}
      <Flex
        alignItems="center"
        fontSize="9pt"
        color="cyan.500"
        fontWeight={700}
        cursor="pointer"
      >
        <Text
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOGIN
        </Text>
      <Text mx={'1rem'}> | </Text>

        <Text
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </Flex>
  );
};
export default ResetPassword;

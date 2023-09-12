import { authModalState } from "@/atoms/authModalAtom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientapp";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { useSetRecoilState } from "recoil";
import { FIREBASE_ERRORS } from "@/firebase/errors";

const Login: React.FC = () => {
  const [LoginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(LoginForm.email, LoginForm.password);
  };

  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        fontSize={"10pt"}
        bg={"grey.50"}
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
        onChange={handleChange}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        fontSize={"10pt"}
        bg={"grey.50"}
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
        onChange={handleChange}
      />
      <Text textAlign={"center"} color={"red"} fontSize={"10pt"}>
        {
          FIREBASE_ERRORS[
            error?.message as keyof typeof FIREBASE_ERRORS
          ]
        }
      </Text>
      <Button
        width={"100%"}
        height={"36px"}
        mt={2}
        mb={2}
        type="submit"
        isLoading={loading}
      >
        Login
      </Button>
      <Flex fontSize={"9pt"} justifyContent={"center"}>
        <Text mb={2} mr={1}>Forgot password?</Text>
        <Text
          color={"cyan.500"}
          cursor={"pointer"}
          mb={2}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "resetPassword",
            }))
          }
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize={"9pt"} justifyContent={"center"}>
        <Text mr={1}>New here?</Text>
        <Text
          color={"cyan.500"}
          fontWeight={700}
          cursor={"pointer"}
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
    </form>
  );
};
export default Login;

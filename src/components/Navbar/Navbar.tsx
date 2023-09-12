"use client";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightTab from "./Right Content/RightTab";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientapp";
import Wrapper from "@/wrappers/Navbar";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Wrapper>
      <div className="nav-center">
        <Flex align={"center"}>
          <Image src="/images/favicon.ico" w={"50px"} pr="0.5rem" />
          <Image src="/images/jobstack.svg" w={"7rem"} />
        </Flex>
        {/* <SearchInput/> */}
        <RightTab user={user} />
      </div>
    </Wrapper>
  );
};
export default Navbar;

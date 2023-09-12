import { Button, Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/clientapp";

type RightTabProps = {
  user: any;
};

const RightTab: React.FC<RightTabProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      {user ? (
        <Button onClick={() => signOut(auth)}>Logout</Button>
      ) : (
        <AuthButtons />
      )}
    </>
  );
};
export default RightTab;

import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

type SearchInputProps = {};

const SearchInput: React.FC<
  SearchInputProps
> = () => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" mb={1} />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search reddit"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;

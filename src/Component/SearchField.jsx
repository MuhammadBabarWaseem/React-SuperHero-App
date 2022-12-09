import { Input, Container } from "@chakra-ui/react";
import React from "react";

export default function SearchField({onChangeHandler }) {
  return (
    <div>
      <Container>
        <Input
          color="whitesmoke"
          variant="flushed"
          mt={5}
          mb={5}
          placeholder="Search Characters"
          onChange={onChangeHandler}
        />
      </Container>
    </div>
  );
}
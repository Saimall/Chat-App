/* eslint-disable no-unused-vars */
import React from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

import { VStack } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const history = useHistory();

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  return (
    <div>
      {" "}
      <VStack spacing="5px" color="black">
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          // onClick={submitHandler}
        >
          Login
        </Button>
        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
          }}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </div>
  );
};

export default Login;

import {
  Button,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import image from "../media/Tezpur_University.png";
import { useNavigate } from "react-router";


export default function Navbar() {
  const [value, setValue] = useState(false);
    
    const Navigate =  useNavigate();
    const loginHandler = () => {
        Navigate("/login");
    }
    const clickHandler = () => {
      Navigate("/home");
    }
    const formHandler = () => {
      setValue(true);
      Navigate("/servey");
    }
    const homeHandler = () => {
      setValue(false);
      Navigate("/home");
    }
  return (
    <div>
      <Flex
        justify={"space-between"}
        ml={"3%"}
        mr={"3%"}
        h={"15vh"}
        align={"center"}
        backgroundColor={"white"}
      >
        <Image src={image} w={"4vw"}></Image>
        <Heading onClick={clickHandler} cursor={"pointer"} position={"relative"} left={"5%"}>Tezpur University</Heading>
        <Flex align={"center"}>
        {!value && <Button
            mr={"5%"}
            w={"10vw"}
            colorScheme="black"
            variant="outline"
            borderRadius={"30px"}
            border='2px'
            _hover={{ bg: "#ECECEC" }}
            onClick={formHandler}
          >
            Servey
          </Button>}
          {value && <Button
            mr={"5%"}
            w={"10vw"}
            colorScheme="black"
            variant="outline"
            borderRadius={"30px"}
            border='2px'
            _hover={{ bg: "#ECECEC" }}
            onClick={homeHandler}
          >
            Home
          </Button>}
          <Button
            w={"10vw"}
            backgroundColor={"black"}
            color={"white"}
            _hover={{ bg: "#45526C" }}
            borderRadius={"30px"}
            onClick={loginHandler}
          >
            Admin Log In
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

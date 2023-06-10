import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import image from "../media/Tezpur_University.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { adminAuthActions } from "../store/auth";

export default function Navbar() {
  const Dispatch = useDispatch();
  const isAdminAuth = useSelector((state) => state.auth.isAdminAuthenticated);
  console.log(isAdminAuth);
  const [value, setValue] = useState(false);

  const Navigate = useNavigate();

  const loginHandler = () => {
    setValue(true)
    Navigate("/login");
  };
  const teamHandler = () => {
    Navigate("/team");
  };
  const aboutusHandler = () => {
    Navigate("/aboutus");
  };
  const formHandler = () => {
    Navigate("/survey");
  };
  const homeHandler = () => {
    Navigate("/home");
  };
  const logoutHandler = () => {
    Dispatch(adminAuthActions.logout());
    Navigate("/home");
  };
  const dashbordHandler = () => {
    Navigate("/admin");
  };
  return (
    <div>
      <Flex
        justify={"space-between"}
        pl={"3%"}
        pr={"3%"}
        h={"18vh"}
        align={"center"}
      >
        <Flex>

        <Image
          cursor={"pointer"}
          onClick={homeHandler}
          src={image}
          w={"5.5vw"}
          ></Image>
        <Flex direction={"column"} ml={"15px"}>
          <Heading fontSize={"2.5rem"}>Tezpur University</Heading>
          <Heading fontSize={"1.3rem"} color={"#318FB5"} textAlign={"center"}>
            Center for Bioinformatics and Computational Biology
          </Heading>
        </Flex>
          </Flex>
        <Flex align={"center"}>
            <Text
              mr={"5%"}
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              _hover={{ color: "gray" }}
              cursor={"pointer"}
              onClick={formHandler}
            >
              Survey
            </Text>
          <Text
              fontWeight={"bold"}
              mr={"5%"}
              fontSize={"1.2rem"}
              cursor={"pointer"}
              _hover={{ color: "gray" }}
              onClick={teamHandler}
              >
            Team
          </Text>
          <Text
            mr={"5%"}
            w={"9vw"}
            fontWeight={"bold"}
            fontSize={"1.2rem"}
            cursor={"pointer"}
            _hover={{ color: "gray" }}
            onClick={aboutusHandler}
            >
            About Us
          </Text>

          {isAdminAuth && value && (
            <Text
              fontWeight={"bold"}
              mr={"5%"}
              fontSize={"1.2rem"}
              cursor={"pointer"}
              _hover={{ color: "gray" }}
              onClick={dashbordHandler}
            >
              Dashboard
            </Text>
          )}
          {!isAdminAuth && (
            <Button
              w={"10vw"}
              variant={"outline"}
              borderWidth={"2px"}
              borderColor={"black"}
              _hover={{ borderColor: "gray", color:"gray" }}
              borderRadius={"30px"}
              onClick={loginHandler}
            >
              Admin Log In
            </Button>
          )}
          {isAdminAuth && (
            <Button
              w={"11vw"}
              variant={"outline"}
              borderWidth={"2px"}
              borderColor={"black"}
              _hover={{ borderColor: "gray", color:"gray" }}
              borderRadius={"30px"}
              onClick={logoutHandler}
            >
              Admin Log out
            </Button>
          )}
        </Flex>
      </Flex>
    </div>
  );
}

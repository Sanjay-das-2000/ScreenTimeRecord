import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import kidsimage from "../media/FrontPageImage1.png";
import { useNavigate } from "react-router";
export default function FrontPage() {

  const Navigate = useNavigate();
  const clickHandler = () => {
    Navigate("/surveyresult");
  };

  return (
    <>
      <Box>
        <Flex
          p={"5% 3%"}
          justify={"space-around"}
          h={"80vh"}
          align={"center"}
        >
          <Box width={"45vw"} mt={"4%"}>
            <Flex direction={"column"} justify={"center"}>
              <Flex mb={"4%"}>
                <Heading fontSize={"3rem"} mr={"2%"}>
                  SCREEN TIME{" "}
                </Heading>
                <Heading color={"#318FB5"} fontSize={"3rem"}>
                  KIDS SURVEY
                </Heading>
              </Flex>
              <Heading fontSize={"1.5rem"}>
                Effect of screen time on language development in Indian children
                of 2-5years of age
              </Heading>
              <Text
                w={"40vw"}
                mt={"4%"}
                fontSize={"1.2rem"}
                fontStyle={"-moz-initial"}
              >
                Exposure to screens reduces babies' ability to read human
                emotion and control their frustration. It also detracts from
                activities that help boost their brain power, like play and
                interacting with other children
              </Text>
              <Button
                mt={"7%"}
                w={"12vw"}
                size={"lg"}
                colorScheme="black"
                variant="outline"
                borderRadius={"30px"}
                border="2px"
                _hover={{ bg: "#ECECEC" }}
                onClick={clickHandler}
              >
                Survey Outcome
              </Button>
            </Flex>
          </Box>
          <Box>
            <Image src={kidsimage} w={"45vw"}></Image>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

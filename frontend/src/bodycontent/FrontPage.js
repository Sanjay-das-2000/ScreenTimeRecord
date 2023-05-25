import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import kidsimage from "../media/FrontPageImage1.png";
import Graph from "./Graph";

export default function FrontPage() {
  return (
    <>
      <Box>
        <Flex m={"6% 3%"}  justify={"space-around"} >
          <Box width={"45vw"} mt={"4%"}>
            <Flex direction={"column"} justify={"center"}>
              <Heading fontSize={"3.5rem"}>SCREEN TIME </Heading>
              <Heading color={"#318FB5"} fontSize={"3.5rem"}>
                KIDS SURVEY
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
                colorScheme="black"
                variant="outline"
                borderRadius={"30px"}
                border='2px'
                _hover={{ bg: "#ECECEC" }}
              >
                Explore
              </Button>
            </Flex>
          </Box>
          <Box>
            <Image src={kidsimage} w={"45vw"}></Image>
          </Box>
        </Flex>
        <Graph />
      </Box>
    </>
  );
}

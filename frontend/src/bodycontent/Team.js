import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import TeamData from "../data/TeamData";
export default function Team() {
  return (
    <div>
      <Heading textAlign={"center"} fontSize={"2.6rem"}>Team Members</Heading>
      <Box>
        <Heading textAlign={"center"} mt={"3%"}>
          Professors
        </Heading>
        <hr style={{ width: "12vw", borderWidth: "2px", margin: "auto", borderColor: "black" }}></hr>
        <Flex justify={"space-around"} w={"80vw"} m={"auto"}  mt={"4%"}>
          {TeamData.map((item) => {
            if (item.type === "professor") {
              return (
                <VStack
                  w={"18vw"}
                  h={"48vh"}
                  m={"auto"}
                  justify={"center"}
                  boxShadow={"0px 0px 8px 2px gray"}
                >
                  <Image
                    src={item.photo}
                    borderRadius={"50%"}
                    w={"13vw"}
                  ></Image>
                  <Text fontSize={"1.1rem"} textAlign={"center"} fontWeight={"bold"}>
                    {item.name}
                  </Text>
                  <Text textAlign={"center"}>{item.title}</Text>
                </VStack>
              );
            }
          })}
        </Flex>
      </Box>
      <Box>
        <Heading textAlign={"center"} mt={"3%"}>
          Research Scholers
        </Heading>
        <hr style={{ width: "20vw", borderWidth: "2px", margin: "auto", borderColor: "black" }}></hr>
        <Flex justify={"space-around"} w={"80vw"} m={"auto"}  mt={"4%"}>
          {TeamData.map((item) => {
            if (item.type === "researchscholer") {
              return (
                <VStack
                  w={"18vw"}
                  h={"48vh"}
                  m={"auto"}
                  justify={"center"}
                  boxShadow={"0px 0px 8px 2px gray"}
                >
                  <Image
                    src={item.photo}
                    borderRadius={"50%"}
                    w={"13vw"}
                  ></Image>
                  <Text fontSize={"1.1rem"} textAlign={"center"} fontWeight={"bold"}>
                    {item.name}
                  </Text>
                  <Text textAlign={"center"}>{item.title}</Text>
                </VStack>
              );
            }
          })}
        </Flex>
      </Box>
      <Box mb={"5%"}>
        <Heading textAlign={"center"} mt={"3%"}>
          Students
        </Heading>
        <hr style={{ width: "10vw", borderWidth: "2px", margin: "auto", borderColor: "black" }}></hr>
        <Flex justify={"space-around"} w={"80vw"} m={"auto"}  mt={"4%"}>
          {TeamData.map((item) => {
            if (item.type === "student") {
              return (
                <VStack
                  w={"18vw"}
                  h={"48vh"}
                  m={"auto"}
                  justify={"center"}
                  boxShadow={"0px 0px 8px 2px gray"}
                >
                  <Image
                    src={item.photo}
                    borderRadius={"50%"}
                    w={"13vw"}
                  ></Image>
                  <Text fontSize={"1.1rem"} textAlign={"center"} fontWeight={"bold"}>
                    {item.name}
                  </Text>
                  <Text textAlign={"center"}>{item.title}</Text>
                </VStack>
              );
            }
          })}
        </Flex>
      </Box>
    </div>
  );
}

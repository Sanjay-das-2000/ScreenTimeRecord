import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";

import kidsimage from "../media/FrontPageImage1.png";
import GraphScreenWatchingTime from "./CombinedQuestionalServey/GraphScreenWatchingTime";
import GraphScreenWatchingTimebyAge from "./CombinedQuestionalServey/GraphScreenWatchingTimebyAge";
import GraphScreenWatchingTimebasedonGender from "./CombinedQuestionalServey/GraphScreenWatchingTimebasedonGender";
import GraphPurposeofViewScreenBasedonSocioeconomicClass from "./CombinedQuestionalServey/GraphPurposeofViewScreenBasedonSocioeconomicClass";
import GraphContentWatchonScreenBasedonSocioeconomicClass from "./CombinedQuestionalServey/GraphContentWatchonScreenBasedonSocioeconomicClass";
import Gestation from "./DirectQuestionalServer/Gestation";
import Delivery from "./DirectQuestionalServer/Delivery";
import Birthweight from "./DirectQuestionalServer/BirthWeight";
import Gender from "./DirectQuestionalServer/Gender";
import Familytype from "./DirectQuestionalServer/FamililyType";
import Religion from "./DirectQuestionalServer/Religion";
import TotalChildreninHouse from "./DirectQuestionalServer/TotalChildreninHouse";

export default function FrontPage() {
  const [selectValue, setSelectValue] = useState("SmartphoneWatchingTime");
  const [selectValue2, setSelectValue2] = useState("Gestation");

  const onValueChange = (e) => {
    setSelectValue(e.target.value);
  };
  const onValueChange2 = (e) => {
    setSelectValue2(e.target.value);
  };

  return (
    <>
      <Box>
        <Flex m={"5% 3%"} justify={"space-around"}>
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
                colorScheme="black"
                variant="outline"
                borderRadius={"30px"}
                border="2px"
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
        <Heading fontSize={"3.5rem"} textAlign={"center"} m={"5% auto"}>
          Survey based on collected data{" "}
        </Heading>
        <Box w={"40vw"} ml={"7%"}>
          <Select
            variant="filled"
            onChange={(e) => onValueChange(e)}
            borderColor="gray"
            size="lg"
            borderRadius={"30px"}
            fontWeight={"medium"}
          >
            <option value={"SmartphoneWatchingTime"}>
              Smartphone watching by child based on socioeconomic class
            </option>
            <option value={"SmartphoneWatchingTimebyAge"}>
              Smartphone watching by child based on age of child
            </option>
            <option value={"SmartphoneWatchingTimebasedonGender"}>
              Smartphone watching by child based on gender
            </option>
            <option value={"PurposeofViewScreenBasedonSocioeconomicClass"}>
              Purpose of viewing screen based on socioeconomic class
            </option>
            <option value={"ContentWatchonScreenBasedonSocioeconomicClass"}>
              Content watch on screen based on socioeconomic class
            </option>
          </Select>
        </Box>
        <Box>
          {selectValue === "SmartphoneWatchingTime" && (
            <GraphScreenWatchingTime />
          )}
          {selectValue === "SmartphoneWatchingTimebyAge" && (
            <GraphScreenWatchingTimebyAge />
          )}
          {selectValue === "SmartphoneWatchingTimebasedonGender" && (
            <GraphScreenWatchingTimebasedonGender />
          )}
          {selectValue === "PurposeofViewScreenBasedonSocioeconomicClass" && (
            <GraphPurposeofViewScreenBasedonSocioeconomicClass />
          )}
          {selectValue === "ContentWatchonScreenBasedonSocioeconomicClass" && (
            <GraphContentWatchonScreenBasedonSocioeconomicClass />
          )}
        </Box>
        <Box w={"40vw"} ml={"7%"}>
          <Select
            variant="filled"
            onChange={(e) => onValueChange2(e)}
            borderColor="gray"
            size="lg"
            borderRadius={"30px"}
            fontWeight={"medium"}
          >
            <option value={"Gestation"}>Gestation</option>
            <option value={"deliverymode"}>Mode of Delivery</option>
            <option value={"birthweight"}>Birth Weight</option>
            <option value={"gender"}>Gender</option>
            <option value={"familytype"}>Family Type</option>
            <option value={"religion"}>Religion</option>
            <option value={"totalchildren"}>Total children in house</option>
          </Select>
        </Box>
        <Box ml={"7%"} mt={"3%"}>
          {selectValue2 === "Gestation" && <Gestation />}
          {selectValue2 === "deliverymode" && <Delivery />}
          {selectValue2 === "birthweight" && <Birthweight />}
          {selectValue2 === "gender" && <Gender />}
          {selectValue2 === "familytype" && <Familytype />}
          {selectValue2 === "religion" && <Religion />}
          {selectValue2 === "totalchildren" && <TotalChildreninHouse />}
        </Box>
      </Box>
    </>
  );
}

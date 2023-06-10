import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/api";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import FormData from "../data/FormData";

export default function AdminPage() {
  const [data, setData] = useState();
  const [collapseStates, setCollapseStates] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      let result = await getAllUsers();
      result = result.data;
      setData(result);

      // Initialize the collapse states array
      setCollapseStates(new Array(result.length).fill(false));
    };
    getUsers();
  }, []);

  

  const handleToggle = (index) => {
    const newCollapseStates = [...collapseStates];
    newCollapseStates[index] = !newCollapseStates[index];
    setCollapseStates(newCollapseStates);
  };

  return (
    <div>
      <Heading fontSize={"1.5rem"} ml={"3%"} mt={"2%"}>Total number of responses are {data && data.length}</Heading>
      {data && (
        <Box>
          <Flex direction={"column"}>
            {data.map((item, index) => (
              <>
                <Flex
                  key={index}
                  h={"115vh"}
                  w={"94%"}
                  p={"2%"}
                  pt={"3%"}
                  direction={"column"}
                  m={"2% auto"}
                  borderRadius={"10px"}
                  boxShadow={"0px 0px 8px 2px lightgray"}
                  wrap={"wrap"}
                  style={{
                    maxHeight: collapseStates[index] ? "none" : "20vh",
                    overflow: "clip",
                    transition: "max-height .3s ease-in-out",
                  }}
                  position={"relative"}
                >
                  <Box position={"absolute"} right={"1%"} top={"-1"}>
                    <Button
                      backgroundColor={"#318FB5"}
                      color={"white"}
                      _hover={{backgroundColor: "#5883B5"}}
                      size="sm"
                      w={"6vw"}
                      onClick={() => handleToggle(index)}
                      mt="1rem"
                    >
                      Show {collapseStates[index] ? "Less" : "More"}
                    </Button>
                  </Box>
                  {FormData.map((formDataItem) => {
                    if (formDataItem.type === "singleselectmultirow") {
                      return (
                        <Box mb={"4px"} key={formDataItem.name} mr={"3%"}>
                          <Text fontWeight={"bold"}>{formDataItem.name} :</Text>
                          {formDataItem.subquestions.map((subquestion) => (
                            <Text ml={""} mb={"4px"} key={subquestion.name}>
                              <Text fontWeight={"medium"} display={"inline"}>
                                {subquestion.name}
                              </Text>{" "}
                              : {item[formDataItem.name][subquestion.name]}
                            </Text>
                          ))}
                        </Box>
                      );
                    } else {
                      return (
                        <Text mb={"4px"} key={formDataItem.name} mr={"3.5%"}>
                          <strong>{formDataItem.name}</strong> :{" "}
                          {item[formDataItem.name]}
                        </Text>
                      );
                    }
                  })}
                </Flex>
              </>
            ))}
          </Flex>
        </Box>
      )}
    </div>
  );
}

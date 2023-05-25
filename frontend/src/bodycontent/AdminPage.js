import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/api";
import { Box, Flex, Text } from "@chakra-ui/react";
import FormData from "../data/FormData";

export default function AdminPage() {
  const [data, setData] = useState();
  useEffect(() => {
    const getuserFunction = async () => {
      let result = await getAllUsers();
      result = result.data;
      console.log(result);
      setData(result);
    };
    getuserFunction();
  }, []);
  return (
    <div>
      {data && (
        <Box>
          <Flex wrap={"wrap"} overflow={"hidden"}>
          {data.map((data) => {
            return (
              <>
              <Flex w={"94%"} p={"2%"}  m={"2% auto"}  borderRadius={"10px"} boxShadow={"0px 0px 8px 2px lightgray"} wrap={"wrap"} >
                {FormData.map((item) => {
                  if(item.type === "singleselectmultirow" ){
                    return(
                      <>
                         <Box mr={"2%"} >
                            <Text>{item.name} :</Text>
                            {item.subquestions.map((items) => {
                              return(
                                <>
                                  <Text ml={"8%"}>{items.name} : {data[`${item.name}`][`${items.name}`]}</Text>
                                </>
                              )
                            })}
                         </Box>
                      </>
                    )
                  }
                  else{
                  return (
                    <>
                      <Flex w={"24vw"}>
                        <Text >{item.name} : {data[`${item.name}`]}</Text>
                      </Flex>
                    </>
                  );
                }
                })}
                </Flex>
              </>
            );
          })}
          
          </Flex>
        </Box>
      )}
    </div>
  );
}

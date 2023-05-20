import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Stack,
  Radio,
  CheckboxGroup,
  Checkbox,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { addUser } from "../api/api";
import FormData from "../data/FormData"

const inititialValue = {
  name: "",
  age: "",
  DOB: "",
  POB: "",
  TOB: "",
  gestation: "",
  deliverymode: "",
  birthweight: "",
  gender: "",
  familytype: "",
  religion: "",
};


const Form = () => {
  const [user, setUser] = useState(inititialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AdduserFunction = async (event) => {
    event.preventDefault();
    // FormData.map((question, index) => {
    //   if (question.type === "single") {
    //     let res = document.getElementById(question.question);
    //     console.log(res);
    //   }
    // });
    const result = await addUser(user);
    console.log(result);
  };

  return (
    <>
      <Box height={"100%"} mt={"2%"}>
        <Box
          w={"60vw"}
          m={"auto"}
          pt="5%"
          pb={"5%"}
          backgroundColor={"white"}
          p={"2% 4%"}
          borderRadius={"5px"}
          boxShadow={"0px 2px 8px 2px gray"}
        >
          <Heading textAlign={"center"} mb={"2%"}>Child Screen Time Survey</Heading>
          <hr style={{borderColor: "gray"}}></hr>
          <form onSubmit={AdduserFunction}>
            <FormControl>
              {FormData.map((question, idx) => {
                if (question.type === "singleselect") {
                  return (
                    <>
                      <Box mt="5">
                        <FormLabel key={idx}>{question.question}</FormLabel>
                        <Select
                          variant="flushed"
                          name={question.name}
                          placeholder="Select"
                          onChange={(e) => onValueChange(e)}
                          borderColor="gray"
                        >
                          {question.options.map((option, index) => {
                              return (
                                <>
                                  <option
                                    key={index}
                                    value={option}
                                  >
                                    {option}
                                  </option>
                                </>
                              );
                            })}
                        </Select>
                        {/* <RadioGroup id={question.question}>
                          <Stack direction="column">
                            {question.options.map((option, index) => {
                              return (
                                <>
                                  <Radio
                                    key={index}
                                    name={question.question}
                                    value={option}
                                  >
                                    {option}
                                  </Radio>
                                </>
                              );
                            })}
                          </Stack>
                        </RadioGroup> */}
                      </Box>
                    </>
                  );
                } else {
                  return(
                    <>
                      <Box mt="5">
                        <FormLabel >{question.question}</FormLabel>
                          <Input
                            variant='flushed'
                            name={question.name}
                            borderColor={"gray"}
                            type={question.type}
                            onChange={(e) => onValueChange(e)}
                          />
                      </Box>
                    </>
                  )

                  // return (
                  //   <>
                  //     <Box mt="5">
                  //       <FormLabel key={idx}>{question.question}</FormLabel>
                  //       <CheckboxGroup>
                  //         <Stack direction="column">
                  //           {question.options.map((option, index) => {
                  //             return (
                  //               <>
                  //                 <Checkbox key={index} value={option}>
                  //                   {option}
                  //                 </Checkbox>
                  //               </>
                  //             );
                  //           })}
                  //         </Stack>
                  //       </CheckboxGroup>
                  //     </Box>
                  //   </>
                  // );
                }
              })}

              <Button
                mt={"2%"}
                colorScheme="blue"
                variant="solid"
                size={"md"}
                type="submit"
                w={"100%"}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Form;

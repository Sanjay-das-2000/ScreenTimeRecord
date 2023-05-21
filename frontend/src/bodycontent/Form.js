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
import FormData from "../data/FormData";

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
  educationqualificationoffather: "",
  educationqualificationofmother: "",
  totalchildren : "",
  noofhelpingstaff : "",
  ageofhelpingstaff : "",
  nooffriends : "",
  ageoffriends : "",
  ageofstartingviewmedia : "",
  class : "",
  weekdaytimespanviewingelectronics: {
    tvwatchingtime : "",
    smartphonewatchingtime : "",
    laptopwatchingtime : "",
    tabletwatchingtime : "",
  },
  weekendtimespanviewingelectronics: {
    tvwatchingtime : "",
    smartphonewatchingtime : "",
    laptopwatchingtime : "",
    tabletwatchingtime : "",
  },
  purposeofviewscreenonweekdays: {
    foreducation : "",
    forentertainment : "",
    forplayinggames : "",
    invideocalls : "",
    duringeating : "",
    beforebed : "",
    toengage : "",
  },
  purposeofviewscreenonweekends: {
    foreducation : "",
    forentertainment : "",
    forplayinggames : "",
    invideocalls : "",
    duringeating : "",
    beforebed : "",
    toengage : "",
  },
  willchildreneatbetterwhilewatchinscreen : "",
  screentimeofprimarycaretaker : "",
  contentwatchedbyclild : {
    cartoonswathingtime : "",
    nonanimetedcartoonswatchingtime : "",
    animetedmoviewatchingtime : "",
    nonanimatedmoviewatchingtime : "",
    songslisteningtime : "",
    rhymeslisteningtime : "",
    knowledgebasedcontentwatchingtime : "",
    spiritualwatchingtime : "",
    serialwatchingtime : "",
  }

};

const Form = () => {
  const [user, setUser] = useState(inititialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onValueChange1 = (e) => {
    setUser({ ...user, weekdaytimespanviewingelectronics :{ ...user.weekdaytimespanviewingelectronics, [e.target.name]: e.target.value }});
  };
  const onValueChange2 = (e) => {
    setUser({ ...user, weekendtimespanviewingelectronics :{ ...user.weekendtimespanviewingelectronics, [e.target.name]: e.target.value }});
  };
  const onValueChange3 = (e) => {
    setUser({ ...user, purposeofviewscreenonweekdays :{ ...user.purposeofviewscreenonweekdays, [e.target.name]: e.target.value }});
  };
  const onValueChange4 = (e) => {
    setUser({ ...user, purposeofviewscreenonweekends :{ ...user.purposeofviewscreenonweekends, [e.target.name]: e.target.value }});
  };
  const onValueChange5 = (e) => {
    setUser({ ...user, contentwatchedbyclild :{ ...user.contentwatchedbyclild, [e.target.name]: e.target.value }});
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
    alert("data submitted")
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
          <Heading textAlign={"center"} mb={"2%"}>
            Child Screen Time Survey
          </Heading>
          <hr style={{ borderColor: "gray" }}></hr>
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
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              </>
                            );
                          })}
                        </Select>
                      </Box>
                    </>
                  );
                } else if (question.type === "singleselectmultirow") {
                  return (
                    <Box mt={"4"}>
                      <FormLabel><strong>{question.question}</strong></FormLabel>
                      {question.subquestions.map((option, index) => {
                        return (
                          <Box mt={"4"}>
                            <FormLabel>{option.question}</FormLabel>
                            {(question.name === "weekdaytimespanviewingelectronics") &&
                            <Select
                              variant="flushed"
                              name={option.name}
                              placeholder="Select"
                              
                              onChange={(e) => onValueChange1(e)}
                              borderColor="gray"
                            >
                              {question.options.map((option, index) => {
                                return (
                                  <>
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  </>
                                );
                              })}
                            </Select>
                            }
                            {(question.name === "weekendtimespanviewingelectronics") &&
                            <Select
                              variant="flushed"
                              name={option.name}
                              placeholder="Select"
                              
                              onChange={(e) => onValueChange2(e)}
                              borderColor="gray"
                            >
                              {question.options.map((option, index) => {
                                return (
                                  <>
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  </>
                                );
                              })}
                            </Select>
                            }
                            {(question.name === "purposeofviewscreenonweekdays") &&
                            <Select
                              variant="flushed"
                              name={option.name}
                              placeholder="Select"
                              
                              onChange={(e) => onValueChange3(e)}
                              borderColor="gray"
                            >
                              {question.options.map((option, index) => {
                                return (
                                  <>
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  </>
                                );
                              })}
                            </Select>
                            }
                            {(question.name === "purposeofviewscreenonweekends") &&
                            <Select
                              variant="flushed"
                              name={option.name}
                              placeholder="Select"
                              
                              onChange={(e) => onValueChange4(e)}
                              borderColor="gray"
                            >
                              {question.options.map((option, index) => {
                                return (
                                  <>
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  </>
                                );
                              })}
                            </Select>
                            }
                            {(question.name === "contentwatchedbyclild") &&
                            <Select
                              variant="flushed"
                              name={option.name}
                              placeholder="Select"
                              
                              onChange={(e) => onValueChange5(e)}
                              borderColor="gray"
                            >
                              {question.options.map((option, index) => {
                                return (
                                  <>
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  </>
                                );
                              })}
                            </Select>
                            }
                            
                          </Box>
                        );
                      })}
                    </Box>
                  );
                } else {
                  return (
                    <>
                      <Box mt="5">
                        <FormLabel>{question.question}</FormLabel>
                        <Input
                          variant="flushed"
                          name={question.name}
                          borderColor={"gray"}
                          type={question.type}
                          onChange={(e) => onValueChange(e)}
                        />
                      </Box>
                    </>
                  );
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

/* <RadioGroup id={question.question}>
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
                        </RadioGroup> */
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

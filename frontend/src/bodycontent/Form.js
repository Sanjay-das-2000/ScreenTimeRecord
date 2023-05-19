import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { addUser } from "../api/api";

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
    const result = await addUser(user);
    console.log(result);
  }

  return (
    <>
      <Box height={"100%"} backgroundColor={"blue.100"} >
        <Box w={"60vw"} m={"auto"} pt="5%" pb={"5%"} backgroundColor={"white"} p={"4%"} borderRadius={"5px"} boxShadow={"0px 0px 8px 2px gray"}>

        <form onSubmit={AdduserFunction}>
        <FormControl >
          <FormLabel>Name of child</FormLabel>
          <Input
          variant='flushed'
            name="name"
            borderColor={"gray"}
            type={"text"}
            onChange={(e) => onValueChange(e)}
            ></Input>
          <FormLabel>Age of child</FormLabel>
          <Input
            variant='flushed'
            name="age"
            borderColor={"gray"}
            type={"number"}
            onChange={(e) => onValueChange(e)}
            ></Input>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            variant='flushed'
            name="DOB"
            borderColor={"gray"}
            type="date"
            onChange={(e) => onValueChange(e)}
            ></Input>
          <FormLabel>Place of Birth</FormLabel>
          <Input
            variant='flushed'
            name="POB"
            borderColor={"gray"}
            type="text"
            onChange={(e) => onValueChange(e)}
            ></Input>
          <FormLabel>Time of Birth</FormLabel>
          <Input
            variant='flushed'
            name="TOB"
            borderColor={"gray"}
            type="time"
            onChange={(e) => onValueChange(e)}
            ></Input>
          <FormLabel>Gestation</FormLabel>
          <Select variant='flushed' name="gestation" placeholder="Select" onChange={(e) => onValueChange(e)} borderColor='gray'>
            <option>Preterm (before 37 weeks)</option>
            <option>Term (37-41 weeks)</option>
            <option>Post-dated (more than 41 weeks)</option>
          </Select>
          <FormLabel>Mode of Delivery</FormLabel>
          <Select variant='flushed' name="deliverymode" placeholder="Select" onChange={(e) => onValueChange(e)} borderColor='gray'>
            <option>Normal</option>
            <option>C-section</option>
          </Select>
          <FormLabel>Birth weight</FormLabel>
          <Select variant='flushed' name="birthweight" placeholder="Select" onChange={(e) => onValueChange(e)} borderColor='gray'>
            <option>Low birthweight (less than 2.5 kg)</option>
            <option>Normal birthweight (2.5 -4.5 kg)</option>
            <option>Big baby (4.5kg or more)</option>
          </Select>
          <FormLabel>Gender</FormLabel >
          <Select variant='flushed' name="gender" placeholder="Select" onChange={(e) => onValueChange(e)} borderColor='gray'>
            <option>Male</option>
            <option>Female</option>
          </Select>
          <FormLabel>Family type</FormLabel >
          <Select variant='flushed' name="familytype" placeholder="Select" onChange={(e) => onValueChange(e)} borderColor='gray'>
            <option>Joint Nuclear</option>
            <option>Single Parent</option>
          </Select>
          <FormLabel>Religion</FormLabel >
          <Select variant='flushed' name="religion" placeholder="Select" onChange={(e) => onValueChange(e)} borderColor='gray'>
            <option>Hinduism</option>
            <option>Buddhism</option>
            <option>Jainism</option>
            <option>Sikhism</option>
            <option>Islam</option>
            <option>Christianity</option>
            <option>Other</option>
          </Select>

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

import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { addAdmin, getAdmin } from '../api/api';
import bcrypt from "bcryptjs"

export default function AdminrRegister() {
  let Navigate = useNavigate();

    const Name = useRef();
    const Email = useRef();
    const Password = useRef();
    const Cpassword = useRef();

    const submitHandler = async (event) => {

        event.preventDefault(); 
        const name = Name.current.value;
        const email = Email.current.value;
        const password = Password.current.value;
        const cpassword = Cpassword.current.value;
        const hashedPassword = bcrypt.hashSync(password, 10);

        
        const values = {
          name: name,
          email: email,
          password: hashedPassword,
        }
    
        try {
          const res = await getAdmin({ email: email });
          console.log(res.data);
          if(res.data){
            alert("Admin with this email is already exit redirecting to login page");
            Navigate("/login");
          } else {
            if(password === cpassword){
                try {
                  const res = await addAdmin(values);
                  alert("Registered successfully")
                  console.log('Success add user', res);
                  Navigate("/login");
                } catch (error) {
                  console.log(error);
                }
            }
            else{
             alert("Password didnot match");
            }
          }
        } catch (error) {
          console.log(error);
        }
    
      };
  return (
    <div>
        <Box  width={"40vw"} m="auto" boxShadow={"0px 0px 7px 3px gray"} p={"3%"} borderRadius={"12px"} mt="6%">
        <Heading textAlign={"center"} mb={"3%"}>Admin Register</Heading>
        <form onSubmit={submitHandler}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input variant='flushed' ref={Name} borderColor={"gray"} type={"text"}></Input>
            <FormLabel mt={"3%"}>Email Id</FormLabel>
            <Input variant='flushed' ref={Email} borderColor={"gray"} type={"text"}></Input>
            <FormLabel mt={"3%"}>Password</FormLabel>
            <Input variant='flushed' ref={Password} borderColor={"gray"} type={"text"}></Input>
            <FormLabel mt={"3%"}>Confirm Password</FormLabel>
            <Input variant='flushed' ref={Cpassword} borderColor={"gray"} type={"text"}></Input>
            <Button
              mt={"7%"}
              colorScheme="blue"
              variant="solid"
              size={"md"}
              onClick={submitHandler}
              w={"100%"}

            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </div>
  )
}

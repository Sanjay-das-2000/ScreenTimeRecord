import React, { useRef, } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { addAdmin, getAdmin } from "../api/api";
import bcrypt from "bcryptjs"
import { useDispatch } from "react-redux";
import { adminAuthActions } from "../store/auth";

export default function Loginpage() {
  let Navigate = useNavigate();
  const Dispatch = useDispatch();

  const Email = useRef();
  const Password = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = Email.current.value;
    const password = Password.current.value;

    try {
      const res = await getAdmin({ email: email });
      if (res.data) {
        bcrypt.compare(password , res.data.password, function(err, isMatch){
          if(err){
            throw err;
          }else if(!isMatch){
            alert("Wrong password");
          }
          else{
            Dispatch(adminAuthActions.login())
            alert("Login Successful")
            Navigate("/admin");
          }
        })
      } else {
          alert("Admin not Found");
          // Email.current.value = null;
          // Password.current.value = null;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <Box width={"40vw"} m="auto" boxShadow={"0px 0px 7px 3px gray"} p={"3%"} borderRadius={"12px"} mt="8%">
            <Heading textAlign={"center"} mb={"3%"}>Welcome Admin</Heading>
          <form onSubmit={submitHandler}>
            <FormControl>
              <FormLabel mt={"3%"}>Email Id</FormLabel>
              <Input variant='flushed' ref={Email} borderColor={"gray"} type={"text"} />
              <FormLabel mt={"3%"}>Password</FormLabel>
              <Input variant='flushed' ref={Password} borderColor={"gray"} type={"text"}/>
              <Button
                mt={"7%"}
                colorScheme="blue"
                variant="solid"
                size={"md"}
                type="submit"
                w={"100%"}
              >
                Login
              </Button>
            </FormControl>
          </form>
        </Box>
      </div>
    </>
  );
}

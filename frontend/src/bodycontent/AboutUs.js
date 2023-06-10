import React from "react";
import { Box, Text, Heading, Link } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box p={8} w={"70vw"} m={"auto"} fontSize={"1.2rem"} mt={"3%"}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <Text mb={4}>
        Welcome to our website! We are dedicated to providing valuable insights
        and research on the "Effect of Screen Time on Language Development in
        Indian Children of 2-5 years of age." Our goal is to gather data and
        analyze the impact of screen time on language skills among young
        children in India.
      </Text>
      <Text mb={4}>
        If you have any questions, suggestions, or feedback, please feel free to
        contact us.
      </Text>
      <Text mb={4}>
        Contact:<br></br>
        Dr. S. S. Satapathy <br></br>
        Email: 
        <Link href="mailto:ssankar@tezu.ernet.in" ml={"6px"}>ssankar@tezu.ernet.in</Link><br></br>
        DBT funded Bioinformatics Center, Tezpur University, Napaam-784028, Assam, India
      </Text>

      <Text mb={4}>
        Thank you for visiting our website and being a part of our research. We
        appreciate your support!
      </Text>
    </Box>
  );
};

export default AboutUs;

import { Box } from "@chakra-ui/core";
import Navbar from "../components/Navbar";

const About = () => (
  <Box bg="grey" w="100%" p={10} color="yellow">
    <Navbar />
    <h1>About Star Wars</h1>
    <p>This is an Application to view Star wars characters</p>
  </Box>
);

export default About;

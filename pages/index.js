import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { List, ListItem, ListIcon } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

const url = "https://swapi.dev/api/people/";

const Index = (data) => {
  console.log(data);
  //const { status, data } = useFetch(url);

  let names = [];
  for (let i in data.results) {
    names.push(data.results[i].name);
  }
  //console.log(names);

  const items = names.map((value, index) => (
    <h2>
      <ListItem>
        <Link href={`/people/${index + 1}`}>
          <a>{value}</a>
        </Link>
      </ListItem>
    </h2>
  ));

  return (
    <Box bg="grey" w="100%" p={10} color="yellow">
      <Navbar />
      <h1>Welcome to Star Wars page</h1>
      <h1>The Star wars characters are</h1>
      <List styleType="disc">{items}</List>
    </Box>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export default Index;

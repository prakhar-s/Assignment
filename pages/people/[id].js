import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import useFetch from "../../hooks/useFetch";
import Starships from "./starships";
import fetch from "isomorphic-unfetch";

import { List, ListItem, ListIcon } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";



const People = () => {
  const router = useRouter();
  const { id } = router.query;
  let baseUrl = "https://swapi.dev/api/people/";

  let url = baseUrl + `${id}`;
  
  const { status, data } = useFetch(url);
  console.log(data);
  const starShipUrls = [];
  const starShipNames = [];
  for (let i in data.starships) {
    starShipUrls.push(data.starships[i]);
  }

  return (
    <Box bg="grey" w="100%" h="100%" p={10} color="yellow">
      <Navbar />

      <h1>Hi, I am {data.name}</h1>
      <Starships urls={starShipUrls} />
    </Box>
  );
};

export default People;

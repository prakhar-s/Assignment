import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Pilots from "./pilots";
import { Box } from "@chakra-ui/core";
//import Starships from "./starships";

const Starship = () => {
  const router = useRouter();
  const { id } = router.query;
  let baseUrl = "https://swapi.dev/api/starships/";

  let url = baseUrl + `${id}`;

  const { status, data } = useFetch(url);

  const pilotUrls = [];
  const pilotNames = [];
  for (let i in data.pilots) {
    pilotUrls.push(data.pilots[i]);
  }

  console.log(pilotUrls);

  return (
    <Box bg="grey" w="100%" h="100%" p={10} color="yellow">
      <Navbar />
      <h1>STASHIP PAGE</h1>
      <h2>This is {data.name} </h2>
      <Pilots urls={pilotUrls} />
    </Box>
  );
};

export default Starship;

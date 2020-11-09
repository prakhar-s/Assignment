import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { List, ListItem, ListIcon } from "@chakra-ui/core";

const Pilots = (props) => {
  const urls = props.urls;
  const pilotIds = [];
  for (let i = 0; i < urls.length; i++) {
    const urlTokens = urls[i].split("/");
    pilotIds.push(urlTokens[urlTokens.length - 2]);
  }
  console.log(pilotIds);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(URL) {
      const response = await axios.get(URL);
      return response.data;
    }

    Promise.all(urls.map(fetchData)).then((values) => {
      setData(values);
    });
  }, [urls]);

  let pilotNames = [];
  for (let i = 0; i < data.length; i++) {
    pilotNames.push(data[i].name);
  }

  const items = pilotNames.map((value, index) => (
    <h2>
      <ListItem>
        <Link href={`/people/${pilotIds[index]}`}>
          <a>{value}</a>
        </Link>
      </ListItem>
    </h2>
  ));

  return (
    <div>
      <h3>The Pilots of this starships are listed below </h3>
      <List styleType="disc">{items}</List>
    </div>
  );
};

export default Pilots;

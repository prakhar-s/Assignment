import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { List, ListItem, ListIcon } from "@chakra-ui/core";

const Starships = (props) => {
  const urls = props.urls;
  const starshipIds=[]
  for(let i=0;i<urls.length;i++){
    const urlTokens=urls[i].split("/")
    starshipIds.push(urlTokens[urlTokens.length-2])

  }
  console.log(starshipIds)
  //console.log(urls[0])
   //const a=urls[1].split("/")
   //console.log(a[a.length-2])

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

  let starShipNames = [];
  for (let i = 0; i < data.length; i++) {
    starShipNames.push(data[i].name);
  }

  const items = starShipNames.map((value, index) => (
    <h2>
      <ListItem>
        <Link href={`/starship/${starshipIds[index]}`}>
          <a>{value}</a>
        </Link>
      </ListItem>
    </h2>
  ));

 

  return (
    <div>
      <h3>The starships are listed below </h3>
      
      <List styleType="disc">{items}</List>
    </div>
  );
};

export default Starships;

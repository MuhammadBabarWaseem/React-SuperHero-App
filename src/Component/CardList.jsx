import { Heading } from "@chakra-ui/react";
import "./card-list.css";

import React from "react";

export default function cardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name,id } = monster;
        return (
          <div className="card-container" key={id}>
            <img
              src={monster.images.md}
              alt={`${name}`}
            />
            <Heading size="1xl">{name}</Heading>
            {/* <p>{monster.connections.groupAffiliation}</p> */}
            <p>{monster.connections.groupAffiliation ? monster.connections.groupAffiliation.slice(0,90): ""}</p>
          </div>
        );
      })}
    </div>
  );
}

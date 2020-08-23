import * as React from "react";
import * as s from "./main.scss";
import searching from "../../../assets/searching.png";
import { Flex, Image, Text } from "@fluentui/react-northstar";

interface NotFoundProps {
  label: string;
}

export const NotFound: React.SFC<NotFoundProps> = ({ label }) => {
  return (
    <Flex data-testid="notFound" column hAlign={"center"}>
      <Image src={searching} className={s.image} />
      <Text>{label}</Text>
    </Flex>
  );
};

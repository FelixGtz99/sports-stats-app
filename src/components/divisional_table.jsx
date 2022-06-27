import { Button, Table, Text } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const DivisionalTable = (props) => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "stadium", label: "stadium" },
    { key: "options", label: "" },
  ];
  return (
    <div>
      <Text
        h1
        size={20}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        {props.division_name}
      </Text>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          width: "50px",
        }}
        color="secondary"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={props.data}>
          {(item) => (
            <Table.Row key={item.team_id}>
              <Table.Cell>{item.name_display_full}</Table.Cell>
              <Table.Cell>{item.venue_short}</Table.Cell>
              <Table.Cell>
                <Link to={`/mlb/team/${item.team_id}`}>
                  {" "}
                  <Button color="secondary">See More</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};
export default DivisionalTable;

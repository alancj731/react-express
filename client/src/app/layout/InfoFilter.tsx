import { Header, Menu } from "semantic-ui-react";
import Calendar from "react-calendar";

export default function InfoFilter() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 28 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Due Dates" />
        <Menu.Item content="Due day in this week" />
        <Menu.Item content="Due day whthin two weeks" />
      </Menu>
      <Header />
      <Calendar />
    </>
  )
}

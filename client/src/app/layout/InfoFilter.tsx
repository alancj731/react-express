import { Header, Menu } from "semantic-ui-react";
import Calendar from "react-calendar";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function InfoFilter() {
  const { infoitemStore } = useStore();
  const { filterMode, setFilterMode } = infoitemStore;
  // const [filter, setFilter] = useState("all")

  const handleClick= (name: string) => {
    // console.log({name}, ' Button clicked!');
    if (filterMode.mode !== name) {

      filterMode.mode = name
    }
    
  };

  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 28 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item onClick={() =>handleClick("all")} active={filterMode.mode === "all"} content="All Due Dates" />
        <Menu.Item onClick={() =>handleClick("one_week")} active={filterMode.mode === "one_week"} content="Due day in one week" />
        <Menu.Item onClick={() =>handleClick("two_weeks")} active={filterMode.mode === "two_weeks"} content="Due day whthin two weeks" />
      </Menu>
      <Header />
      <Calendar />
    </>
  )
})

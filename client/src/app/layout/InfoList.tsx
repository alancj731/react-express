import { Header } from "semantic-ui-react";
import { Fragment } from "react";
import InfoItem from "./InfoItem";
import { InfoItemData} from "../models/InfoItemData";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
// import { useEffect } from "react";

// interface Props {
//   items: InfoItemData[],
// }

export default observer(function InfoList() {
  const { infoitemStore } = useStore();
  const { infoitems, filterMode } = infoitemStore;

  function getDisplayItems(): InfoItemData[] {
    if (filterMode.mode === "all") 
      return infoitems
    var daysToGo = filterMode.mode === "one_week" ? 7: 14
    const startDay = new Date()
    const endDay = new Date()
    endDay.setDate(startDay.getDate() + daysToGo)

    const filteredItems = infoitems.filter(item => {
      const dueDay = new Date(item.deadline)
      console.log(dueDay.getTime(), startDay.getTime(), endDay.getTime())
     return dueDay.getTime() >= startDay.getTime() && dueDay.getTime() <= endDay.getTime()
    })   
    return filteredItems
  }

  const displayItems = getDisplayItems()

  return (
    <>
      {displayItems.map((item) => (
        <Fragment key={item.id}>
          <Header sub color="teal" size="huge" >
            {item.course}
          </Header>
          <InfoItem
            course={item.course}
            instructor={item.instructor}
            assignment={item.assignment}
            description={item.description}
            deadline= {item.deadline}
            note = {item.note}
          />
        </Fragment>)
      )}
    </>
  );
})

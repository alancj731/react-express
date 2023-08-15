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
  const { infoitems } = infoitemStore;
  console.log("InfoList rendered", infoitems)

  // useEffect(() => {
  //   if (infoitems.size === 0) {
  //     loadInfoItems();
  //   }
  // }, [infoitems, loadInfoItems]);

  // console.log(getInfoItems, getInfoItems.length, infoitems, infoitems.size)

  // var InfoListData: InfoItemData[] = [
  //   {
  //     id: "1",
  //     course: "course a",
  //     deadline: "2023-08-14T18:09:43",
  //     assignment: "ass 1",
  //     instructor: "instructor a",
  //     description: "some requirement",
  //   },
  //   {
  //     id: "2",
  //     course: "course b",
  //     deadline: "2023-09-14T18:09:43",
  //     assignment: "ass 2",
  //     instructor: "instructor b",
  //     description: "some requirement",
  //   },
  //   {
  //     id: "3",
  //     course: "course c",
  //     deadline: "2023-10-14T18:09:43",
  //     assignment: "ass 3",
  //     instructor: "instructor c",
  //     description: "some requirement",
  //   },
  // ];

  // var InfoListData: InfoItemData[] = [];

  // if (InfoListData.length === 0) {
  //   console.log("empty data");
  //   return (
  //     <>
  //       <h2>No assignment yet, try to check it later!</h2>
  //     </>
  //   );
  // }

  return (
    <>
      {infoitems.map((item) => (
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
          />
        </Fragment>)
      )}
    </>
  );
})

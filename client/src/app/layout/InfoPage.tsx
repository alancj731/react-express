import { Container, Grid } from "semantic-ui-react";
import InfoList from "./InfoList";
import InfoFilter from "./InfoFilter";

import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
// import { useEffect, useState } from "react";
// import FetchCourseInfo from "../api/FetchCourseInfo";
// import { InfoItemData } from "../models/InfoItemData";
import LoadingComponent from "./LoadingComponet";

export default observer(function InfoPage() {
  const { infoitemStore } = useStore();
  const { infoitems, loadInfoItems, initialLoading, dataSize } = infoitemStore;

  //const [data, setData] = useState(infoitems)

  console.log("InfoPage rendered", infoitems, initialLoading, dataSize)

  // useEffect(() => {
  //   if (infoitems.size === 0) {
  //     console.log("start to call loadInfoItems()")
  //     loadInfoItems();
  //     console.log("loadInfoItems() ended")
  //   }
  // }, [infoitems.size, loadInfoItems]);

  // console.log("InfoPage rendered!", "infoitems.size:", infoitems.size)

  // const [courseInfoData, setcourseInfoData] = useState<InfoItemData[]>([]);
  // const [courseInfoData, setcourseInfoData] = useState<
  //   Map<string, InfoItemData>
  // >(new Map<string, InfoItemData>());

  // const [courseInfoData, setcourseInfoData] = useState<InfoItemData[]>([]);

  // useEffect(() => {
  //   FetchCourseInfo()
  //     .then((fetchedData) => {
  //       if (fetchedData.length === 0) {
  //         console.log("Empty Course Info List");
  //       } else {
  //         setcourseInfoData(fetchedData);
  //         console.log(courseInfoData);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log({ message: error.message });
  //     });
  // }, []);

  // useEffect(()=>{
  //   if (infoitems.length === 0) {
  //     loadInfoItems()
  //   }
  // },[])
  if (dataSize === 0) {
    console.log("go to fetch data here!")
    loadInfoItems()
  }

  if (initialLoading) {
    return <LoadingComponent content="Loading data..." inverted={true} />
  }

  return (
    <>
      {/* <h2>{infoitems.length}</h2> */}
      <Grid>
        <Grid.Column width="10">
          <Container>
            <InfoList />
          </Container>
        </Grid.Column>

        <Grid.Column width="6">
          <InfoFilter />
        </Grid.Column>
      </Grid>
    </>
  );
});

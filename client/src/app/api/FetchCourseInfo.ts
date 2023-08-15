import { InfoItemData } from "../models/InfoItemData";

export default function FetchCourseInfo(): Promise<InfoItemData[]> {
  return fetch("courseinfo")
    .then((response) => response.json())
    .then((fetchedData) => {
      //   console.log(fetchedData);
      return fetchedData;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}

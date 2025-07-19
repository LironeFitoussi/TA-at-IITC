import { useLoaderData } from "react-router-dom";

const DummyDataPage = () => {
  const data = useLoaderData();
  console.log(data);

  return <h1>This is Dummy Data Page</h1>;
};

export async function fetchDataFn() {
  let fetchedData;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    fetchedData = json;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return fetchedData;
}

export default DummyDataPage;

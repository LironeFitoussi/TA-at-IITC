import { useSearchParams } from "react-router";

const QueryPrint = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams.entries());
  console.log(searchParamsObj);

  return (
    <>
      <h1>This is Query Print Page</h1>
      <div>
        {
          <ul>
            {Object.entries(searchParamsObj).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export default QueryPrint;

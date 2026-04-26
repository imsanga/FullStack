import { AppContext } from "../App";
import { useContext } from "react";
import { useCatFact } from "../useCatFact";

export const Home = () => {
  const { userName } = useContext(AppContext);
  const { data, isLoading, isError, refetch } = useCatFact();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome to Home Page {userName}!!!</h1>
      <h2>Cat Fact's for U &#128512;</h2>
      <h1 style={{ color: "blue" }}>{data}</h1>
      <button onClick={refetch}>Update Fact</button>
    </div>
  );
};

import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { AppContext } from "../App";
import { useContext } from "react";

export const Home = () => {
  const { userName } = useContext(AppContext);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then(
        (response) => response.data
      );
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome to Home Page {userName}!!!</h1>
      <h2>Cat Fact's for U &#128512;</h2>
      <h1 style={{ color: "blue" }}>{data?.fact}</h1>
      <button onClick={refetch}>Update Fact</button>
    </div>
  );
};

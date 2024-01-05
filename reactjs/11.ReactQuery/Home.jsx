import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
  const { data, isLoading, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then(
      (response) => response.data
    );
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1 style={{ color: "brown" }}>Welcome to Home Page!!!</h1>
      <h2>Cat Fact's for U &#128512;</h2>
      <h1 style={{ color: "red" }}>{data.fact}</h1>
      <button onClick={refetch}>Update Fact</button>
    </div>
  );
};

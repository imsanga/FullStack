import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useCatFact = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then(
        (response) => response.data.fact
      );
    },
  });

  return { data, isLoading, isError, refetch };
};

import { useState, useEffect } from "react";

export const TextDisplay = () => {
  const [textdisplay, setTextdisplay] = useState("");

  useEffect(() => {
    console.log("Component Mounted"); //initial Rendered function
    return () => console.log("Component UnMounted"); //CleanUp Function
  }, []);

  return (
    <div>
      <input onChange={(event) => setTextdisplay(event.target.value)} />
      <h1>{textdisplay}</h1>
    </div>
  );
};

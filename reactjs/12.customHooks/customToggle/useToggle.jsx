import { useState } from "react";

export const useToggle = (initial = false) => {
  const [content, setContent] = useState(initial);

  const toggle = () => {
    setContent((content) => !content);
  };

  return [content, toggle];
};

import { useEffect } from "react";

export const Title = ({ count }) => {
  useEffect(() => {
    document.title = `Tasks - ${count}`;
  }, [count]); 

  return null;
};

import { useContext } from "react";
import { NewContext } from "@/context";

export const Component = () => {
  const value = useContext(NewContext);

  console.log(value, "===");
  return (
    <div>
      
    </div>
  );
};

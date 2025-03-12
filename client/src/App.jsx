import { createContext, useState } from "react";
import Layout from "./Layout";
export const MyContext = createContext();
const App = () => {
  const [jobData, setJobData] = useState();
  return (
    <MyContext value={{jobData, setJobData}}>
      <Layout />
    </MyContext>
  );
};

export default App;

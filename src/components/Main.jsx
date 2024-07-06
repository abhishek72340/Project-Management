import Form from "./Form";
import SelectProject from "./SelectProject";
import { useProject } from "./../context";
const Main = () => {
  const { cancel } = useProject();

  return <>{cancel ? <SelectProject /> : <Form />}</>;
};

export default Main;

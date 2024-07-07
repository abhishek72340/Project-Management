import Form from "./Form";
import SelectProject from "./SelectProject";
import { useProject } from "./../context";
import ProjectDetails from "./ProjectDetails";
const Main = () => {
  const { cancel, detail, showDetail } = useProject();

  return (
    <>
      {!showDetail && <>{cancel ? <SelectProject /> : <Form />}</>}
      {showDetail && <ProjectDetails detail={detail} />}
    </>
  );
};

export default Main;

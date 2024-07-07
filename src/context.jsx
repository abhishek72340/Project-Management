import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const projectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [detail, setDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [cancel, setCancel] = useState(true);
  const [project, setProject] = useState([]);
  const [formData, setFormData] = useState({
    id: uuid(),
    title: "",
    description: "",
    date: "",
  });
  const cancelHandler = () => {
    setCancel(true);
    setFormData({ id: uuid(), title: "", description: "", date: "" });
  };
  const addHandler = () => {
    setCancel(false);
    setShowDetail(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setProject((prev) => [...prev, formData]);
    cancelHandler();
    setFormData({ id: uuid(), title: "", description: "", date: "" });
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createNewProjectHandler = () => {
    setCancel(false);
  };

  const projectDetailHandler = (id) => {
    const selectedProject = project.find((item) => item.id === id);
    setDetail(selectedProject);
    setShowDetail(true);
  };

  const deleteProjectHandler = (id) => {
    const filteredProject = project.filter((item) => item.id !== id);
    setProject(filteredProject);
    setDetail(null);
    setShowDetail(false);
  };
  return (
    <projectContext.Provider
      value={{
        submitHandler,
        changeHandler,
        formData,
        project,
        cancel,
        cancelHandler,
        addHandler,
        projectDetailHandler,
        createNewProjectHandler,
        detail,
        showDetail,
        deleteProjectHandler,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

const useProject = () => useContext(projectContext);
export { useProject, ProjectProvider };

import { createContext, useContext, useState } from "react";

const projectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [cancel, setCancel] = useState(true);
  const [project, setProject] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });
  const cancelHandler = () => {
    setCancel(true);
  };
  const addHandler = () => {
    setCancel(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setProject((prev) => [...prev, formData]);
    cancelHandler();
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const projectDetailHandler = (id) => {
    // setProject((prev) => prev.filter((data, index) => index !== id));
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
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

const useProject = () => useContext(projectContext);
export { useProject, ProjectProvider };

import { useState } from "react";
import { useProject } from "../context";
const ProjectDetails = ({ detail }) => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const { deleteProjectHandler } = useProject();
  const formatDate = (dateStr) => {
    if (!dateStr) {
      return "";
    }

    let date = new Date(dateStr);

    if (isNaN(date)) {
      return "";
    }
    date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const submitTaskHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTask((prev) => [...prev, input]);
      setInput("");
    }
  };

  const deleteTaskHandler = (index) => {
    const deleteTask = task.filter((_, ind) => ind !== index);
    setTask(deleteTask);
  };
  return (
    <>
      {detail ? (
        <div className="flex flex-col w-full m-12 gap-5">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{detail.title}</h2>
            <button onClick={() => deleteProjectHandler(detail.id)}>
              Delete
            </button>
          </div>
          <p className="text-gray-500">{formatDate(detail.date)}</p>
          <p>{detail.description}</p>
          <hr />
          <h2 className="text-xl font-bold">Tasks</h2>
          <form onSubmit={submitTaskHandler} className="flex gap-3">
            <input
              type="text"
              name="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-[#e1dfdd] outline-none border border-gray-500 "
            />
            <button type="submit">Add task</button>
          </form>
          {task.length ? (
            <div className="bg-[#f2f2f2] p-2 rounded ">
              {task.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between p-1">
                    {item}{" "}
                    <button
                      onClick={() => deleteTaskHandler(index)}
                      className="hover:text-red-500"
                    >
                      Clear
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default ProjectDetails;

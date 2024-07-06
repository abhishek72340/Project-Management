import { GoPlus } from "react-icons/go";
import { useProject } from "./../context";
const Sidebar = () => {
  const { project, addHandler, projectDetailHandler } = useProject();
  return (
    <div className="h-screen w-1/4 bg-[#100e0c] mt-6 rounded-tr-lg text-white ">
      <div className="flex flex-col justify-center items-center gap-10 pt-12">
        <h3 className="uppercase text-center text-xl font-bold tracking-wider">
          Your project
        </h3>
        <button
          onClick={addHandler}
          className="bg-[#322e2a] p-2 rounded flex items-center text-gray-300 mr-10 "
        >
          <GoPlus />
          Add Project
        </button>
        <div className="flex flex-col gap-3 ">
          {project?.map((data, index) => {
            return (
              <div
                key={index}
                className="text-[#5f5b57] cursor-pointer hover:bg-[#1c1816] w-40 p-1  hover:text-white"
                onClick={() => projectDetailHandler(index)}
              >
                {data.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

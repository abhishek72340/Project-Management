import { GiNotebook } from "react-icons/gi";

const SelectProject = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full  gap-5">
      <GiNotebook size={100} color="#382a10" />
      <h2 className="text-2xl font-bold text-[#5f5c5a]">No Project Selected</h2>
      <p className="text-[#949494]">
        Select a project or get started with a new one
      </p>
      <button className="bg-[#322e2a] text-gray-300 p-2 rounded">
        Create new project
      </button>
    </div>
  );
};

export default SelectProject;

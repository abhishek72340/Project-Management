import { useProject } from "../context";
const Form = () => {
  const { cancelHandler, submitHandler, changeHandler, formData } =
    useProject();
  return (
    <>
      <div className="flex justify-center items-center  w-full">
        <form onSubmit={submitHandler} className="w-2/3 flex flex-col gap-5">
          <div className="flex gap-5 justify-end">
            <button onClick={cancelHandler}>Cancel</button>
            <button
              type="submit"
              className="bg-[#1b1716] rounded text-white p-1 w-20"
            >
              Save
            </button>
          </div>

          <div>
            <label htmlFor="title" className="font-bold text-[#5f5b57]">
              {" "}
              TITLE
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={changeHandler}
              required
              className="border bg-[#e1dfdd] border-b-2 border-gray-500 outline-none w-full p-1"
            />
          </div>
          <div>
            <label htmlFor="description " className="font-bold text-[#5f5b57]">
              {" "}
              DESCRIPTION
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={changeHandler}
              required
              className="border title='description'   bg-[#e1dfdd] border-b-2 border-gray-500 outline-none w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="date" className="font-bold text-[#5f5b57]">
              DUE DATE
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={changeHandler}
              required
              className="border-bottom bg-[#e1dfdd] border-b-2 border-gray-500 outline-none w-full p-1"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

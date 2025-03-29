

export const CreateTask = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-md rounded-lg p-5 w-96">
            <h2 className="text-black text-2xl font-bold">To-Do List</h2>
            <form className="w-full flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Title"
                    className="border border-gray-300 rounded-md p-2 w-full"
                />
                <textarea
                    placeholder="Description"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    rows="4"
                ></textarea>
                <button className="bg-blue-500 text-white font-bold py-2 rounded w-full cursor-pointer transition-all hover:bg-blue-600">
                    Add Task
                </button>
            </form>
            <div className="flex justify-between w-full">
                <button className="border border-gray-300 cursor-pointer rounded-md px-4 py-2 transition-all hover:bg-gray-100">
                    All
                </button>
                <button className="border border-gray-300 cursor-pointer rounded-md px-4 py-2 transition-all hover:bg-gray-100">
                    Pending
                </button>
                <button className="border border-gray-300 cursor-pointer rounded-md px-4 py-2 transition-all hover:bg-gray-100">
                    Completed
                </button>
            </div>
        </div>
    )
}
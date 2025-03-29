

export const CreateTask = () => {
    return (
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-5 w-96">
            <h2 className="text-black text-2xl mb-4 font-bold">To-Do List</h2>
            <form className="w-full">
                <input
                    type="text"
                    placeholder="Title"
                    className="border border-gray-300 rounded-md p-2 w-full mb-4"
                />
                <textarea
                    placeholder="Description"
                    className="border border-gray-300 rounded-md p-2 w-full mb-4"
                    rows="4"
                ></textarea>
                <button className="bg-blue-500 text-white font-bold py-2 rounded w-full mb-4">
                    Add Task
                </button>
            </form>
            <div className="flex space-x-2">
                <button className="border border-gray-300 rounded-md px-4 py-2">
                    All
                </button>
                <button className="border border-gray-300 rounded-md px-4 py-2">
                    Pending
                </button>
                <button className="border border-gray-300 rounded-md px-4 py-2">
                    Completed
                </button>
            </div>
        </div>
    )
}
import { useState } from "react"


export const CreateTask = () => {
    const [task, setTask] = useState({ title: "", description: "" })
    const [tasks, setTasks] = useState([])

    const addTask = (e) => {
        e.target.reset()
        e.preventDefault()
        const currentTask = {
            id: Date.now(),
            title: task.title,
            description: task.description,
            completed: false
        }
        setTasks([...tasks, currentTask])
        setTask({ title: "", description: "" })
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-md rounded-lg p-5 w-96">
                <h2 className="text-black text-2xl font-bold">To-Do List</h2>
                <form onSubmit={addTask} className="w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Title"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required

                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        rows="4"
                        required

                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                    ></textarea>
                    <button
                        className="bg-blue-500 text-white font-bold py-2 rounded w-full cursor-pointer transition-all hover:bg-blue-600"
                    >Add Task</button>
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
            <ul className="flex flex-col items-center justify-center gap-4 bg-white w-96">
                {tasks.map(task => (
                    <li
                        className="w-full flex flex-col gap-4 p-5 shadow-md"
                        key={task.id}>

                        <div className="flex w-full gap-2 justify-start items-center">
                            <label className="text-gray-600 black text-md capitalize break-words" htmlFor="complete">Complete</label>
                            <input
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                                type="checkbox" name="complete" />
                        </div>
                        <div className="flex flex-col w-full gap-1 ">
                            <h2 className="text-black text-xl font-medium capitalize break-words">{task.title}</h2>
                            <p className="text-gray-600 black text-md capitalize break-words">{task.description}</p>
                        </div>
                        <button
                            className="bg-red-500 text-white font-bold py-2 rounded w-full cursor-pointer transition-all hover:bg-red-600"

                            onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
                        >Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
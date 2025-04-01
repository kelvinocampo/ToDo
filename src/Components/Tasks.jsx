import { Task } from "@/Components/Task"
import { useContext } from "react"
import { TaskContext } from '@/Context/Context.jsx'

export const Tasks = () => {

    const { tasks } = useContext(TaskContext)

    return (
        <ul className="flex flex-col items-center justify-center gap-4 bg-white w-96">
            {tasks.map((task) => <Task task={task} />)}
        </ul>
    )
}

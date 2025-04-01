import { Task } from "@/Components/Task"
import { TaskContext } from '@/Context/Context.jsx'
import { useContext } from "react";

export const Tasks = () => {
    const { tasks, filter } = useContext(TaskContext);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Active') return !task.completed;
        if (filter === 'Completed') return task.completed;
        return true;
    });

    return (
        <ul className="flex flex-col items-center justify-center gap-4 bg-white w-96">
            {filteredTasks.map((task) => <Task task={task} />)}
        </ul>
    );
};
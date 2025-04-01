import { Button } from "@/Components/Button";
import { TaskContext } from '@/Context/Context.jsx';
import { useContext, useState } from "react";

export const Form = () => {
    const { tasks, setTasks } = useContext(TaskContext);
    const [task, setTask] = useState({ title: "", description: "" }); // Cambia aquí

    const addTask = (e) => {
        e.preventDefault();

        const currentTask = {
            id: Date.now(),
            title: task.title,
            description: task.description,
            completed: false,
        };

        setTasks([...tasks, currentTask]); // Agregar la nueva tarea
        setTask({ title: "", description: "" }); // Restablecer el estado de la tarea
    };

    return (
        <form onSubmit={addTask} className="w-full flex flex-col gap-4">
            <input
                type="text"
                placeholder="Title"
                className="border border-gray-300 rounded-md p-2 w-full"
                required

                value={task.title} // Controlar el valor del input
                onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
            <textarea
                placeholder="Description"
                className="border border-gray-300 rounded-md p-2 w-full"
                rows="4"
                required

                value={task.description} // Controlar el valor del textarea
                onChange={(e) => setTask({ ...task, description: e.target.value })}
            ></textarea>
            <Button className="hover:bg-blue-600 bg-blue-500">Add Task</Button>
        </form>
    );
};
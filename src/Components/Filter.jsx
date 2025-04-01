import { TaskContext } from '@/Context/Context.jsx';
import { useContext } from "react";

export const Filter = ({ children }) => {
    const { setFilter } = useContext(TaskContext);

    return (
        <button onClick={() => setFilter(children)} className="border border-gray-300 cursor-pointer rounded-md px-4 py-2 transition-all hover:bg-gray-100">
            {children}
        </button>
    )
}

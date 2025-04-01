// TaskContext.js
import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");

    return (
        <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter }}>
            {children}
        </TaskContext.Provider>
    );
};
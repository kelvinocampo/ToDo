import { Tasks } from "@/Components/Tasks"
import { Form } from "@/Components/Form"
import { Filters } from "@/Components/Filters"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-md rounded-lg p-5 w-96">
        <h2 className="text-black text-2xl font-bold">To-Do List</h2>
        <Form />
        <Filters />
      </div>
      <Tasks />
    </>
  )
}

export default App

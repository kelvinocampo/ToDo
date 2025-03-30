import { Button } from "@/Components/Button"

export const Form = () => {
    return (
        <form className="w-full flex flex-col gap-4">
            <input
                type="text"
                placeholder="Title"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
            />
            <textarea
                placeholder="Description"
                className="border border-gray-300 rounded-md p-2 w-full"
                rows="4"
                required
            ></textarea>
            <Button className="hover:bg-blue-600 bg-blue-500">Add Task</Button>
        </form>
    )
}

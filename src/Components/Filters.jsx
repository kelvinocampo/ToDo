import { Filter } from "@/Components/Filter"

export const Filters = () => {
    return (
        <div className="flex justify-between w-full">
            <Filter>All</Filter>
            <Filter>Active</Filter>
            <Filter>Completed</Filter>
        </div>
    )
}

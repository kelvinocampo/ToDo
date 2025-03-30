

export const Button = ({ children, className }) => {
    return (
        <button
            className={"text-white font-bold py-2 rounded w-full cursor-pointer transition-all " + className}
        >{children}</button>
    )
}

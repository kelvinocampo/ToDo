

export const Button = ({ children, className, onClick = null }) => {
    return (
        <button
            onClick={onClick}
            className={"text-white font-bold py-2 rounded w-full cursor-pointer transition-all " + className}
        >{children}</button>
    )
}

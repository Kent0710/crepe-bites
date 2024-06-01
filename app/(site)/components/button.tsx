'use client';

interface ButtonProps {
    text : string;
    icon? : any;
    type : "submit" | "reset" | "button" | undefined;
    className? : string;
}

const Button : React.FC<ButtonProps>  = ({
    text,
    icon : Icon,
    type,
    className
}) => {
    return (
        <button
            type={type}
            className={`${className} flex w-full justify-center items-center font-semibold gap-3 bg-yellow-400 text-navy  px-10 py-2`}
        >
            <Icon className="w-4" />
            {text}
        </button>
    )
};

export default Button;
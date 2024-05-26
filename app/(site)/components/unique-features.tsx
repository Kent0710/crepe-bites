interface UniqueFeaturesProps {
    numberLabel : string;
    title : string;
    description : string;
    icon : any;
}
const UniqueFeatures : React.FC<UniqueFeaturesProps> = ({
    numberLabel,
    title,
    description,
    icon : Icon
}) => {
    return (
        <li className="w-[15rem] bg-gradient-to-r from-red-500 to-orange-500 shadow-lg p-5  flex items-center flex-col gap-5 rounded-md text-white">
            <p className="text-2xl font-light opacity-70">
                {numberLabel}
            </p>
            <Icon size={100} />
            <div className="flex flex-col items-center">
                <p className="font-semibold ">
                    {title}
                </p>
                <p className="opacity-80 text-center">
                    {description}
                </p>
            </div>
        </li>
    )
};

export default UniqueFeatures;
interface SectionContainerProps {
    title : string;
    description : string;
    children : React.ReactNode;
};

const SectionContainer : React.FC<SectionContainerProps> = ({
    title,
    description,
    children
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-xl">
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
            
            {children}
        </div>
    )
};

export default SectionContainer
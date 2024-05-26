import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface MemberContainerProps {
    src : string | StaticImport;
    alt : string;
    email : string;
    name : string;
    position : string;
}

const MemberContainer : React.FC<MemberContainerProps> = ({
    src,
    alt,
    email,
    name,
    position
}) => {
    return (
        <li className="flex flex-col items-center gap-6">
            <Image 
                src={src}
                alt={alt}
                className="rounded-full w-[10rem]"
            />
            <div className="flex flex-col items-center">
                <small>
                    {email}
                </small>
                <p className="font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                    {name}
                </p>
                <p className="opacity-70">
                    {position}
                </p>
            </div>
        </li>
    )
};

export default MemberContainer;
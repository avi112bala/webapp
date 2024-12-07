import Image, { StaticImageData } from "next/image";

interface SolutionLogosProps {
    logos: string[] | StaticImageData[];
}

const SolutionLogosGrid: React.FC<SolutionLogosProps> = ({ logos }) => {
    return (
        <div className="flex flex-wrap gap-4 md:gap-8">
            {logos?.map((logo, index) => (
                <Image
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    height={35}
                    width={35}
                    className="object-contain object-center"
                />
            ))}
        </div>
    );
};
export default SolutionLogosGrid


interface FeatureCardProps {
    title: string;
    description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <article className="flex flex-col items-center w-full">
            <h3 className="font-[Montserrat] text-2xl font-semibold leading-tight text-gray-900 text-center">
                {title}
            </h3>
            {/* <p className="font-[Source_Sans_3] font-normal mt-4 text-base tracking-normal leading-6 text-slate-600 text-center">
                {description}
            </p> */}
            <p className="font-[Source_Sans_3] font-normal text-base leading-[1.5] tracking-[0.01em] text-center text-[#475467] mt-4">
                {description}
            </p>

        </article>
    );
};
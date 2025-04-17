

interface FeatureCardProps {
    title: string;
    description: string;
}


export default function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <article className="flex flex-col items-start w-full">
            <h3 className="text-2xl font-semibold leading-tight text-gray-900">
                {title}
            </h3>
            <p className="mt-4 text-base tracking-normal leading-6 text-slate-600">
                {description}
            </p>
        </article>
    );
};


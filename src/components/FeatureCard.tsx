

interface FeatureCardProps {
    title: string;
    description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <article className="flex flex-col items-center w-full">
            <h3 className="text-2xl font-semibold leading-tight text-gray-900 text-center">
                {title}
            </h3>
            <p className="mt-4 text-base tracking-normal leading-6 text-slate-600 text-center">
                {description}
            </p>
        </article>
    );
};
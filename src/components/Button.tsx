interface ButtonProps {
    text: string;
}

export default function Button({ text }: ButtonProps) {
    return (
        <button className="py-[14px] px-[28px]  bg-[#3641F5] hover:bg-purple-800 text-white rounded-md font-medium shadow-md transition">
            {text}
        </button>
    )
}

export default function Button ({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <button className="rounded-full bg-orange-500 text-white px-2 py-2 hover:bg-orange-600">
            {children}
        </button>
    );
}
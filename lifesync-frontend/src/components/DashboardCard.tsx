
type DashboardCardProps = {
    title: string;
    value: number;
};

export default function DashboardCard({
    title,
    value,
}: DashboardCardProps) {
    return (
        <div className="rounded-xl bg-slate-800 p-4 shadow">
            <h2 className={"text-sm text-slate-400"}>{title}</h2>
            <p className={"mt-2 text-3xl font-bold"}>{value}</p>
        </div>
    );
}
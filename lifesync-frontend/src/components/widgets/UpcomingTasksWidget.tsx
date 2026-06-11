

export default function UpcomingTasksWidget() {
    const tasks = [
        "Review today’s schedule",
        "Check unpaid payments",
        "Plan tomorrow",
    ];

    return (
        <section className="rounded-2xl bg-slate-800/80 p-5 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-white">Upcoming Tasks</h2>

            <div className="space-y-3">
                {tasks.map((task) => (
                    <div
                        key={task}
                        className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-3 text-sm text-slate-300"
                    >
                        <span className="h-2 w-2 rounded-full bg-violet-400" />
                        {task}
                    </div>
                ))}
            </div>
        </section>
    );
}
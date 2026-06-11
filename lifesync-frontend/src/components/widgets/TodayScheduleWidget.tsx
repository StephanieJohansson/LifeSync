export default function TodayScheduleWidget() {
    const events = [
        { time: "09:00", title: "Morning planning" },
        { time: "13:00", title: "Code session" },
        { time: "18:00", title: "Family time" },
    ];

    return (
        <section className="rounded-2xl bg-slate-800/80 p-5 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-white">Today Schedule</h2>

            <div className="space-y-3">
                {events.map((event) => (
                    <div
                        key={event.time}
                        className="flex items-center justify-between rounded-xl bg-slate-900/60 p-3 text-sm"
                    >
                        <span className="text-slate-400">{event.time}</span>
                        <span className="text-white">{event.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
import { CloudMoon } from "lucide-react";

export default function WeatherWidget() {
    return (
        <section className="rounded-2xl bg-slate-800/80 p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Weather</h2>
                <CloudMoon className="text-violet-300" size={24} />
            </div>

            <p className="text-4xl font-bold text-white">16°C</p>
            <p className="mt-2 text-sm text-slate-400">Cloudy evening</p>
            <p className="mt-4 text-sm text-violet-300">
                Reminder: bring a jacket tomorrow.
            </p>
        </section>
    );
}
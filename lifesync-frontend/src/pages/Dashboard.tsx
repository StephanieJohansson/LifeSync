import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import { getDashboardSummary } from "../services/DashboardApi";
import type { DashboardSummary } from "../types/DashboardSummary";

export default function Dashboard() {
    const [dashboard, setDashboard] = useState<DashboardSummary | null>(null);

    useEffect(() => {
        getDashboardSummary()
            .then((data) => setDashboard(data))
            .catch((error) => console.error(error));
    }, []);

    if (!dashboard) {
        return (
            <div className="min-h-screen bg-slate-900 text-white p-6">
                <h1 className="text-3xl font-bold mb-4">LifeSync Dashboard</h1>
                <p>Laddar...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">LifeSync Dashboard</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <DashboardCard
                    title="Pending Todos"
                    value={dashboard.pendingTodos}
                />

                <DashboardCard
                    title="Unread Notifications"
                    value={dashboard.unreadNotifications}
                />

                <DashboardCard
                    title="Unpaid Payments"
                    value={dashboard.unpaidPayments}
                />

                <DashboardCard
                    title="Packages In Transit"
                    value={dashboard.packagesInTransit}
                />

                <DashboardCard
                    title="Upcoming Reminders"
                    value={dashboard.upcomingReminders}
                />
            </div>
        </div>
    );
}
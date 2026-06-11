import type {DashboardSummary} from "../types/DashboardSummary";

export async function getDashboardSummary(): Promise<DashboardSummary> {
    const response = await fetch(
        "http://localhost:8080/api/dashboard/summary"
    );

    return response.json();
}
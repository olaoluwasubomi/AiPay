import { apiGet } from "@/lib/api";

export const listSales = (range = "this_week", page = 1, limit = 50) =>
  apiGet(`/merchant/sales?range=${encodeURIComponent(range)}&page=${page}&limit=${limit}`);

export const salesCsvUrl = (range = "this_week") =>
  `/merchant/sales/report.csv?range=${encodeURIComponent(range)}`;

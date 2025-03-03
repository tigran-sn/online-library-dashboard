export interface Response<T = unknown> {
  data: T[];
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  [key: string]: unknown;
}

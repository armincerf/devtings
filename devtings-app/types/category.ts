import { Review } from "./review";

export type Category = {
  category_id: string;
  category_name: string;
  benchmark_version: string;
  reviews: Review[];
};

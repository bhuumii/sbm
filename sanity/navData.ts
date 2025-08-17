import { client } from "./client";

export interface NavCategory {
  _id: string;
  name: string;
}

export async function getNavData(): Promise<NavCategory[]> {
  const query = `*[_type == "productCategory"]{
    _id,
    name,
  } | order(name asc)`;
  const data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
  return data;
}

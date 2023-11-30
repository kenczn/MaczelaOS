import { sql } from "@vercel/postgres";

export async function getPizzasByCategory(category) {
  if (category) {
    const query = `SELECT * FROM pizza WHERE category = $1;`;
    const data = [category];

    const { rows } = await sql.query(query, data);

    if (!rows.length)
      return console.log(`No exiting pizzas by category of ${category}`);

    return rows;
  }
}

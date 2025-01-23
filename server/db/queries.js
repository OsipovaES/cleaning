import { query } from "./pool";

const getAllRequests = async () => {
  const result = await query("SELECT * FROM requests ORDER BY created_at DESC");
  return result.rows;
};

const createRequest = async (data) => {
  const { user_id, title, address, contact, service, payment_type, status } =
    data;
  const result = await query(
    `INSERT INTO requests (user_id, title, address, contact, service, payment_type, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [user_id, title, address, contact, service, payment_type, status]
  );
  return result.rows[0];
};

export default { getAllRequests, createRequest };

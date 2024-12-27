import { db } from '../lib/db'

export async function findUserByEmail(email) {
  const user = await db.user.findFirst({ where: { email: email } })
  return user;
}
export async function findUserById(id) {
  const user = await db.user.findFirst({ where: { email: id } });
  return user;
}
const ADMIN_IDS = import.meta.env.ADMIN_USERS_IDS.split(',')

export function isAdmin(id: string | undefined) {
  if (!id) return false
  return ADMIN_IDS.includes(id)
}

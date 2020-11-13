export function token(username: string, password: string): string {
  return Utilities.base64Encode(`${username}:${password}`);
}

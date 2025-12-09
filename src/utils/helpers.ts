// converts API format 9.36 → 9 min 22 sec
export function convertApiDuration(apiValue: number): string {
  const minutes = Math.floor(apiValue);
  const seconds = Math.round((apiValue - minutes) * 60);
  return `${minutes}:${seconds}`;
}
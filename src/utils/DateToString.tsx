export function ApiDateToPacificString(date: Date | undefined): string {
  if (!date) return "";
  const utcDate = new Date(date);
  const pacificTimeOffset = 7 * 360000;
  const realDate = new Date(utcDate.getTime() - pacificTimeOffset);
  return realDate.getUTCMonth() + "-" + realDate.getUTCDate() + "-" + realDate.getUTCFullYear();
}

export function DateToString(date: Date | undefined): string {
  if (!date) return "";
  const utcDate = new Date(date);
  return utcDate.getUTCMonth() + "-" + utcDate.getUTCDate() + "-" + utcDate.getUTCFullYear();
}

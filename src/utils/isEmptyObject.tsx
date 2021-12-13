export function isEmptyObject(obj: any) {
  if (Object.keys(obj).length == 0) {
    return false;
  }
  return true;
}

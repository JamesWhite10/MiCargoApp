export function getZipCodeCountry(zipCode: string | undefined): "CA" | "US" | null {
  if (zipCode) {
    zipCode = zipCode.replace("-", "");
    zipCode = zipCode.replace(" ", "");

    if (zipCode.length === 5) {
      return "US";
    }
    if (zipCode.length === 6 && !Number.isInteger(zipCode)) {
      return "CA";
    }
    if (zipCode.length === 9) {
      return "US";
    }
  }

  return null;
}

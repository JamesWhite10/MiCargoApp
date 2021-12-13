export function parseErrorsResponse(response: any): string {
  let errorStr = "";
  try {
    const errorObj = JSON.parse(response.errors);
    const arr = Object.keys(errorObj);
    for (let i = 0; i < arr.length - 1; i++) {
      let error: string = errorObj[arr[i]];
      if (error.charAt(error.length - 1) !== ".") {
        error += ".";
      }
      errorStr += error + " ";
    }
    errorStr += errorObj[arr[arr.length - 1]];
  } catch {
    if (typeof response === "string") {
      errorStr = response;
    }
    if (typeof response.errors === "string") {
      errorStr = response.errors;
    }
  }

  if (!errorStr) errorStr = "Unknown error";
  return errorStr;
}

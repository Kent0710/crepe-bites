import { bytesToInteger } from ".././node_modules/.pnpm/oslo@1.2.0/node_modules/oslo/dist/bytes";

export function generateRandomInteger(max) {
  if (max < 0 || !Number.isInteger(max)) {
    throw new Error(
      "Argument 'max' must be an integer greater than or equal to 0"
    );
  }
  const bitLength = (max - 1).toString(2).length;
  const shift = bitLength % 8;
  const bytes = new Uint8Array(Math.ceil(bitLength / 8));
  crypto.getRandomValues(bytes);
  // This zeroes bits that can be ignored to increase the chance `result` < `max`.
  // For example, if `max` can be represented with 10 bits, the leading 6 bits of the random 16 bits (2 bytes) can be ignored.
  if (shift !== 0) {
    bytes[0] &= (1 << shift) - 1;
  }
  let result = bytesToInteger(bytes);
  while (result >= max) {
    crypto.getRandomValues(bytes);
    if (shift !== 0) {
      bytes[0] &= (1 << shift) - 1;
    }
    result = bytesToInteger(bytes);
  }
  return result;
}
export function generateRandomString(length, alphabet) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphabet[generateRandomInteger(alphabet.length)];
  }
  return result;
}
export function alphabet(...patterns) {
  const patternSet = new Set(patterns);
  let result = "";
  for (const pattern of patternSet) {
    if (pattern === "a-z") {
      result += "abcdefghijklmnopqrstuvwxyz";
    } else if (pattern === "A-Z") {
      result += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (pattern === "0-9") {
      result += "0123456789";
    } else {
      result += pattern;
    }
  }
  return result;
}

export function convertToReadableDate(isoDateString) {
  // Parse the ISO-8601 string into a Date object
  const date = new Date(isoDateString);

  // Options for formatting the date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  // Format the date to a readable string
  const readableDate = date.toLocaleDateString("en-ph", options);

  return readableDate;
}

export function checkIf15MinutesHavePassed(codeExpiration: Date) {
  const datenow = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = datenow - new Date(codeExpiration);

  // Convert the difference from milliseconds to minutes
  const differenceInMinutes = timeDifference / (1000 * 60);

  // Check if 15 minutes have passed
  if (differenceInMinutes >= 15) {
    console.log("15 minutes have passed since the code expiration.");
    return false;
  } else {
    console.log("15 minutes have not yet passed since the code expiration.");
    // Handle the case where 15 minutes have not yet passed
    return true;
  }
}

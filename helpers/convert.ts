export default function addCommaToNumber(num: number): string {
  const numString = num.toString();
  if (numString.length !== 4) {
    return numString;
  }
  const firstDigit = numString.substring(0, 1);
  const remainingDigits = numString.substring(1);
  const formattedNum = `${firstDigit},${remainingDigits}`;
  return formattedNum;
}

function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) {
    return false;
  }

  const counts = {};

  for (let digit of str1) {
    counts[digit] = (counts[digit] || 0) + 1;
  }

  for (let digit of str2) {
    if (!counts[digit]) {
      return false;
    }

    counts[digit]--;
  }

  return true;
}
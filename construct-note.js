function constructNote(message, letters) {
  const letterCounts = {};

  for (let letter of letters) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  for (let char of message) {
    if (!letterCounts[char]) {
      return false;
    }

    letterCounts[char]--;
  }

  return true;
}


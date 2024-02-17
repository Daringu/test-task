const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hasCharacterAppearingTwice(line) {
  const charCount = new Map();

  for (let char of line.trim()) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  for (let count of charCount.values()) {
    if (count === 2) {
      return true;
    }
  }

  return false;
}

rl.on("line", line => {
  if (hasCharacterAppearingTwice(line)) {
    console.log("output:", line);
  }
});

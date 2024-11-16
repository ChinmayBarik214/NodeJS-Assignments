function findSubstring(buffer, sub) {
  const bufferString = buffer.toString();
  // sequentially take sub.length character substrings from bufferString and compare with sub
  for (let i = 0; i <= bufferString.length - sub.length; i++) {
    let j;
    
    for (j = 0; j < sub.length; j++) {
      if (bufferString[i + j] !== sub[j]) {
        break;
      }
    }

    if (j === sub.length) {  // if taken substring matches with sub exactly
      // substring found at index i
      return i;
    }
  }
  // substring not found
  return -1;
}

const buffer = Buffer.from("Our exams are coming and we are preparing for it");
console.log(findSubstring(buffer, "coming"));

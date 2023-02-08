const validAnagram = (str1, str2) => {
  // Create empty objects to store character frequencies
  let charFrequency1 = {};
  let charFrequency2 = {};

  // Convert both strings to lower case and remove non-letters
  // The replace method is searching each string for non-letters, and replacing them with an empty string
  str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  str2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  // Iterate through each string, and add the frequency of each character
  for (let char of str1) {
    charFrequency1[char] = (charFrequency1[char] || 0) + 1;
  }
  for (let char of str2) {
    charFrequency2[char] = (charFrequency2[char] || 0) + 1;
  }

  // Compare objects for identical keys and values
  return (
    Object.keys(charFrequency1).every(
      (key) => charFrequency1[key] === charFrequency2[key]
    ) &&
    Object.keys(charFrequency2).every(
      (key) => charFrequency1[key] === charFrequency2[key]
    )
  );
};

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

console.log(validAnagram("rail safety", "fairy tales")); // true
console.log(validAnagram("RAIL! SAFETY!", "fairy tales")); // true
console.log(validAnagram("Hi there", "Bye there")); // false
function canConstruct(ransomNote: string, magazine: string): boolean {
  return magazine.includes(ransomNote) || magazine.includes(ransomNote.split('').reverse().join(''))
};

const ransomNote = "aab", magazine = "baa"

console.log(canConstruct(ransomNote, magazine))
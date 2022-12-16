export function getPhotoWord(numberOfImages: number) {
  let numberOfImagesWord;

  if (numberOfImages < 5) {
    numberOfImagesWord = "fotky";
  } else {
    numberOfImagesWord = "fotek";
  }

  return numberOfImagesWord;
}

const wordsPerMinute = 225;

export function getReadingTimeEstimateUnit(readingTimeInput: number) {
  let readingTimeUnit;

  if (readingTimeInput === 1) {
    readingTimeUnit = "minutu";
  } else if (readingTimeInput < 5) {
    readingTimeUnit = "minuty";
  } else {
    readingTimeUnit = "minut";
  }

  return readingTimeUnit;
}

export function readingTime(text: string) {
  return Math.ceil(wordCounter(text) / wordsPerMinute);
}

function wordCounter(input: string) {
  const text = input.split(/\s+/);
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && isWord(text[i])) {
      wordCount++;
    }
  }
  return wordCount;
}

function isWord(str: string) {
  let alphaNumericFound = false;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}

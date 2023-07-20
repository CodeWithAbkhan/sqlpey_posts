// import readingTime from "reading-time"

const getReadingTime = (text: string) => {
  // return readingTime(text).text;
  const wordsPerMinute = 200; // Adjust this value based on your reading speed

  const wordCount = text.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTimeMinutes} minute${readingTimeMinutes !== 1 ? 's' : ''} read`;
};

export default getReadingTime;

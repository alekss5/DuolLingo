export function formatTimeFromMStoMin(elapsedTime) {
  // Calculate total seconds
  const totalSeconds = Math.floor(elapsedTime / 1000);
  
  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return { minutes, seconds };
}
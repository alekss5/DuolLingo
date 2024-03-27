import { Audio } from 'expo-av';
import SoundSource from './SoundSources';

export function formatTimeFromMStoMin(elapsedTime) {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return { minutes, seconds };
}

export async function playSound(word) {
  const sound = new Audio.Sound();

  try {
    if(word !== undefined&& word !== null){
      await sound.loadAsync(SoundSource.getSoundSource(word));
      await sound.setVolumeAsync(1)
      await sound.playAsync()
    }
    
  } catch (error) {
    console.error('Failed to play the sound', error);
  }
}

export const calculateDaysSince = (publishedDate) => {
  const oneDay = 24 * 60 * 60 * 1000; 
  const publishedTime = new Date(publishedDate).getTime();
  const currentTime = new Date().getTime();

  const diffDays = Math.round(Math.abs((currentTime - publishedTime) / oneDay));

  return diffDays;
};

export const convertDateFormat = (dateString) =>{
  const dateObject = new Date(dateString);

  // Get year, month, and date components
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Month is zero-based, so we add 1
  const date = dateObject.getDate();

  // Format the date in "YYYY-MM-DD" format
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;

  return formattedDate;
}

import { Share, Alert } from 'react-native';

export const shareContent = async (message) => {
  try {
    const result = await Share.share({
      message: message,
      url:"https://www.duolingo.com"

    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        console.log(`Shared via ${result.activityType}`);
      } else {
        // shared
        console.log('Shared');
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      console.log('Share dismissed');
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};


// import { setFeed } from './actions'; // Assuming you have an action creator for setting feed data
// import realm from './Realm'; // Import your Realm instance
// import Feed from './FeedSchema'; // Import the Feed schema

// // Action creator function to update feed data
// const updateFeedData = (newFeedData) => {
//   return async (dispatch) => {
//     try {
//       // Dispatch action to update Redux store
//       dispatch(setFeed(newFeedData));

//       // Update Realm store
//       await realm.write(() => {
//         // Clear existing feed data in Realm
//         const existingFeed = realm.objects('Feed');
//         realm.delete(existingFeed);

//         // Add new feed data to Realm
//         newFeedData.forEach(feedItem => {
//           realm.create('Feed', feedItem);
//         });
//       });

//       console.log('Feed data updated successfully.');
//     } catch (error) {
//       console.error('Error updating feed data:', error);
//     }
//   };
// };

// export { updateFeedData };
// services/RealmService.js
// import {BSON} from 'realm';
// import FeedSchema from './FeedSchema'; // Assuming you have a Feed schema defined
// import { useRealm } from '@realm/react';

// const realm = useRealm();

// const realmService = {
    
//   async openRealm() {
//     return await Realm.open({
//       path: 'realm',
//       schema: [FeedSchema],
//     });
//   },

//   async insertFeed(feed) {
//     const realm = await this.openRealm();
//     realm.write(() => {
 
//         realm.create(FeedSchema, {
//           imgSrc: feed.imgSrc,
//           feedType: feed.feedType,
//           publishedSinse: feed.publishedSinse,
//           mainText: feed.mainText,
//           secondaryText: feed.secondaryText,
//           url: feed.url,
//         });
    
//     });
//     realm.close();
//   },
// };

// export default realmService;

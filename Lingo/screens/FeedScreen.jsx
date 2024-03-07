import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import FeedElement from '../components/UI/FeedElement';
import { useSelector } from 'react-redux';
import { selectFeed } from '../redux/feedReducer';

export default function FeedScreen() {
  const feedData = useSelector(selectFeed);

  return (
    <ScrollView>
      {feedData.map((feedItem, index) => (
        <FeedElement
          key={index}
          imgSrc={feedItem.imgSrc}
          feedType={feedItem.feedType}
          publishedSinse={feedItem.publishedSinse}
          mainText={feedItem.mainText}
          secondaryText={feedItem.secondaryText}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

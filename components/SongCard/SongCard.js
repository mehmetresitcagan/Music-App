import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>Sold Out</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'black',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  artist: {
    color: 'black',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  soldout_container: {
    color: 'black',
    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
    fontSize: 13,
    fontWeight: 'bold',
  },
  content_container: {
    flexDirection: 'row',
  },
});

export default SongCard;

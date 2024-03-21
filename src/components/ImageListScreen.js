// ImageListScreen.js
import React, {useEffect} from 'react';
import {View, Image, Button, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setImages} from './actions'; // Path to your actions file

const ImageListScreen = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images);

  useEffect(() => {
    // Fetch images on component mount
    // dispatch(fetchImages());
  }, []);

  const loadMoreImages = () => {
    // Dispatch action to load more images
  };

  return (
    <ScrollView>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{uri: image.url}}
          style={{width: '100%', aspectRatio: image.aspectRatio}}
        />
      ))}
      <Button title="Click here to load more" onPress={loadMoreImages} />
    </ScrollView>
  );
};

export default ImageListScreen;

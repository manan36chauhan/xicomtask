import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('function called');
    const url = 'https://picsum.photos/v2/list?page=1&limit=5'; // Removed space in URL
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  };

  const loadMoreImages = () => {
    console.log(images.length);
    console.log(JSON.stringify(images)); // Convert images array to JSON string
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Images</Text>
      <ScrollView>
        {images.map((image, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ImageDetailsScreen', {image})}>
            <Image
              key={index}
              source={{uri: image.download_url}}
              style={{width: '100%', aspectRatio: image.width / image.height}}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Corrected the onPress event */}
      <Button title="Load more" onPress={loadMoreImages()} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

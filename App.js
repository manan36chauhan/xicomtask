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
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const url = 'https://picsum.photos/v2/list?page=1&limit=5'; // Removed space in URL
    const url = 'https://dev3.xicom.us/xttest/getdata.php';
    try {
      let formdata = new FormData();
      formdata.append('user_id', '108');
      formdata.append('offset', offset);
      formdata.append('type', 'popular');

      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: formdata,
      };
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          // console.log('data.images------------', data.images);
          let img = [];
          if (images.length == 0) {
            img = data.images;
          } else {
            img = images;
            data.images.forEach(element => {
            img.push(element);
              
            });
          }
          console.log('img----------------', img);
          setImages(img);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const loadMoreImages = () => {
    console.log('offset------------', offset);
    setOffset(offset + 1);
    fetchData();
    // console.log(images.length);
    // console.log(JSON.stringify(images)); // Convert images array to JSON string
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Images</Text>

      <ScrollView>
        {images.map((image, index) => (
          <TouchableOpacity
          // onPress={() => navigation.navigate('ImageDetailsScreen', { image })}
          >
            <Image
              source={{
                uri: image.xt_image,
              }}
              style={{width: 350, height: 350}}
            />
          </TouchableOpacity>
          // <Text>{image.id}</Text>
        ))}
      </ScrollView>

      {/* Corrected the onPress event */}
      <Button title="Load more" onPress={() => loadMoreImages()} />
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
  img_list: {
    width: '200px',
    height: '200px',
  },
});

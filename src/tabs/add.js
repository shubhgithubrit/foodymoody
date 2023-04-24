import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { db } from '../db/config';
const Add = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [disprice, setDisprice] = useState('');
  const [discription, setDiscription] = useState('');
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openGallery();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'mixed'});
    if (result.didCancel) {
    } else {
      console.log(result);
      setImage(result);
    }
  };
  const uploadImage = async () => {
    const response1 = await fetch(image.assets[0].uri);
    console.log('response1', response1);
    const blob = await response1.blob();
    console.log('blob', blob);
    const filename = image.assets[0].uri.substring(image.assets[0].uri);
    console.log('filename', filename);
    const ref = storage().ref().child(filename);
    console.log('ref', ref);
    const snapshot = await ref.put(blob);
    console.log('snap', snapshot);
    const url = await ref.getDownloadURL().catch(err => {
      console.log(err);
    });
    console.log(url);
    upLoadItem(url);
  };
  const upLoadItem = url => {
    
    db.collection('items')
      .add({
        name: name,
        price: price,
        disprice: disprice,
        discription: discription,
        imgUrl: url + '',
      })
      .then(() => {
        console.log('User added!');
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headers}>
          <Text style={styles.text}>Add Items</Text>
        </View>
        {image != null ? (
          <Image source={{uri: image.assets[0].uri}} style={styles.imgStyle} />
        ) : null}
        <View>
          <TextInput
            placeholder="Enter Product Name"
            style={styles.inputText}
            value={name}
            onChangeText={txt => setName(txt)}
          />
          <TextInput
            placeholder="Enter Product Price"
            style={styles.inputText}
            value={price}
            keyboardType="numeric"
            onChangeText={txt => setPrice(txt)}
          />
          <TextInput
            placeholder="Enter Product Discount Price"
            style={styles.inputText}
            keyboardType="numeric"
            value={disprice}
            onChangeText={txt => setDisprice(txt)}
          />
          <TextInput
            placeholder="Enter Product Description"
            style={styles.inputText}
            value={discription}
            onChangeText={txt => setDiscription(txt)}
          />
          <TouchableOpacity
            style={styles.imgPick}
            onPress={() => {
              requestCameraPermission();
            }}>
            <Text
              style={{
                fontSize: 17,
                alignSelf: 'center',
                marginTop: 10,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Upload Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              uploadImage();
            }}>
            <Text
              style={{
                fontSize: 17,
                alignSelf: 'center',
                marginTop: 10,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headers: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignSelf: 'center',
    marginTop: 10,
    color: 'black',
  },
  inputText: {
    color: 'black',
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    marginTop: 25,
    paddingLeft: 20,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  OR: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    marginTop: 30,
  },
  imgPick: {
    height: 50,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: '#95C8F1',
    marginBottom: 70,
  },
  imgStyle: {
    height: 200,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
});

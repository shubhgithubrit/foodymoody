import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {db} from '../db/config';
import { useNavigation } from '@react-navigation/native';

const Items = () => {
    const navigation=useNavigation();
  const [items, setItem] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const deleteItem=(id)=>{
db.collection('items')
.doc(id)
.delete()
.then(() => {
  console.log('User deleted!');
  getData();
});
  }
  const getData = () => {
    db.collection('items')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        let tempdata = [];
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          tempdata.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
        setItem(tempdata);
      });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item, index}) => {
          return (
            <View style={styles.itemView}>
              <Image source={{uri: item.data.imgUrl}} style={styles.imgView} />
              <View style={styles.txtView}>
                <Text style={styles.nameView}>{item.data.name}</Text>
                <Text style={styles.descView}>{item.data.discription}</Text>
                <View style={styles.priceView}>
                  <Text style={styles.pricetxt2}>
                    {`$` + item.data.disprice}
                  </Text>
                  <Text style={styles.pricetxt}>{item.data.price}</Text>
                </View>
              </View>
              <View style={{margin: 10}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Edit',{
                        id:item.id,
                        data:item.data
                    })
                }}>
                  <Image
                    source={require('../images/edit.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    deleteItem(item.id)
                }}>
                  <Image
                    source={require('../images/delete.png')}
                    style={[styles.icon, {marginTop: 20}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    height: 100,
    backgroundColor: '#fff',
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 15,
    flexDirection: 'row',
  },
  imgView: {
    height: 90,
    width: '30%',
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 10,
  },
  txtView: {
    width: '50%',
    paddingLeft: 10,
    marginTop: 5,
  },
  nameView: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  priceView: {
    flexDirection: 'row',
    height: 50,
    width: 60,
    justifyContent: 'space-between',
  },
  descView: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
  },
  pricetxt: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  pricetxt2: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  icon: {
    height: 30,
    width: 30,
  },
});

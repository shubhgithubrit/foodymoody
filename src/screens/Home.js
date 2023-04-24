import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React ,{useState}from 'react'
import Items from '../tabs/items';
import Transaction from '../tabs/transaction';
import Add from '../tabs/add';
import Orders from '../tabs/orders';
import Notify from '../tabs/notify';
const Home1 = () => {
  const[selectedTab,setSelectedtab]=useState('');
  
  return (
    <View style={styles.container}>
      {selectedTab==0?(<Items/>):selectedTab==1?(<Transaction/>):selectedTab==2?(<Add/>):selectedTab==3?(<Orders/>):<Notify/>}
  <View style={styles.bottomView}>
    <TouchableOpacity
    style={styles.bottomTab}
    onPress={()=>{
      setSelectedtab(0)
    }}
    >
<Image
source={require('../images/box.png')
}
style={[styles.bottomTabmImg,
  {
    tintColor:selectedTab==0?'red':'black'
  }]}
/>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.bottomTab}
    onPress={()=>{
      setSelectedtab(1)
    }}
    >
<Image
source={require('../images/trans.png')
}
style={[styles.bottomTabmImg,
  {
    tintColor:selectedTab==1?'red':'black'
  }]}
/>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.bottomTab}
    onPress={()=>{
      setSelectedtab(2)
    }}
    >
<Image
source={require('../images/add.png')
}
style={[styles.bottomTabmImg,
  {
    tintColor:selectedTab==2?'red':'black'
  }]}
/>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.bottomTab}
    onPress={()=>{
      setSelectedtab(3)
    }}
    >
<Image
source={require('../images/order-delivery.png')
}
style={[styles.bottomTabmImg,
  {
    tintColor:selectedTab==3?'red':'black'
  }]}
/>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.bottomTab}
    onPress={()=>{
      setSelectedtab(4)
    }}
    >

<Image
source={require('../images/notify.png')
}
style={[styles.bottomTabmImg,
{
  tintColor:selectedTab==4?'red':'black'
}
]}
/>
    </TouchableOpacity>
  </View>
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bottomView:{
height:50,
width:'100%',
flexDirection:'row',
justifyContent:'space-evenly',
alignItems:'center',
bottom:0,
backgroundColor:'#fff',
position:'absolute'
  },
  bottomTab:{
    width:'20%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  bottomTabmImg:{
    width:30,
    height:30
  }
})
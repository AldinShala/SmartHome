import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableWithoutFeedbackBase } from "react-native";
import img1 from './images/living-room.png';
import img2 from './images/bed.png';
import img3 from './images/kitchen.png';
import img4 from './images/house.png';

export default function App() {

  return (
    <View style={styles.container}>
       
      <View style={{width: 70, height: 20}}>
        
        <img src={img4} alt=""/></View>
        <View style={styles.house}>
        <Text style={styles.smartHome}>SmartHome</Text>
      </View>
      
     
            
      <Text style={{fontSize: 25, fontWeight: 'bold', paddingTop: 10,}}>Rooms</Text>

      <View style={styles.rooms}>

       <Text style={styles.boxOne}>
       <View style={styles.livingRoom}>
        
       <img src={img1} alt=""/>


        </View><br></br>Living Room</Text>

      <Text style={styles.boxTwo}>
      <View style={styles.bed}>
        
      <img src={img2} alt=""/>


        </View><br></br>Bedroom</Text>

      <Text style={styles.boxThree}>
      <View style={styles.kitchen}>
        
      <img src={img3} alt=""/>


        </View><br></br>Kitchen</Text>

      </View>

      
        <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 10}}>Devices</Text>
        
        <View style={styles.devices}>
        <View style={styles.greenBox}></View> 
          <Text style={{ fontSize: 20}}>Living Room Lamp</Text>
          <View style={styles.onOff}>
           <Text style={{fontSize: 20, color: '#298DFE'}}>On Off</Text>
          </View> 
        </View><br></br>
  
 
        <View style={styles.devices}>
        <View style={styles.redBox}></View> 
        <Text style={{textAlign: "right", fontSize: 20}}>Heater</Text>
        <View style={styles.onOff}>
           <Text style={{fontSize: 20, color: '#298DFE'}}>On Off</Text>
          </View> 
        </View><br></br>
 
      
        <View style={styles.devices}>
        <View style={styles.redBox}></View> 
        <Text style={{ fontSize: 20, textAlign: 'left'}}>TV</Text>
        <View style={styles.onOff}>
           <Text style={{fontSize: 20, color: '#298DFE'}}>On Off</Text>
          </View> 
        </View>

        <Text style={{ paddingTop: 10, fontSize: 20, fontWeight: 'bold'}}>Total Devices On: 1</Text>


    </View>
  );
} 
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },

  house: {
    flexDirection: 'row',
    paddingLeft: 100,
    paddingBottom: 30,
  },

  smartHome: {
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#2C807E',
  },

  rooms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "wrap",
    paddingTop: 10,
    paddingBottom: 40,
  },

  boxOne: {
    backgroundColor: '#3FBBB9',
    padding: 20,
    textAlign: "center",
  },

  livingRoom: {
    width: 100,
  },

  boxTwo: {
    backgroundColor: '#3FBBB9',
    padding: 20,
    textAlign: "center",
  },

  bed: {
    width: 100,
  },

  boxThree: {
    backgroundColor: '#3FBBB9',
    padding: 20,
    textAlign: "center",
  },

  kitchen: {
    width: 100,
    textAlign: "center",
  },

  devices: {
    padding: 10,
    backgroundColor: '#FFF6A5',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  redBox: {
    backgroundColor: 'red',
    width: 24,
    height: 24,
    marginRight: 15,
  },

  greenBox: {
    backgroundColor: '#0F8015',
    width: 24,
    height: 24,
    marginRight: 15,
  },

  onOff: {
    width: 45,
    height: 80,
    backgroundColor: 'white',
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  }
});
    
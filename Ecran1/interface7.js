/*import React  from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";  
import prev from '../assets/prev_80px.png';
import info from '../assets/info_16px.png';
import dow from '../assets/download.png';
import choux from '../assets/choux.png';

const interface6 =(navigation)=>{

    return(
      <ScrollView>
            <View>
                <View>
                    {<Image source={prev} 
                    style={{height:30, width:30, left:3}}/>}
                </View>
                <View style={{ flexDirection:'row', display:'flex', marginLeft:'20em', gap:7, marginTop:'-2em'}}>
                    {<Image source={dow} style={{height:20, width:20}}/>}
                    {<Image source={info} style={{width:20,height:20 }}/>}
                </View>
                <View style={{}}>
                    {<Image source={choux} style={{height:200,width:200, marginTop:60, marginLeft:'5em', backgroundColor:'#d1e4de'}}/>}
                </View>
            </View>
      </ScrollView>
    )
}*/


// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-web';




const brocoli = require('../assets/choux.png')
const carotte = require('../assets/banane.png')



const Image1 = require("../assets/icons8_circled_down_left_24px_1.png")

const Image2 = require("../assets/icons8_upload_24px.png")

const Image3 = require("../assets/icons8_back_50px_1.png")

const Image4 = require("../assets/icons8_cancel_50px_1.png")

const Image5 = require("../assets/icons8_plus_+_50px.png")

const Image6 = require("../assets/icons8_star_48px.png")

const Image7 = require("../assets/icons8_plus_+_50px.png")


const interface6 = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View>
                        <Image source={Image3} style={{ width: 150, height: 180, }}></Image>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20, }}>
                        <Image source={Image4} style={{ width: 150, height: 180, }}></Image>
                        <Image source={Image1} style={{ width: 150, height: 180, }}></Image>
                    </View>
                </View>

                <View style={styles.img}>
                    <Image source={brocoli} style={{ width: 150, height: 180, }}></Image>
                </View>

                <View style={styles.stats}>
                    <View style={styles.name}>
                        <View style={{ borderColor: '#44c390', borderWidth: 2, borderRadius: 5, alignItems: 'center', }}>
                            <Text style={{ color: '#44c390', fontWeight: '600', fontSize: 16, padding: 1, }}>Vegetables</Text>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Broccoli</Text>
                        <Text style={{ color: '#898989', fontWeight: '600', }}>approx 100 gm</Text>
                    </View>
                    <View style={styles.values}>
                        <Image source={Image5} style={{ width: 150, height: 180, }}></Image>
                        <Text style={{ fontSize: 20, fontWeight: '600', }}>1</Text>
                        <Image source={Image7} style={{ width: 150, height: 180, }}></Image>
                    </View>
                </View>

                <View style={styles.notation}>
                    <View style={{ flexDirection: 'row', gap: 10, }}>
                        <View style={styles.image2}>
                            <Image source={carotte} style={{ width: 50, height: 50, }}></Image>
                        </View>
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Agrifarm Inc</Text>
                            <Text style={{ color: '#8b8b8b', }}>F5RJ+FJF, Chairtakot</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={Image6} style={{ width: 150, height: 180, }}></Image>
                        <Text style={{ color: '#8b8b8b', }}>4.9</Text>
                        <Text style={{ color: '#8b8b8b', }}>(89)</Text>
                    </View>
                </View>

                <View style={styles.description}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Description</Text>
                    <Text style={{ color: '#8b8b8b', fontSize: 16, }}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet sed diam nonummy euismod <Text style={{ color: '#45bf8e', fontWeight: 'bold', }}>Read More</Text>
                    </Text>
                </View>
                <View style={styles.add}>
                    <View>
                        <Image source={Image2} style={{ width: 150, height: 180, }}></Image>
                    </View>
                    <View style={styles.button}>
                        <Text style={{ color: '#44c390', fontWeight: 'bold', fontSize: 18, }}>Add to card $ 1.50</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        padding: 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    img: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#e6f1ed',
        marginTop: 20,
        height: 270,
    },

    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },

    name: {

    },

    values: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },

    img2: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#e6f1ed',
        height: 60,
        width: 60,
    },

    notation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        borderTopColor: '#e2e2e2',
        borderBottomColor: '#e2e2e2',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        padding: 5,
        borderWidth: 2,
    },

    description: {
        marginTop: 30,
        gap: 15,
    },

    add: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },

    button: {
        borderColor: '#44c390',
        borderWidth: 2,
        borderRadius: 10,
        width: 270,
        alignItems: 'center',
        justifyContent: 'center',
    },
})




export default interface6;
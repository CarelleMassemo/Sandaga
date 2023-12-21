import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import panier from '../assets/plastic.jpg'
const interface4 = (navigation) => {
    return (
        <View style={styles.container}>
            {/* <View>
                <View style={{ backgroundColor: '#e6f1ed', height: '20em' }}>
                    {<Image source={panier} style={{ width: 200, height: 300, justifyContent: 'center', alignContent: 'center', marginTop: '0.0em', marginLeft: '6em' }} />}
                </View>
            </View>
            <View style={{ backgroundColor: '#fa8072', height: '50em', borderRadius: 60,  }}>
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{ fontWeight: '600', fontFamily: 'Times New Roman', justifyContent: 'center', alignItems: 'center', marginTop: 80,fontSize:30,}}>Order Groceries</Text>
                    <Text style={{ fontWeight: '600', fontFamily: 'Times New Roman', justifyContent: 'center', alignItems: 'center', fontSize:30,}}>and Get delivered</Text>
                    <Text style={{ fontWeight: '600', fontFamily: 'Times New Roman', justifyContent: 'center', alignItems: 'center', fontSize:30,}}>In few minutes</Text>
                </View>
                <View style={{ marginTop: '1em', borderRadius: 20, borderWidth: 2, borderColor: '#00ff99', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                                fontSize: 15,
                                color: '#30bb84',
                                textShadowColor: 'GREEN',
                                fontWeight: '600',

                    }}>
                        Get Started
                        
                    </Text>
                </View>
            </View> */}

            <View>
                {<Image source={panier} style={{ width: 200, height: 300, justifyContent: 'center', alignContent: 'center', marginTop: '0.0em', marginLeft: '6em' }} />}
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 25,}}>Order Groceries</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 25,}}>and Get delivered</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 25,}}>In few minutes</Text>
                </View>
                <View style={styles.button}>
                    <Text style={{color: '#00ff99', fontSize: 20, fontWeight: '600',}}>Get Started</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e6f1ed', 
        height: 'auto', 
    },

    footer:{
        backgroundColor: '#fff',
        height: '45%',
        marginTop: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    button:{
        borderWidth: 2,
        borderColor: '#00ff99',
        borderRadius: 20,
        padding: 10,
        marginTop: 15,
    }
})
export default interface4;
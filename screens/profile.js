import React from 'react';
import { View, Text, Image,TouchableOpacity,ScrollView } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
const Profile = () => {
    return (
        <View style={styles.container}>
            <Header />
            
            <LinearGradient
        
        colors={['#88E6D1', 'transparent']}
        style={styles.background}
            >
                <View style={{margin:20,flexDirection:'row'}}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello, User</Text>
                    <Icon
          name="person-circle"
          type="ionicon"
          color="grey"
          size={40}
          style={{marginLeft:'65%'}}
        />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.profButton}>
                     <Text>Your Orders</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profButton}>
                     <Text>Buy Again</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.profButton}>
                     <Text>Your Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profButton}>
                     <Text>Your Whishlist</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{flexDirection:'row',margin:20}}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Orders</Text>
                        <Text style={{marginTop:7,marginLeft:'50%',color:'#1ebfbf'}}>See all</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity style={styles.profItems}>
                            <Image source={{uri:'https://m.media-amazon.com/images/I/81XI2xLLjYL._AC_UY218_.jpg'}} style={{height:100,width:120}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.profItems}>
                            <Image source={{uri:'https://m.media-amazon.com/images/I/912PwM9SCRL._AC_UY218_.jpg'}} style={{height:100,width:120}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.profItems}>
                            <Image source={{uri:'https://m.media-amazon.com/images/I/815KnP2wjDS._SX679_.jpg'}} style={{height:100,width:120}} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View>

                
                <View style={{flexDirection:'row',margin:20}}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Account</Text>
                        <Text style={{marginTop:7,marginLeft:'50%',color:'#1ebfbf'}}>See all</Text>
                    </View>
                    <ScrollView horizontal={true}>
                    <TouchableOpacity style={[styles.profButton,{width:200,borderRadius:10}]}>
                     <Text>Your Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.profButton,{width:200,borderRadius:10}]}>
                     <Text>Your Addresses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.profButton,{width:200,borderRadius:10}]}>
                     <Text>Amazon Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.profButton,{width:200,borderRadius:10}]}>
                     <Text>View Amazon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.profButton,{width:200,borderRadius:10}]}>
                     <Text>Payment Options</Text>
                    </TouchableOpacity>
                    </ScrollView>
                    
                </View>
                </LinearGradient>
                
        </View>
    )
}

export {Profile};
import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { styles } from '../styles';
import { Icon } from 'react-native-elements';

const Orders = (props) => {
    return (
        <TouchableOpacity style={styles.orderButton}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={{ uri: props.img }} style={{width:props.imgWidth,height:props.imgHeight,marginLeft:20}}/>
                        <View>
                    <Text style={{ marginLeft: 20, color: '#1A95A7', fontWeight: 'bold',width:245 }}>{props.details}</Text>
                    <Text style={{ marginLeft: 20, color: 'grey' }}>{props.time} ago</Text>
                        </View>
                    </View>
                </TouchableOpacity>
    )
}

export { Orders }; 
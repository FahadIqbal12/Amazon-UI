import React from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from '../styles';

const Items = (props) => {
    return (
        <View style={{flexDirection:'row',marginTop:5}}>
                <TouchableOpacity style={styles.item}>
                    <Image source={{ uri: props.img1 }} style={{height:props.height1,width:props.width1,alignSelf:'center'}}/>
                        <Text style={styles.description}>{props.description1}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-half-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Text style={{marginLeft:10,color:'grey'}}>{props.ratingsno1}</Text>

                        </View>
                <Text style={styles.price}>{props.price1}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                    <Image source={{ uri: props.img2 }} style={{height:props.height2,width:props.width2,alignSelf:'center'}}/>
                        <Text style={styles.description}>{props.description2}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Icon name="star-half-sharp" type="ionicon" color="#FF9400" size={16} />
                            <Text style={{marginLeft:10,color:'grey'}}>{props.ratingsno2}</Text>

                        </View>
                <Text style={styles.price}>{props.price2}</Text>
                    </TouchableOpacity>
                   
            </View>
    )
}

export { Items };
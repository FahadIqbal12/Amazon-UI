import React from 'react';
import { View, Text, Image,KeyboardAvoidingView,ScrollView,TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/header';
import { Icon } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import { Items } from '../components/product';


const Home = () => {
    const images = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Apr-hero/Apay/Deals-3000._CB623368300_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Gateway/CEPC/Hero/Pendrives/D47074703_IN_PC-BAU-GW-HeroMSO-Storage-devices-Creatives_3000x1200._CB636151077_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/3000x1200_light_solutions_postpe_WC._CB635819570_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/April/UnrecHero/Apay/Skincare-desktop-Hero._CB623895796_.jpg'
    ]
    return (
        
            
        <KeyboardAvoidingView style={styles.container}>
            <Header />
            <View style={styles.address}>
            <Icon
          name="location-outline"
          type="ionicon"
          color="#000"
          size={21}
          style={{margin:10}}
        />
               <Text style={{marginTop:10,fontSize:15}}>Deliver to Patna - 800025</Text>
            </View>
            <ScrollView>
           
            <SliderBox
            images={images}
            />
            <Text style={{ marginLeft: 10, fontSize:20,fontWeight:'bold'}}>Popular Categories</Text>
            <ScrollView horizontal={true} style={{marginTop:30,height:120}}>
                <TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Icon name="woman-outline" type="ionicon" color="#878787" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',width:60,marginLeft:10,fontWeight:'bold'}}>Women Fashion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.category}>
                    <Icon name="shirt-outline" type="ionicon" color="#878787" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',width:60,marginLeft:10,fontWeight:'bold'}} >Men Fashion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.category}>
                    <Icon name="alarm-outline" type="ionicon" color="#878787" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',width:64,marginLeft:10,fontWeight:'bold'}} >Home Essentials</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.category}>
                    <Icon name="happy-outline" type="ionicon" color="#878787" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',width:60,marginLeft:10,fontWeight:'bold'}} >Child Fashion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.category}>
                    <Icon name="fast-food-outline" type="ionicon" color="#878787" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',width:60,marginLeft:10,fontWeight:'bold'}} >Food & Drink</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.category}>
                    <Icon name="basketball-outline" type="ionicon" color="#878787" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',width:60,marginLeft:10,fontWeight:'bold'}} >Sports & Outdoors</Text>
                </TouchableOpacity>
    
            </ScrollView>
            
                <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold', color: '#008C9F',marginTop:20,marginBottom:20 }}>For You</Text>
                <Items
                    img1='https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
                    description1="ATOMIC HABITS: The International Bestseller"
                    ratingsno1={45000}
                    price1='$20'
                    width1={120}
                    height1={180}

                    img2='https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SX316_BO1,204,203,200_.jpg'
                    description2='DO EPIC SHIT : Ankur Warikoo'
                    ratingsno2={52000}
                    price2='$10.05'
                    width2={120}
                    height2={180}

                />
                <Items
                    img1='https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg'
                    description1="2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3 inch Retina Display"
                    ratingsno1={85000}
                    price1='$900.50'
                    height1={100}
                    width1={150}

                    img2='https://m.media-amazon.com/images/I/61W4meSdVQL._AC_SY200_.jpg'
                    description2='Honor 2 BT Watch 2 with Battery- Charcoal Black '
                    ratingsno2={52000}
                    price2='$202.40'
                    height2={150}
                    width2={125}
                />


                <Text>This is a clone of Amazon.It must not be considered as real Amazon app.</Text>
                </ScrollView>
            </KeyboardAvoidingView>
            
        
        
    )
}

export {Home};
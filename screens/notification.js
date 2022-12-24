import React from 'react';
import { View, Text, Image,ScrollView,TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/header';
import { Orders } from '../components/orders';

const Notification = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{flexDirection:'row',marginTop:30}}>
                <Text style={{ color: '#1A95A7', fontSize: 20,fontWeight:'bold',marginLeft:20}}>Order Status</Text>
                <Text style={{color:'#E3E3E3',fontSize:20,marginLeft:20,fontWeight:'bold'}}>Watch List</Text>
            </View>
            <ScrollView style={{marginTop:20}}>
               <Orders
                    img='https://m.media-amazon.com/images/I/81XI2xLLjYL._AC_UY218_.jpg'
                    imgWidth={90}
                    imgHeight={70}
                    details='Apple iMac (21.5-inch/54.61 cm, 8GB RAM, 2.3GHz Dual-core 7th-Generation Intel Core i5 Processor, 256GB SSD Storage) - Silver'
                    time='5 hours'
                />
                 <Orders
                    img='https://m.media-amazon.com/images/I/912PwM9SCRL._AC_UY218_.jpg'
                    imgWidth={90}
                    imgHeight={70}
                    details='Amazon Brand - Solimo Royale 1 Seater Fabric Sofa (Brown)'
                    time='1 day'
                />
                 <Orders
                    img='https://m.media-amazon.com/images/I/815KnP2wjDS._SX679_.jpg'
                    imgWidth={90}
                    imgHeight={70}
                    details='2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 2TB) - Silver (5th Generation)'
                    time='2 days'
                />
                 <Orders
                    img='https://m.media-amazon.com/images/I/61AjKQSFMhL._AC_UL320_.jpg'
                    imgWidth={90}
                    imgHeight={60}
                    details='Centrino Men Formal Shoe'
                    time='4 days'
                />
                 <Orders
                    img='https://images-eu.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
                    imgWidth={90}
                    imgHeight={80}
                    details='Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
                    time='6 days'
                />
                 <Orders
                    img='https://m.media-amazon.com/images/I/61DFEAKDaXL._SX679_.jpg'
                    imgWidth={90}
                    imgHeight={70}
                    details='A10SHOP Alpha Bookshelf/Storage Cabinet, Home Decor Display with 4 Shelves, 54" high'
                    time='9 days'
                />
                 <Orders
                    img='https://m.media-amazon.com/images/I/614Sb6FBW4L._AC_UY218_.jpg'
                    imgWidth={90}
                    imgHeight={60}
                    details='Lenovo Yoga 7 Intel Evo Core i7 11th Gen 14" FHD IPS 2-in-1 Touchscreen Convertible Laptop'
                    time='15 days'
                />
                 <Orders
                    img='https://m.media-amazon.com/images/I/51JyelsZUKL._SX679_.jpg'
                    imgWidth={90}
                    imgHeight={70}
                    details='Prestige IRIS LPG Gas Stove, 2 Burner, Black, Powder coater Mild Steel with Glass Top, Manual'
                    time='20 days'
                />
                <Text>This is a clone of Amazon.It must not be considered as real Amazon app.</Text>
            </ScrollView>
        </View>
    )
}

export {Notification};
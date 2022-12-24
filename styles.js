import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    header: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#88E6D1',
        height: '15%',
        
        
    },
    input: {
        marginTop: 40,
        width: '45%',
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius:0
        
    },
    topButton: {
        backgroundColor: '#fff',
        marginTop: 40,
        width: 40,
        height: 45,
        alignItems: 'center',
        marginLeft: 10,
        borderRadius:10
    },
    address: {
        backgroundColor: '#B5EFE6',
        height: 40,
        flexDirection: 'row',
        
    },
    category: {
        backgroundColor: '#dbe0df',
        height: 60,
        width:60,
        marginLeft: 10,
        justifyContent:'center'
        
    },
    item: {
        backgroundColor: '#fff',
        height:280,
        width: '45%',
        marginLeft: 10,
        justifyContent:'center'
        
    },
    description: {
        textAlign:'center'
    },
    price: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight:'bold'
    },
    img: {
        height: 180,
        width: 120,
        alignSelf: 'center'  
    },
    orderButton: {
        backgroundColor: '#fff',
        height: 90,
        justifyContent: 'center',
        
    },
    background: {
        
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    profButton: {
        backgroundColor: '#f2f2f2',
        borderWidth: 2,
        height: 50,
        width: '43%',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor:'#d7e2e2'
       
    },
    profItems: {
        backgroundColor: '#fff',
        height: 150,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor:'#f2f2f2'
    }
})

export { styles };
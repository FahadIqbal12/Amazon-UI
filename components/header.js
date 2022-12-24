import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image,KeyboardAvoidingView } from "react-native";
import { styles } from "../styles";
import { Icon } from "react-native-elements";
const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[
          styles.topButton,
          { margin: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 },
        ]}
      >
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="What are you looking for"
        placeholderTextColor={"grey"}
          />

           <TouchableOpacity style={[styles.topButton,{marginLeft:0,borderRadius:0}]}>
        <Icon
          name="barcode-outline"
          type="ionicon"
          color="grey"
          size={22}
          style={{ marginTop: 10 }}
        />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.topButton,{marginLeft:0,borderRadius:0,borderTopRightRadius:10,borderBottomRightRadius:10}]}>
        <Icon
          name="mic-outline"
          type="ionicon"
          color="grey"
          size={22}
          style={{ marginTop: 10 }}
        />
          </TouchableOpacity>
          
      <TouchableOpacity style={styles.topButton}>
        <Icon
          name="cart-outline"
          type="ionicon"
          color="#000"
          size={30}
          style={{ marginTop: 5 }}
        />
      </TouchableOpacity>
      
    </View>
  );
};
export { Header };

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      testText: ""
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View  style={[styles.container]}>
          <StatusBar translucent backgroundColor={'transparent'} />
          <View style={{flexDirection:"row", flexWrap:"wrap", backgroundColor:"orange"}}>
            <ScrollView maximumZoomScale={5} minimumZoomScale={1}>
              <Image 
                onPress={Keyboard.dismiss}
                source={{uri:"https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Health/April/CR-Health-Inlinehero-bananas-good-for-you-0418"}} 
                style={{
                  marginTop:24,
                  height: window.width,
                  width: window.width
                }}
              />
            </ScrollView>
          </View>
          <Text>Open up App.js to start working on your app and do some cool stuff.</Text>
          <TextInput 
            style={{height: 40, width:300}}
            placeholder="Type here to translate!"
            onChangeText={(testText) => this.setState({testText})}
          />
          <Text>{this.state.testText}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const window = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});




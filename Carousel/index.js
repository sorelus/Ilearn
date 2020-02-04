import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView ,TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { ENTRIES1,ENTRIES2 } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import * as Progress from 'react-native-progress';
import {
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }
    onClickListener = (viewId) => {
      //Alert.alert("Alert", "Button pressed "+viewId);
       this.props.navigation.navigate("Video");
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}

            />
        );
    }



    createFeaturedCourse () {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  inactiveSlideOpacity={0.6}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />

            </View>
        );
    }
    createPurchasedBoxWithoutProgressiveBar(title, author){
      return (
          <View style={{flex: 1, flexDirection: 'row' ,justifyContent: 'space-around',marginLeft: 20, marginTop:10}}>
            <View style={{width: 80, height: 80, backgroundColor: 'gray'}} />
            <View style={{marginLeft: 5, justifyContent: 'flex-start'}} >
            <Text style={{
              fontSize: 20,


            }} >{title}</Text>

            <Text style={{
              fontStyle: 'italic',
              fontSize: 17,

            }} >{author}</Text>
            </View>
          </View>
      );

    }
    createPurchasedBox (title, author,pourcent) {

        return (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.onClickListener('login')}
            >
            <View style={{flex: 1, flexDirection: 'row' ,justifyContent: 'space-around',marginLeft: 20, marginTop:10}}>
              <View style={{width: 80, height: 80, backgroundColor: 'gray'}} />
              <View style={{marginLeft: 5, justifyContent: 'flex-start'}} >
              <Text style={{
                fontSize: 20,
                flex:1

              }} >{title}</Text>

              <Text style={{
                fontStyle: 'italic',
                fontSize: 17,
                flex:1
              }} >{author}</Text>
              <Progress.Bar progress={0.4}
               style={{marginTop: 8,
            }}/>
              </View>


            </View>
            </TouchableOpacity>
        );
    }
    render () {
        const book = this.createFeaturedCourse();
        const cre = this.createPurchasedBox('Physical A level','Prof Clebert Sorel','12');
        const creWithout = this.createPurchasedBoxWithoutProgressiveBar('French A level','Prof Nadeem ');
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >

                     <Text style={{
                       fontSize: 15,
                       marginTop: 10,
                       marginBottom: 5,
                       marginLeft: 20,
                       marginRight: 20,
                     }} >Featured Courses</Text>
                     <View
                       style={{
                         borderBottomColor: 'black',
                         borderBottomWidth: 2,
                         marginBottom: 5,
                         marginLeft: 20,
                         marginRight: 20,
                       }}
                     />
                        { book }

                        <Text style={{
                          fontSize: 15,
                          marginTop: 10,
                          marginBottom: 5,
                          marginLeft: 20,
                          marginRight: 20,
                        }} >Purchased Courses</Text>

                        <View
                          style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                            marginLeft: 20,
                            marginRight: 20,
                          }}
                        />

                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{
                          paddingBottom : 30
                        }}
                        >
                          { cre }
                          { cre }
                          { cre }

                        </ScrollView>

                        <Text style={{
                          fontSize: 15,
                          marginTop: 10,
                          marginBottom: 5,
                          marginLeft: 20,
                          marginRight: 20,
                        }} >Related Courses</Text>

                        <View
                          style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                            marginLeft: 20,
                            marginRight: 20,
                          }}
                        />
                        <ScrollView
                        showsHorizontalScrollIndicator={false}
                          horizontal={true}
                        style={{
                          paddingBottom : 20,

                        }}
                        contentContainerStyle={{ alignItems : 'flex-start'}}
                        >
                          { creWithout }
                          { creWithout }
                          { creWithout }
                          { creWithout }
                        </ScrollView>

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

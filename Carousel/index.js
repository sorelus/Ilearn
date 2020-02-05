import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView ,TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles from './styles/index.style';
import { ENTRIES1 } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import * as Progress from 'react-native-progress';
import { colors } from '../assets/commons';
import {
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

const SLIDER_1_FIRST_ITEM = 3;

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
                  loop={true}
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
    linebuild () {
      return(
        <View
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 3,
            marginLeft: 20,
            marginRight: 20,
            borderRadius:8,
          }}
        />
      );
    }
    title(text){
      return(
        <Text style={{
          fontSize: 18,
          marginTop: 10,
          marginBottom: 1,
          marginLeft: 20,
          marginRight: 20,
          fontWeight: 'bold',
          color : colors.primary
        }} >{text}</Text>
      );
    }
    render () {
        const book = this.createFeaturedCourse();
        const cre = this.createPurchasedBox('Physical A level','Prof Clebert Sorel','12');
        const creWithout = this.createPurchasedBoxWithoutProgressiveBar('French A level','Prof Nadeem ');
        const line = this.linebuild();
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >

                      {this.title('Featured Courses')}
                      {line}
                      { book }

                        <View style={{
                          paddingBottom : 30,
                          margin: 4,

                        }}>
                        {line}
                        {this.title('Purchased Courses')}
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            >
                              { cre }
                              { cre }
                              { cre }

                          </ScrollView>
                          </View>

                        {line}
                        <View style={{
                          paddingBottom : 30,
                          margin: 4,

                        }}>
                        {this.title('Related Courses')}
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
                      </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

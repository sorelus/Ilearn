import React from 'react';
import { StyleSheet, Text, View, Dimensions,ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons,Ionicons } from '@expo/vector-icons';

export default class VideoPlayer extends React.Component {
  state = {
  		mute: false,
  		fullScreen: false,
  		shouldPlay: true,
  	}

  	handlePlayAndPause = () => {
  		this.setState(prevState => ({
  			shouldPlay: !prevState.shouldPlay
  		}));
  	}

  	handleVolume = () => {
  		this.setState(prevState => ({
  			mute: !prevState.mute,
  		}));
  	}
    hideCheck = (hide) =>{
      if(!hide){
        return null;
      }else{
        return (
        <MaterialIcons
          name={"check"}
          size={25}
          color="black"
          style={{marginRight: 10}}

        />
        )
      }
    }
    courseTitle(number,title, size){
      const check = this.hideCheck(size);
      return (
          <View style={{flex: 1, flexDirection: 'row' ,justifyContent: 'space-around',  marginLeft: 5,marginTop: 5,}}>
          <Text style={{
            flex: 1,
            fontSize: 16,
          }} >{number}. {title}</Text>

            <View style={{marginLeft: 5,flexDirection: 'row' ,justifyContent: 'flex-end', marginRight: 10}} >
            {check}
            <MaterialIcons
              name={"cloud-download"}
              size={25}
              color="black"

            />
            </View>
          </View>
      );

    }

    render() {
  		const { width } = Dimensions.get('window');
      const title = this.courseTitle('1','gestion des produits',16);

      const  initialArr = [
            {
              id: 1,
              title: "blgestion des dfdfdf dsdsdsd sdsds ",
              begin: true
            },
            {
              id: 2,
              title: "blgestion des ",
              begin: true
            },
            {
              id: 3,
              title: "blgestion des ",
              begin: true
            },
            {
              id: 4,
              title: "blgestion des ",
              begin: true
            },
            {
              id: 5,
              title: "blgestion des ",
              begin: false
            },
            {
              id: 6,
              title: "blgestion des ",
              begin: false
            },
          ];

      const  buttonsListArr = initialArr.map(buttonInfo => {
            return (
              this.courseTitle(buttonInfo.id,buttonInfo.title,buttonInfo.begin)
            );
          }

          );
      return (
        <View style={{flex: 1}}>
        <View >
  						<Video
  							source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  							shouldPlay={this.state.shouldPlay}
  							resizeMode="cover"
  							style={{ width, height: 250 }}
  							isMuted={this.state.mute}
  						/>
  						<View style={styles.controlBar}>
  							<MaterialIcons
  								name={this.state.mute ? "volume-mute" : "volume-up"}
  								size={30}
  								color="white"
  								onPress={this.handleVolume}
  							/>
  							<MaterialIcons
  								name={this.state.shouldPlay ? "pause" : "play-arrow"}
  								size={30}
  								color="white"
  								onPress={this.handlePlayAndPause}
  							/>
  						</View>
          </View>
              <ScrollView
              contentContainerStyle={{ justifyContent : 'flex-start'}}
              style={{flex: 1}}
              >
                  <Text style={{
                    marginLeft: 5,
                    fontSize: 18,
                  }} >Section I : General Physical</Text>
                  <View
                    style={{

                      borderBottomColor: 'black',
                      borderBottomWidth: 2,
                      marginLeft: 5,
                      marginTop: 5,
                      marginRight: 20,
                      width : 150

                    }}
                  />
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  />

                  {buttonsListArr}
                  <Text style={{
                    marginLeft: 5,
                    marginTop: 15,
                    fontSize: 18,
                  }} >Section II : interval setState</Text>

                  <View
                    style={{

                      borderBottomColor: 'black',
                      borderBottomWidth: 2,
                      marginLeft: 5,
                      marginTop: 5,
                      marginRight: 20,
                      width : 150

                    }}
                  />
                  {buttonsListArr}
              </ScrollView>
        </View>
  		);
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
  	},
  	controlBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
  		height: 45,
  		flexDirection: 'row',
  		alignItems: 'center',
  		justifyContent: 'flex-start',
  		backgroundColor: "rgba(0, 0, 0, 0.5)",
  	}
  });

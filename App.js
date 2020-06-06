import React, {useState} from 'react';
//icons
//import { FontAwesome } from '@expo/vector-icons';
//custon components
import {About} from './aboutComponent.js';
import {Explanation} from './explanationComponent.js';
import {Harmonize} from './harmonizeComponent.js';

//stylesheet
import {styles} from './styles.js';

//regular components
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  BackHandler,
  Image,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import {
  //AdMobBanner,
  //AdMobInterstitial,
  //PublisherBanner,
  //AdMobRewarded,
  //setTestDeviceIDAsync,
//} from 'expo-ads-admob';

const App: () => React$Node = (props) => {
  //five possible options: 'home', 'about', 'explanation', 'test', 'practicalTest'
  const [displayComponent, setDisplayComponent] = useState('home');
  const [correctCount, setCorrectCount] = useState(0);

  //called from test and practical components when question is answered complete
  function incrementCorrectCount() {
    //users get 8 correct answers and then an interstitial loads
    if (correctCount === 7) {
      setCorrectCount(0);
      //request interstitial
      //createInterstitial();
    } else {
      setCorrectCount(correctCount + 1);
    };
  };

  //async function createInterstitial() {
    //await AdMobInterstitial.setAdUnitID('ca-app-pub-5478603993874180/3114601666'); // Test ID, Replace with your-admob-unit-id
    //await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    //await AdMobInterstitial.showAdAsync();
  //};

  const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    if (displayComponent !== 'home') {
      setDisplayComponent('home');
      return true;
    } else {
      BackHandler.exitApp();
    };
  });

  return (
    <ImageBackground source={require('./assets/whiteTexture.jpg')} style={styles.backgroundImage}>
    <View style={styles.appWrapper}>
      <StatusBar barStyle='default'/>
      <View style={styles.titleWrapper}>
        <TouchableOpacity
          onPress={() => setDisplayComponent('home')}
          style={styles.homeButton}
        >
          <Image
            source={require('./assets/iconRed.png')}
            resizeMode='contain'
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
        <Text style={[styles.titleHeader, {marginLeft: 8, marginTop: 8}]}>Harmonize Melodies</Text>
      </View>
      <Image
        source={require('./assets/splashRedPaleWide.png')}
        resizeMode='contain'
        style={styles.backgroundKeyboard}
      />
      <ScrollView>
      {displayComponent === 'home' &&
        <View style={styles.homeWrapper}>

          <TouchableOpacity
            onPress={() => setDisplayComponent('about')}
            style={[styles.navigationButtons, {marginTop: 40}]}
          >
            <Text style={styles.navigationText}>About the App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDisplayComponent('explanation')}
            style={styles.navigationButtons}
          >
            <Text style={styles.navigationText}>Review the Theory</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDisplayComponent('harmonize')}
            style={styles.navigationButtons}
          >
            <Text style={styles.navigationText}>Harmonize!</Text>
          </TouchableOpacity>
        </View>
      }
      {displayComponent === 'about' &&
        <View>
          <About/>
        </View>
      }
      {displayComponent === 'explanation' &&
        <View>
          <Explanation/>
          <TouchableOpacity
            onPress={() => setDisplayComponent('harmonize')}
            style={[styles.navigationButtons, {width: 185, marginTop: 0, marginBottom: 10}]}
          >
            <Text style={[styles.navigationText, {marginBottom: 0}]}>Harmonize!</Text>
          </TouchableOpacity>
        </View>
      }
      {displayComponent === 'harmonize' &&
        <Harmonize
          incrementCorrectCount={incrementCorrectCount}
        />
      }
      </ScrollView>
      <View style={{marginTop: 'auto', borderBottomWidth: 1}}>

      </View>
    </View>
    </ImageBackground>
  );
};

export default App;

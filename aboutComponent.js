import React, {useState} from 'react';
//toggle sliders (replacing checkboxes from web app - checkboxes are difficult to style)
import {styles} from './styles.js';

import AwesomeAlert from 'react-native-awesome-alerts';

import {
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
  Linking
} from 'react-native';

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showAlert: false};

    this.showAlert = this.showAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);

    this.privacyPolicy = "This app is ad supported. It is free and intended for use as is.\n\nBy using this app, you consent to collection of user data as defined here.\n\nI do not personally track your data, but this app uses three third party services that may do so: Google Play Services, AdMob, and Expo.\n\nThis app will never intentionally collect data on children below the age of 13. If it does so accidentally, the information will be deleted from servers immediately.\n\nThis privacy policy is effective as of 06/03/20 and current. Please contact me if you have any questions.";
  };

  showAlert() {
    this.setState({showAlert: true});
  };

 hideAlert() {
   this.setState({showAlert: false});
 };

  render() {
    return (
      <View style={styles.explanationWrapper}>
        <View style={styles.explanationHeaderWrapper}>
          <Text style={styles.aboutHeader}>About</Text>
        </View>
        <Text style={styles.aboutText}>
          This app is designed to help you practice harmonizing melodies.
        </Text>
        <Text style={styles.aboutText}>
          In the "Review the Theory" section, you can learn the essential music theory behind developing harmony for any given melody. A basic understanding of how to construct
          chords and reading music is recommended before using this practice tool. If you don't have that, you can find beginner friendly explanations of them You can find a beginner friendly explanation of them <Text style={{textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://www.musictheory.net/lessons')}>here</Text>.
        </Text>
        <Text style={styles.aboutText}>
          In the "Harmonize!" section, you choose what kind of melody you'd like to set harmony to (such as major, minor, modal, chromatic, or pentatonic), and the app plays one at random for you,
          also displaying it as sheet music. You can choose from a list of possible chords in the key, or write in your own! You can save your harmony and export it as a pdf and even record yourself
          playing the chords along with the melody.
        </Text>
        <View style={{marginRight: 'auto', marginLeft: 'auto', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7}}>
          <TouchableOpacity style={{width: 160, height: 50, borderWidth: 1, borderRadius: 10, padding: 8, backgroundColor: 'white', marginRight: 7}} onPress={() => Linking.openURL('https://trevorspheresmith.com/contact')}>
            <Text style={[styles.aboutText, {textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 20}]}>Contact me!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{textAlign: 'center', width: 160, height: 50, borderWidth: 1, borderRadius: 10, padding: 8, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 7}} onPress={() => this.showAlert()}>
            <Text style={{fontSize: 20}}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <AwesomeAlert
          overlayStyle={{backgroundColor: '#ebf1fa', opacity: 0.1, elevation: 10}}
          contentContainerStyle={{borderWidth: 1, borderRadius: 5, elevation: 10, minWidth: 100,}}
          show={this.state.showAlert}
          showProgress={false}
          title="Privacy Policy"
          message={this.privacyPolicy}
          titleStyle={{fontSize: 18, fontWeight: 'bold', color: 'black'}}
          messageStyle={{fontSize: 15, color: 'black'}}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="  OK  "
          confirmButtonColor="#32a852"
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  };
};

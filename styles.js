import {StyleSheet} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  aboutHeader: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 24,
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,
  },
  appWrapper: {
    minHeight: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
    minHeight: '100%',
  },
  backgroundKeyboard: {
    position: 'absolute',
    opacity: .125,
    right: 1,
    left: -150,
    top: 77,
  },
  explanationHeader: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 22,
    marginBottom: 2,
  },
  explanationText: {
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,
  },
  explanationWrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 7,
  },
  explanationHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  explanationHeader: {

  },
  explanationSubheader: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    marginBottom: 7,
  },
  explanationFooterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  pageNavigationButtons: {
    marginBottom: 4,
  },
  homeButton: {
    marginLeft: 4,
    alignSelf: 'center',
  },
  navigationButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 245,
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 7,
  },
  navigationText: {
    textAlign: 'center',
    fontSize: 26,
  },
  titleHeader: {
    fontSize: 23,
    color: 'black',
    marginTop: 3,
    marginBottom: 7,
    textAlign: 'center',
    alignSelf: 'center',
  },
  titleWrapper: {
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 5,
    borderBottomWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

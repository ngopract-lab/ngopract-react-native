import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  myScene: {
    backgroundColor: '#F5F5F5',
    height: windowHeight,
  },
  sceneTitle: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#2574A9',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 999,
  },
  backButtonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  backButtonText: {
    fontWeight: 'bold',
    color: '#FFF',
    textAlignVertical: 'top',
    paddingLeft: 5,
  },
  sceneTitleText: {
    color: '#F5F5F5',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  navbar: {
    backgroundColor: '#FDFDFD',
    height: 50,
  },
  navbarTab: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  navbarTabText: {
    color: '#2574A9',
    fontWeight: 'bold',
  },
  postButton: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: '#2574A9',
    borderRadius: 1000,
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  postButtonText: {
    color: '#FFF',
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 20,
    borderColor: '#DDD',
    borderWidth: 0.5,
  },
  cardPerson: {
    flex: 1,
    flexDirection: 'row',
  },
  cardTitle: {
    color: '#2574A9',
    marginLeft: 20,
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardPosition: {
    color: '#222',
    marginLeft: 20,
    fontSize: 12,
  },
  cardStatus: {
    paddingTop: 20
  },
  cardStatusText: {
    color: '#222',
    fontSize: 12,
  },
  screenContainer: {
    height: windowHeight,
  },
  cardPersonProfile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardProfileTitle: {
    color: '#2574A9',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  cardProfilePosition: {
    color: '#222',
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
  },
});

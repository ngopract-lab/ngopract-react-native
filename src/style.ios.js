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
  sceneTitleText: {
    color: '#F5F5F5',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  postButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#2574A9',
    borderRadius: 1000,
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  postButtonText: {
    color: '#FFF',
    fontSize: 70,
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
    padding: 20
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
  }
});

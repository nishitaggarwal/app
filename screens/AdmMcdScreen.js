import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AdminMyHeader from '../Components/AdminAppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class AdmMcdScreen  extends React.Component {
  goToForgeMcdComplaintScreen = () => {
    this.props.navigation.navigate('AdminSanitysationComplaintScreen');
  };

  goToForgeWaterComplaintScreen = () => {
    this.props.navigation.navigate('AdminWaterComplaintScreen');
  };

  goToForgeConstructionComplaint = () => {
    this.props.navigation.navigate('AdminConstructionComplaintScreen');
  };

  goToForgeRoadwaysComplaint = () => {
    this.props.navigation.navigate('AdminRoadwaysComplaintScreen');
  };

  goToForgeShopComplaint = () => {
    this.props.navigation.navigate('AdminShopComplaintsScreen');
  };
  render() {
    return (
      <View style = {styles.container}>
        <SafeAreaProvider>
          <AdminMyHeader title="MCD Complaints" />{' '}
          <Text style={styles.headerText}>
            Kindly Choose Your Concern for the Complaints
          </Text>
          <TouchableOpacity
            onPress={() => this.goToForgeWaterComplaintScreen()}
            style={styles.button1Text}>
            <Text style={styles.button1text}>Water</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.goToForgeConstructionComplaint()}
            style={styles.button2Text}>
            <Text style={styles.button1text}>Construction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.goToForgeRoadwaysComplaint()}
            style={styles.button3Text}>
            <Text style={styles.button1text}>Roadways</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.goToForgeMcdComplaintScreen()}
            style={styles.button4Text}>
            <Text style={styles.button1text}>Sanitation of</Text>
            <Text style={styles.button1text}>Public Toilets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.goToForgeShopComplaint()}
            style={styles.button5Text}>
            <Text style={styles.button1text}>Shop Complaints</Text>
          </TouchableOpacity>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    marginTop: 0,
  },
  headerText: {
    marginTop: 10,
    fontSize: 15,
    color: '#A52A2A',
    alignSelf: 'center',
  },
  button1text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  button1Text: {
    backgroundColor: '#00ff00',
    marginTop: 10,
    // marginBottom: 318,
    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
  button2Text: {
    backgroundColor: '#ff0000',
    marginTop: 15,
    alignSelf: 'center',

    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
  button3Text: {
    backgroundColor: '#fe6f5e',
    marginTop: 15,
    alignSelf: 'center',

    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
  button4Text: {
    backgroundColor: '#30ECFB',
    marginTop: 15,
    alignSelf: 'center',

    color: '#30ECFB',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.35',
  },
  button5Text: {
    backgroundColor: '#ffbf00',
    marginTop: 15,
    marginBottom: 28,
    alignSelf: 'center',

    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
});

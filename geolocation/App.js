/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, { Component } from 'react';
import { DatePickerIOS, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTime from './src/DatePicker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     chosenDate: '',
  //     chosenDay: '',
  //     chosenTime: '',
  //     // date: "2016-05-15",
  //     isDateTimePickerVisible: false,
  //     isTimePickerVisible: false
  //   };


  // }

  // _showDatePicker = () => this.setState({ isDateTimePickerVisible: true });

  // _showTimePicker = () => this.setState({ isTimePickerVisible: true });



  // _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  // _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  // _handleDatePicked = (date) => {
  //   console.log('A date has been picked: ', date);
  //   console.log(date)
  //   this.setState({ chosenDate: moment(date).format(' MMMM, D YYYY'), chosenDay: moment(date).format(' dddd ') })
  //   this._hideDateTimePicker();

  // };

  // _handleTimePicked = (date) => {
  //   console.log('A date has been picked: ', date);
  //   console.log(date)
  //   this.setState({ chosenTime: moment(date).format(' h:mm a') })
  //   this._hideTimePicker();

  // };






  render() {
  
    return (
      <View style={{flex: 1, justifyContent: 'center',  backgroundColor: '#F5F5F5',}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
          <DateTime
          mode='date'
             />
          <DateTime
    
           />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: '',
      chosenDay: '',
      chosenTime: '',
      isDateTimePickerVisible: false,
      isTimePickerVisible: false
    };


  }
  _showDatePicker = () => this.setState({ isDateTimePickerVisible: true });

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  // _showDatePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    console.log(date)
    this.setState({ chosenDate: moment(date).format(' MMMM, D YYYY'), chosenDay: moment(date).format(' dddd ') })
    this._hideDateTimePicker();

  };

  _handleTimePicked = (date) => {
    console.log(date)
    this.setState({ chosenTime: moment(date).format(' h:mm a') })
    this._hideTimePicker();

  };


  render() {
    const { chosenDate, chosenTime, chosenDay } = this.state;
    const { mode, } = this.props
    return (
      <View >

        {
          mode === 'date' ?
            <TouchableOpacity onPress={this._showDatePicker}>
              <View style={styles.wrapperStyle}>
                <Text style={styles.timeTitle}>Date</Text>
                <Text style={styles.timeStyle}>{this.state.chosenDay}</Text>
                <Text style={styles.timeStyle}>{chosenDate}</Text>
              </View>

            </TouchableOpacity>

            :
            <TouchableOpacity onPress={this._showTimePicker}>
              <View style={styles.wrapperStyle}>
                <Text style={styles.timeTitle}>Time</Text>
                <Text style={styles.timeStyle}>{chosenTime}</Text>
              </View>

            </TouchableOpacity>
        }

        <DateTimePicker
        
          mode='date'
          titleStyle={{ fontSize: 15, color: '#8E8E93', fontWeight: 'bold', letterSpacing: -0.24, lineHeight: 20 }}
          hideTitleContainerIOS={true}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />

        <DateTimePicker
              backdropColor='white'
          hideTitleContainerIOS={true}
          titleIOS='Pick a time'
          titleStyle={{ fontSize: 15, color: '#8E8E93', fontWeight: 'bold', letterSpacing: -0.24, lineHeight: 20 }}
          mode='time'
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handleTimePicked}
          onCancel={this._hideTimePicker}
        />

      </View>
    );
  }

}


const styles = StyleSheet.create({

  wrapperStyle: {
    width: 175, height: 100, backgroundColor: 'white', padding: 5, borderRadius: 6, shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1
  },
  timeStyle: {
    fontSize: 17, color: '#6DA3D3', marginTop: 5, fontWeight: '400'
  },

  timeTitle: {
    padding: 5, fontSize: 15, color: '#8E8E93', fontWeight: 'bold', letterSpacing: -0.24, lineHeight: 20
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

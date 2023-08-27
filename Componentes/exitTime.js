import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';

const ExitTime = () => {
  const [dateS, setDateS] = useState(Date);
  const [entryS, setEntryS] = useState('');
  const [timeS, setTimeS] = useState(Date);
  const navigation=useNavigation();

  const save = () => {
    console.log('to register');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.Container}>
      <Image style={styles.logo} source={require('../images/mina.jpg')} />
      <View>
        <Text style={styles.label}>Fecha de Salida</Text>
        <TextInput
          placeholder="01/01/2024"
          value={dateS}
          onChangeText={setDateS => this.setState({ Date })}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Hora de Salida</Text>
        <TextInput
          placeholder="10:00"
          value={timeS}
          onChangeText={setTimeS => this.setState({ Date })}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Jornada Laboral</Text>
        <TextInput
          placeholder="AM o PM"
          value={entryS}
          onChangeText={setEntryS}
          style={styles.input}
        />
      </View>
      <Pressable style={styles.btn_cita} onPress={save}>
        <Text style={styles.btn_txtcita}>Grabar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 35,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  btn_cita: {
    width: '90%',
    height: 40,
    textAlign: 'center',
    backgroundColor: '#841584',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  btn_txtcita: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5,
  },

  label: {
    font: 'Calendas Plus',
    fontSize: 15,
    color: '#000000',
    marginBottom: 5,
    marginTop: 15,
    fontWeight: '600',
    marginHorizontal: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default ExitTime;

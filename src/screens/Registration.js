import React, {Component} from 'react';
import {Text, View, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';
import {createUser, chgLogin} from '../redux/actions';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      login_state: false,
    };
  }

  resetState = () => {
    this.setState({
      f_name: '',
      l_name: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      login_state: false,
    });
  };

  validate(f_name, l_name, email, phone, password, confirm) {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const phone_regex = '^[0-9]*$';
    const v_phone = phone.match(phone_regex);
    const v_email = email.match(regex);
    // v_email != null
    //   ? (createUser(f_name, l_name, email, phone, password, confirm),
    //     chgLogin(true),
    //     this.props.navigation.navigate('TabNav', {
    //       screen: 'Home',
    //       params: {
    //         name: f_name,
    //       },
    //     }))
    //   : (alert('Invalid email'), this.resetState());

    v_email != null
      ? f_name.length >= 5
        ? l_name.length > 1
          ? v_phone != null && phone.length == 10
            ? password.length >= 6
              ? password == confirm
                ? (this.props.createUser(
                    f_name,
                    l_name,
                    email,
                    phone,
                    password,
                    confirm,
                  ),
                  this.props.chgLogin(true),
                  this.props.navigation.navigate('TabNav', {
                    screen: 'Home',
                    params: {
                      name: f_name,
                    },
                  }))
                : alert('Password mismatch')
              : alert('Enter valid password')
            : alert('Enter valid phone number')
          : alert('Enter last name')
        : alert('First name must be more than 5 characters')
      : alert('Invalid email');
  }

  render() {
    const {user, createUser, chgLogin, navigation} = this.props;
    console.log('USER=>', user);
    const {f_name, l_name, email, phone, password, confirm} = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 20,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Text style={styles.title}>Sign up</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View style={{}}>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <TextInput
                placeholder="first name"
                onChangeText={(t) => {
                  this.setState({f_name: t});
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <TextInput
                placeholder="last name"
                onChangeText={(t) => {
                  this.setState({l_name: t});
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <TextInput
                textContentType="emailAddress"
                placeholder="email"
                onChangeText={(t) => {
                  this.setState({email: t});
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <TextInput
                textContentType="telephoneNumber"
                placeholder="phone"
                onChangeText={(t) => {
                  this.setState({phone: t});
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                placeholder="password"
                onChangeText={(t) => {
                  this.setState({password: t});
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                placeholder="confirm password"
                onChangeText={(t) => {
                  this.setState({confirm: t});
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.validate(
                    f_name,
                    l_name,
                    email,
                    phone,
                    password,
                    confirm,
                  );
                }}
                style={{
                  paddingVertical: 30,
                }}>
                <Text
                  style={{
                    fontSize: 28,
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 50,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={{textDecorationLine: 'underline', fontSize: 16}}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (f_name, l_name, email, phone, pass, conf_pass) => {
    dispatch(createUser(f_name, l_name, email, phone, pass, conf_pass));
  },
  chgLogin: (login_state) => {
    dispatch(chgLogin(login_state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

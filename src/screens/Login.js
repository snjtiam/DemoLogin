import React, {Component} from 'react';
import {Text, View, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';
import {chgLogin} from '../redux/actions';

class Login extends Component {
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

  authenticate = (email, pass) => {
    if (this.props.user.email != '') {
      email == this.props.user.email && pass == this.props.user.pass
        ? (chgLogin(true),
          this.props.navigation.navigate('TabNav', {
            screen: 'Home',
            params: {
              name: this.props.user.f_name,
            },
          }))
        : (chgLogin(false), alert('Inavalid credentials'));
    } else {
      alert('Please sign up');
    }
  };
  render() {
    const {user} = this.props;
    console.log('LOGIN=>', user);

    const {navigation} = this.props;
    const {email, password} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 20,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Text style={styles.title}>Login</Text>
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
                textContentType="emailAddress"
                placeholder="email"
                onChangeText={(t) => {
                  this.setState({
                    email: t,
                  });
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}>
              <TextInput
                secureTextEntry={true}
                textContentType="password"
                placeholder="password"
                onChangeText={(t) => {
                  this.setState({
                    password: t,
                  });
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.authenticate(email, password);
                }}>
                <Text
                  style={{
                    fontSize: 28,
                  }}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Registration');
                }}>
                <Text style={{textDecorationLine: 'underline'}}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{textDecorationLine: 'underline'}}>
                  Forgot password?
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
  chgLogin: (login_state) => {
    dispatch(chgLogin(login_state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

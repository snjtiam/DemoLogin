import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    const {name} = this.props.user;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text style={{fontSize: 24}}>
            hi,
            {/* <Text style={{fontSize: 26}}> {name}</Text> */}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

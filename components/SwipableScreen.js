import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-paper';

const SkipButton = () => {
  return (
    <View style={{position: 'absolute', bottom: 15, right: 10}}>
      <Button
        color="#006caa"
        mode="text"
        onPress={() => console.log('Pressed')}>
        Skip
      </Button>
    </View>
  );
};

const Profile = props => {
  return (
    <Image
      source={{uri: props.url}}
      style={{
        marginVertical: 50,
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor: '#006caa',
        borderRadius: 10,
      }}
    />
  );
};
const Title = props => {
  return (
    <Text style={{fontSize: 30, fontWeight: 'bold', color: '#006caa'}}>
      {props.children}
    </Text>
  );
};
const SubTitle = props => {
  return (
    <View style={{padding: 35, width: '100%', height: 200}}>
      <Text style={{fontSize: 15, color: '#006caa'}}>{props.children}</Text>
    </View>
  );
};
const SwipableScreen = () => {
  return (
    <Swiper>
      <View style={styles.View}>
        <Profile url="data:image/jpeg;base64,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" />
        <Title>Who are we?</Title>
        <SubTitle>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </SubTitle>
        <SkipButton />
      </View>
      <View style={styles.View}>
        <Profile url="https://www.greenbackcapital.in/images/aboutus/what-we.png" />
        <Title>What we do?</Title>
        <SubTitle>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </SubTitle>
        <SkipButton />
      </View>
      <View style={styles.View}>
        <Profile url="https://www.localmaxx.com/wp-content/uploads/2017/11/lmx-landing-hire-2.jpg" />
        <Title>Why Choose Us ?</Title>
        <SubTitle>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </SubTitle>
        <SkipButton />
        <SkipButton />
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SwipableScreen;

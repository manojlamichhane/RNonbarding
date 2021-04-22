import React from 'react';
import {View, Image, Text} from 'react-native';
import Onboarding from 'react-native-onboarding-screen';

const OnBoardingScreen = () => {
  return (
    <Onboarding
      nextLabel
      skipLabel
      pages={[
        {
          backgroundColor: 'white',
          image: <View style={{backgroundColor: 'green', flex: 1}}></View>,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>Jacobs Awesome ToDo List</Text>
        <Text>Jacob Jingco</Text>
        <Text>April 3, 2024</Text>
      </View>
    </MainLayout>
  );
};

export default AboutScreen;

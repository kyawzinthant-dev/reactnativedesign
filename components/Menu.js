import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from './MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from './MenuSlice';
const screenHeight = Dimensions.get("window").height;
function Menu() {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu);

  const [top, setTop] = useState(
    new Animated.Value(screenHeight)
  );

  useEffect(() => {
    toggleMenu();
  }, [menu]);

  const toggleMenu = () => {
    if (menu?.action == 'openMenu') {
      Animated.spring(top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    }
    if (menu?.action == 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <AnimatedContainer style={{ top: top }}>
      <Cover>
        <Image source={require('../assets/background2.jpg')} />
        <Title>Kaskar</Title>
        <Subtitle>Developer</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={() => dispatch(closeMenu())}
        style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1 }}
      >
        <CloseView
          style={{ elevation: 1 }}
        >
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>

      <Content>
        {
          items.map((e, i) => (
            <MenuItem
              key={i}
              icon={e.icons}
              title={e.title}
              text={e.text}
            />
          ))
        }
      </Content>
    </AnimatedContainer>
  );
}

export default Menu;
const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  margin-top: 8px;
`;


const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;

`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
`;

const Content = styled.View`
  height: ${screenHeight}px;
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icons: 'ios-settings',
    title: 'Account',
    text: 'settings'
  },
  {
    icons: 'ios-card',
    title: 'Billing',
    text: 'Payment'
  },
  {
    icons: 'ios-compass',
    title: 'Learn React',
    text: 'start course'
  },
  {
    icons: 'ios-exit',
    title: 'Log Out',
    text: 'See you soon!'
  }
];
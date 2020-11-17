import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar } from 'react-native';
import styled from 'styled-components'; Container;
import Card from '../components/Card';
import { NotificationIcon } from '../components/icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu } from '../components/MenuSlice';


export default function HomeScreen() {
  const [scale, setScale] = useState(new Animated.Value(1));
  const [opacity, setOpacity] = useState(new Animated.Value(1));
  const menu = useSelector(state => state.menu);

  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
  }, []);
  useEffect(() => {
    toggleMenu();
  }, [menu]);

  const toggleMenu = () => {
    if (menu.action === 'openMenu') {
      Animated.timing(scale, {
        toValue: 0.9,
        useNativeDriver: false,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false
      }).start();
      StatusBar.setBarStyle("light-content", true);
    }
    if (menu.action === 'closeMenu') {
      Animated.timing(scale, {
        toValue: 1,
        useNativeDriver: false,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false
      }).start();
      StatusBar.setBarStyle("dark-content", true);

    }
  };


  const dispatch = useDispatch();
  return (
    <RootView>
      <Menu />
      <AnimatedContainer style={{ transform: [{ scale: scale }], opacity: opacity }}>
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <TouchableOpacity
                onPress={() => dispatch(openMenu())}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 20
                }}
              >
                <Avatar source={require('../assets/avatar.jpg')} />
              </TouchableOpacity>
              <Title>Welcome back,</Title>
              <Name>Alpha</Name>
              <NotificationIcon
                style={{
                  position: "absolute",
                  right: 20,
                  top: 5
                }}
              />
            </TitleBar>
            <ScrollView
              style={{
                flexDirection: 'row',
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {
                logos.map((e, i) => {
                  return (
                    <Logo key={i} image={e.image} text={e.text} />
                  );
                })
              }

            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {
                cards.map((e, i) => {
                  return <Card
                    key={i}
                    title={e.title}
                    image={e.image}
                    caption={e.caption}
                    logo={e.logo}
                    subtitle={e.subtitle}
                  />;
                })
              }
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {
              courses.map((e, i) => {
                return <Course
                  key={i}
                  image={e.image}
                  title={e.title}
                  subtitle={e.subtitle}
                  logo={e.logo}
                  author={e.author}
                  avatar={e.avatar}
                  caption={e.caption}
                />;
              })
            }
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
}

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left:80px;
  `;

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  },

];

const cards = [
  {
    title: "React Native",
    image: require('../assets/background11.jpg'),
    subtitle: "React native",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png')
  },
  {
    title: "Styled Components",
    image: require('../assets/background12.jpg'),
    subtitle: "Styled Components",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png')
  },
  {
    title: "Props and Icons",
    image: require('../assets/background13.jpg'),
    subtitle: "Reactive native",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png')
  },
  {
    title: "Static Data and Loop",
    image: require('../assets/background14.jpg'),
    subtitle: "Reactive native",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png')
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Kaskar',
    avatar: require('../assets/avatar.jpg'),
    caption: "Design and Interactive Prototype"
  },
  {
    title: "React for Designers",
    subtitle: "10 sections",
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Kaskar',
    avatar: require('../assets/avatar.jpg'),
    caption: "Learn to design and code a react site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Kaskar',
    avatar: require('../assets/avatar.jpg'),
    caption: "Design and Interactive Prototype"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Kaskar',
    avatar: require('../assets/avatar.jpg'),
    caption: "Design and Interactive Prototype"
  },
];
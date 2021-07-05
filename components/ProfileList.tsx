/* eslint-disable react-native/no-raw-text */
import { SocketContext } from '../contexts/SocketContext';
import React, { useState, useContext, useEffect } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import { UserData } from '../hooks/types';
import { MediumText, LightText } from './StyledText';
import { ListHeaderComponent } from '../containers/ListHeaderComponent';
import { useNavigation } from '@react-navigation/native';
import { useThemeColor, View } from './Themed';

const INITIAL_DATA_TO_RENDER = 9;
const CHEVRON_SIZE = 30;
const AVATAR_SIZE = 52;

interface SocketContent {
  userData: UserData[];
  updateListData: () => void;
}

let backgroundColor;

const ProfileList = (): JSX.Element => {
  const { userData, updateListData } = useContext<SocketContent>(SocketContext);
  const navigation = useNavigation();
  const color = useThemeColor({}, 'textPrimary');
  backgroundColor = color;
  const [initialLoaded, setInitialLoaded] = useState(false);
  const mockData = [];

  for (let i = 0; i < 10; i++) {
    mockData.push({ mock: i.toString() });
  }

  useEffect(() => {
    if (userData.length > INITIAL_DATA_TO_RENDER) setInitialLoaded(true);
  }, [userData.length]);

  const handleNavigation = (item: UserData) => {
    const { name, dob, gender, coordinates, picture } = item;

    return navigation.navigate('UserProfileScreen', {
      userInfo: {
        firstName: name.first,
        lastName: name.last,
        age: dob.age,
        gender: gender,
        location: coordinates,
      },
      imageUrl: picture.medium,
    });
  };

  const indicator = () => (
    <ActivityIndicator size="large" color={color} animating />
  );
  const listItem = ({ item }: { item: UserData }): JSX.Element => {
    return (
      <ListItem
        bottomDivider
        containerStyle={styles.listItemContainer}
        onPress={() => handleNavigation(item)}
      >
        <Avatar
          source={{ uri: item.picture.thumbnail }}
          rounded
          size={AVATAR_SIZE}
        />
        <ListItem.Content>
          <ListItem.Title>
            <MediumText>{`${item.name.first}, ${item.dob.age}`}</MediumText>
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
          size={CHEVRON_SIZE}
          onPress={() => handleNavigation(item)}
        />
      </ListItem>
    );
  };

  const skeletonItem = (): JSX.Element => {
    return (
      <ListItem bottomDivider containerStyle={styles.listItemContainer}>
        <Avatar
          rounded
          source={require('../assets/images/pbr_user/pbr_user.png')}
          containerStyle={styles.avatarContainer}
          avatarStyle={styles.avatar}
        />
        <ListItem.Content>
          <ListItem.Title>
            <LightText>Loading...</LightText>
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={CHEVRON_SIZE} />
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      {initialLoaded && userData.length > 0 ? (
        <FlatList
          style={styles.flatList}
          data={userData}
          keyExtractor={(item) => item.uuid}
          renderItem={listItem}
          initialNumToRender={INITIAL_DATA_TO_RENDER}
          onEndReached={updateListData}
          ListHeaderComponent={ListHeaderComponent}
          stickyHeaderIndices={userData.length > 0 ? [0] : [1]}
          ListFooterComponentStyle={styles.footerComponent}
          ListFooterComponent={indicator}
          onEndReachedThreshold={0.5}
        />
      ) : (
        <FlatList
          style={styles.flatList}
          data={mockData}
          keyExtractor={(item) => item.mock}
          renderItem={skeletonItem}
          ListHeaderComponent={ListHeaderComponent}
          stickyHeaderIndices={[0]}
        />
      )}
    </View>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  listItemContainer: {
    flex: 1,
    backgroundColor,
  },
  avatarContainer: {
    width: 50,
    height: 50,
  },

  footerComponent: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  flatList: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 45,
    padding: 20,
  },
});

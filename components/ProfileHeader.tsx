/* eslint-disable react-native/no-raw-text */
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { MediumText, LightText, MediumTextSecondary } from './StyledText';
import { useThemeColor, View } from './Themed';

const ICON_SIZE = 40;

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  imageUrl: string;
}
const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  firstName,
  lastName,
  imageUrl,
}): JSX.Element => {
  const navigation = useNavigation();
  const color = useThemeColor({}, 'textPrimary');
  return (
    <>
      <View style={styles.titleContainer}>
        <Ionicons
          name="arrow-back"
          size={ICON_SIZE}
          color={color}
          style={styles.backArrow}
          onPress={() => navigation.goBack()}
        />
        <LightText style={styles.title}>MY PROFILE</LightText>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
        </View>
        <View style={styles.nameContainer}>
          <MediumTextSecondary style={styles.nameTitle}>
            Name
          </MediumTextSecondary>
          <MediumText style={styles.name}>
            {firstName} {lastName}
          </MediumText>
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.43,
    marginLeft: 24,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 0.57,
    marginLeft: 24,
    flexDirection: 'row',
    marginBottom: 25,
  },
  nameContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  avatarContainer: {
    flex: 0.4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    marginLeft: 55,
  },
  nameTitle: {
    fontSize: 16,
    marginBottom: 9,
  },
  backArrow: {
    position: 'absolute',
    top: -10,
  },
  name: {
    fontSize: 20,
  },
});

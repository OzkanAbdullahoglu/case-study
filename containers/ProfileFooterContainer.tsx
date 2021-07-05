/* eslint-disable react-native/no-raw-text */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MediumTextSecondary } from '../components/StyledText';
import {
  useThemeColor,
  View,
  ViewWithBordersPrimary,
  ViewWithBordersSecondary,
} from '../components/Themed';
interface ProfileFooterContainerProps {
  gender: string;
  userAge: number;
}

const LIGHT_BACKGROUND_COLOR = 'rgba(99, 116, 243, 0.5)';
const DARK_BACKGROUND_COLOR = 'rgba(252, 252, 231, 0.5)';
const ICON_SIZE = 72;

export const ProfileFooterContainer: React.FC<ProfileFooterContainerProps> = ({
  gender,
  userAge,
}) => {
  const iconColor = useThemeColor({}, 'borderPrimary');

  return (
    <View style={styles.container}>
      <View style={styles.gender2}>
        <View style={styles.genderContainer}>
          <MediumTextSecondary style={styles.titles}>
            Gender
          </MediumTextSecondary>
          {gender === 'male' ? (
            <MaterialCommunityIcons
              style={styles.icon}
              name="gender-male"
              size={ICON_SIZE}
              color={iconColor}
            />
          ) : (
            <MaterialCommunityIcons
              style={styles.icon}
              name="gender-female"
              size={ICON_SIZE}
              color={iconColor}
            />
          )}
        </View>
        <ViewWithBordersSecondary style={styles.verticalPath} />
      </View>
      <View style={styles.ageContainer}>
        <View style={styles.ageChildrenContainer}>
          <MediumTextSecondary style={styles.titles}>Age</MediumTextSecondary>
          <MediumTextSecondary style={styles.ageTitle}>
            {userAge} y.o
          </MediumTextSecondary>
          <ViewWithBordersPrimary style={styles.longPath} />
        </View>
        <View
          style={styles.ageChildrenContainer}
          lightColor={LIGHT_BACKGROUND_COLOR}
          darkColor={DARK_BACKGROUND_COLOR}
        >
          <ViewWithBordersPrimary style={styles.path} />
          <ViewWithBordersPrimary style={styles.path} />
          <ViewWithBordersPrimary style={styles.path} />
          <ViewWithBordersPrimary style={styles.path} />
          <ViewWithBordersPrimary style={styles.path} />
          <ViewWithBordersPrimary style={styles.path} />
          <ViewWithBordersPrimary style={styles.path} />
          <ViewWithBordersPrimary style={styles.path} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    flexDirection: 'row',
  },
  genderContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gender2: {
    flex: 0.38,
    flexDirection: 'row',
  },
  ageContainer: {
    flex: 0.62,
    flexDirection: 'column',
  },
  ageChildrenContainer: {
    flex: 0.5,
  },
  verticalPath: {
    alignSelf: 'flex-end',
    height: '100%',
    borderLeftWidth: 1,
  },
  longPath: {
    right: 0,
    position: 'absolute',
    bottom: 0,
    width: '37%',
    borderBottomWidth: 3,
  },
  path: {
    alignSelf: 'flex-end',
    width: '9%',
    borderBottomWidth: 1,
    marginTop: 8,
    opacity: 1,
  },
  titles: {
    marginLeft: 23,
    marginTop: 15,
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  ageTitle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 5,
    right: 40,
    fontSize: 16,
  },
  icon: {
    alignSelf: 'flex-end',
    marginBottom: '15%',
    marginRight: '25%',
  },
});

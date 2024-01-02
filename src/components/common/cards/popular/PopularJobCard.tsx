import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './popularjobcard.style';
import {COLORS} from '../../../../constants';
import {checkImageURL} from '../../../../utils/check-image-url.ts';
import {IDaum} from '../../../../types';
import {defaultImage} from '../../../../constants/images.ts';

interface PopularJobCardProps {
  item: IDaum;
  selectedJob: any;
  handlePressCard: (card: IDaum) => void;
}

const PopularJobCard: FC<PopularJobCardProps> = ({
  selectedJob,
  handlePressCard,
  item,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
      }}
      onPress={() => handlePressCard(item)}>
      <TouchableOpacity
        style={{
          ...styles.logoContainer,
          backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
        }}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo ?? '')
              ? item.employer_logo
              : defaultImage,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          numberOfLines={1}
          style={{
            ...styles.jobName,
            color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
          }}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

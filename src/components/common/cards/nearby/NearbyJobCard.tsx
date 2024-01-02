import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './nearbyjobcard.style.ts';
import {checkImageURL} from '../../../../utils/check-image-url.ts';
import {IDaum} from '../../../../types';
import {defaultImage} from '../../../../constants/images.ts';

interface PopularJobCardProps {
  job: IDaum;
  handleNavigate: () => void;
}

const PopularJobCard: FC<PopularJobCardProps> = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo ?? '')
              ? job.employer_logo
              : defaultImage,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

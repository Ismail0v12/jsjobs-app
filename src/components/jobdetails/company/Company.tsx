import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './company.style';
import {IDaum} from '../../../types';
import {checkImageURL} from '../../../utils/check-image-url.ts';
import {defaultImage} from '../../../constants/images.ts';
import {icons} from '../../../constants';

const Company: FC<
  Pick<IDaum, 'employer_logo' | 'job_title' | 'employer_name' | 'job_country'>
> = ({employer_name, employer_logo, job_title, job_country}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(employer_logo ?? '')
              ? employer_logo
              : defaultImage,
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{job_title}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{employer_name} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{job_country}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;

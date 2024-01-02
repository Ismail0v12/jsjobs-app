import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';

import styles from './about.style';
import {IDaum} from '../../../types';

const About: FC<Pick<IDaum, 'job_description'>> = ({job_description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{job_description}</Text>
      </View>
    </View>
  );
};

export default memo(About);

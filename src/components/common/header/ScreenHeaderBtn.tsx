import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './screenheader.style';

interface ScreenHeaderBtnProps {
  icon: any;
  width: number;
  height: number;
  handlePress?: () => void;
}

const ScreenHeaderBtn: FC<ScreenHeaderBtnProps> = ({
  icon,
  height,
  width,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={icon}
        style={{
          ...styles.btnImg,
          width,
          height,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

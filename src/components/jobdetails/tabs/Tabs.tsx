import React, {FC} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './tabs.style';
import {COLORS, SIZES} from '../../../constants';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabButtonProps extends Pick<TabsProps, 'activeTab'> {
  name: string;
  onHandleSearchType: () => void;
}

const TabButton: FC<TabButtonProps> = ({
  activeTab,
  name,
  onHandleSearchType,
}) => {
  return (
    <TouchableOpacity
      onPress={onHandleSearchType}
      style={{
        ...styles.btn,
        backgroundColor: name === activeTab ? COLORS.primary : '#F3F4F8',
      }}>
      <Text
        style={{
          ...styles.btnText,
          color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const Tabs: FC<TabsProps> = ({setActiveTab, tabs, activeTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          columnGap: SIZES.small / 2,
        }}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TabButton
            activeTab={activeTab}
            name={item}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  );
};

export default Tabs;

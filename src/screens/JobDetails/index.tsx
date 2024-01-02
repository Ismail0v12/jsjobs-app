import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import {useFetch} from '../../hooks/useFetch.ts';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  Specifics,
} from '../../components';
import {IDaum} from '../../types';

const tabs = ['About', 'Qualification', 'Responsibilities'];

const JobDetails = () => {
  const route = useRoute();
  // @ts-ignore
  const jobId = route.params.id;
  const {data, error, refetchData, isLoading} = useFetch<IDaum[]>(
    'job-details',
    {
      job_id: jobId,
    },
  );
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {
    console.log('REFRESHING');
  };

  const displayContent = () => {
    switch (activeTab) {
      case 'Qualification':
        return (
          <Specifics
            title="Qualifications"
            points={data![0].job_highlights.Qualifications ?? ['N/A']}
          />
        );
      case 'About':
        return (
          <JobAbout job_description={data ? data[0]?.job_description : 'N/A'} />
        );
      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={data![0].job_highlights.Responsibilities ?? ['N/A']}
          />
        );
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data?.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <Company
              job_country={data ? data[0].job_country : ''}
              job_title={data ? data[0].job_title : ''}
              employer_name={data ? data[0].employer_name : ''}
              employer_logo={data ? data[0].employer_logo : ''}
            />
            <JobTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs}
            />
            {displayContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data
            ? data[0]?.job_google_link
            : 'https://careers.google.com/job/results'
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;

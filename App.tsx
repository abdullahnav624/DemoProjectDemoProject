import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Ayahs, QuranAllSurahs} from './myInterfaces';
import { Muttaqi } from './QuranInterfaces';




const App = () => {
  const [apiData, setapiData] = useState<Muttaqi>();

  const getApiData = async () => {
    const url = 'https://api.alquran.cloud/v1/quran/quran-uthmani';
    let response = await fetch(url);
    let result = await response.json();
    const data: Muttaqi = result;
    setapiData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      }}>
      <Text style={{fontSize: 40}}>{apiData?.data.surahs[113].name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 40,paddingRight:15}}>
          {apiData?.data.surahs[113].englishName}
        </Text>
        <Text style={{fontSize: 20}}>
          ({apiData?.data.surahs[113].englishNameTranslation})
        </Text>
      </View>
      <Text style={{fontSize: 25,paddingBottom:5}}>
        ({apiData?.data.surahs[113].revelationType})
      </Text>

      <FlatList
        data={apiData?.data.surahs[113].ayahs}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              borderWidth: 15,
              borderColor: 'green',
              borderRadius: 30,
              margin: 5,
            }}>
            <Text style={{fontSize: 30, padding: 10}}>{item.text}</Text>
            <View style={{alignItems: 'center', padding: 10}}>
              <Text style={{fontSize: 30}}>Info:</Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                <Text style={styles.info}>
                  Ayah number in Surah:{item.numberInSurah}
                </Text>
                <Text style={styles.info}>Hizb Quarter:{item.hizbQuarter}</Text>
                <Text style={styles.info}>Juz:{item.juz}</Text>
                <Text style={styles.info}>Manzil:{item.manzil}</Text>
                <Text style={styles.info}>Page no:{item.page}</Text>
                <Text style={styles.info}>Ruku:{item.ruku}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    paddingLeft: 15,
    fontSize: 20,
  },
});

export default App;

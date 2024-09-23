import { Ayahs, QuranAllSurahs } from "./myInterfaces";

const getAyahs = (jsonAyahs: any) => {
  var ayahs: Ayahs;
  
  jsonAyahs.forEach((element: any) => {
    ayahs.number = element['number'];
    ayahs.numberInSurah = element['numberInSurah'];
    ayahs.text = element['text'];
    ayahs.enText = element['enText'];
    ayahs.manzil = element['manzil'];
    ayahs.ruku = element['ruku'];
  });
  
};

const quranData = (jsonData: any) => {
  var quranData: QuranAllSurahs;

  jsonData.forEach((jsonSurahs: any) => {
    quranData.number = jsonSurahs['number'];
    quranData.name = jsonSurahs['name'];
    quranData.enName = jsonSurahs['enName'];
    quranData.type = jsonSurahs['type'];
    quranData.enTranslation = jsonSurahs['enTranslation'];
    quranData.numberOfAyahs = jsonSurahs['numberOfAyahs'];
    quranData.numberOfRukoos = jsonSurahs['numberOfRukoos'];
    quranData.surahDetails = getAyahs(jsonSurahs["surahDetails"]);
  });
};
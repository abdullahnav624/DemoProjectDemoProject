export interface  Ayahs {
    number: string;
    text: string;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: boolean;
  }
  
  export interface  Surahs {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
    ayahs: Ayahs[];
  }
  
  export interface  Edition {
    identifier: string;
    language: string;
    name: string;
    englishName: string;
    format: string;
    type: string;
  }
  
  export interface  Data {
    surahs: Surahs[];
    edition: Edition;
  }
  
  export interface  QuranApi {
    code: number;
    status: string;
    data: Data;
  }
  
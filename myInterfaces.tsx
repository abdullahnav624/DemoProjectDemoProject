export interface Ayahs {
    number:number
    numberInSurah:number
    text:string
    enText:string
    manzil:number
    ruku:number
  }
  
  export interface SurahDetails {
    ayahs: Ayahs[];
  }
  
  export interface QuranAllSurahs {
    number: number;
    name: string;
    enName: string;
    type: string;
    enTranslation: string;
    numberOfAyahs: number;
    numberOfRukoos: number;
    surahDetails: SurahDetails[];
  }
  
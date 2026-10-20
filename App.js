import { View, Text, Pressable, ScrollView, TextInput, Platform } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { styles } from './styles';
import { DEFAULT_JINGLES, EMPTY_PHRASES, PANIC_MP3, JINGLE_COLORS, EMPTY_SLOTS, LAMEJS_URL } from './constants';
import { vibrate, fileToDataUrl, loadTracksFromIDB, saveTracksToIDB, fmt, fmtJingle, shortName, generateWaveAndBPM } from './utils';

export default function App(){
  // ... VISAS TAVO KODAS NUO useState IKI return() - BET BE STYLES ...
}
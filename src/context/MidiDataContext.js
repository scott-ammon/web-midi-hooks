import React from 'react';

const MidiDataContext = React.createContext({
  deviceName: null,
  keyData: [],
  pitch: 64,
  modulation: 0,
  errors: null
});

export default MidiDataContext;
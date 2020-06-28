// This file serves as the entry point to bundle the web-midi-hooks package

import MidiDataContext from './context/MidiDataContext';
import MidiProvider from './context/MidiProvider';
import DummyComponent from './DummyComponent';

export default { DummyComponent, MidiProvider, MidiDataContext };
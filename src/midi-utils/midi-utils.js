import * as Constants from '../constants';

export async function setUpMIDIAccess() {
  if (navigator.requestMIDIAccess) {
    try {
      const midiAccess = await navigator.requestMIDIAccess();
      const midiInput = getMidiInput(midiAccess);

      return midiInput;
    } catch (error) {
      console.error(Constants.CONNECTION_ERROR);
    }
  } else {
    alert(Constants.UNSUPPORTED_BROWSER_ERROR);
  }
}

const getMidiInput = (midiAccess) => {
  const activeInput = midiAccess.inputs.get(Constants.MIDI_INPUT);
  const midiInput = activeInput ? activeInput : { errors: Constants.NO_DEVICE_ON_STARTUP_ERROR };

  return midiInput;
}
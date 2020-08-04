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
  // Avoids issue of device renaming on different computers, but restricts us to 1 device connected at a time
  const iter = midiAccess.inputs.keys();
  const activeInputId = iter.next().value;
  const activeInput = midiAccess.inputs.get(activeInputId);

  const midiInput = activeInput ? activeInput : { errors: Constants.NO_DEVICE_ON_STARTUP_ERROR };

  return midiInput;
}
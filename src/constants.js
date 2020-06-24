// MIDI object constants
export const EVENT_INDEX = 0;
export const LEAST_SIGNIFICANT_BYTE_INDEX = 1;
export const MOST_SIGNIFICANT_BYTE_INDEX = 2;
export const NOTE_ON_EVENT = 144;
export const NOTE_OFF_EVENT = 128;
export const PITCH_BEND_EVENT = 224;
export const MODULATION_EVENT = 176;
export const MIDI_INPUT = "input-0";

// MIDI states
export const DISCONNECTED = "disconnected";
export const CONNECTED = "connected";

// MIDI Errors
export const NO_DEVICE_ERROR = "Error: No device found.";
export const NO_DEVICE_ON_STARTUP_ERROR = "Error: No device found. Please connect a device and refresh your browser.";
export const CONNECTION_ERROR = "Error: Could not establish access to Web MIDI Api.";
export const UNSUPPORTED_BROWSER_ERROR = "Web MIDI Api is not supported in this browser.";

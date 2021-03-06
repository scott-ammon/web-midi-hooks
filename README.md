# Web MIDI Hooks
A React wrapper around the Web MIDI API using the `useContext` hook to pass MIDI data to components in your React app.

## Getting Started
There are two main components to this package:

`MidiProvider` - This component handles connection to MIDI devices and collects incoming MIDI data using the Web MIDI API. This allows you to pass the incoming messages down the component tree without using props.

`MidiDataContext` - This component should be imported in each component you want to recieve MIDI data. It can be used anywhere in the app, without passing the MIDI data down through props, as it receives its data from the MidiProvider at the top level of your app.

To use in your project follow these steps:

1. In the root file of your React app, typically `index.js`, import `MidiProvider` and wrap it around your React `<App/>` Component as shown below. This component will attempt to establish a connection to a MIDI device on app startup, and subsequently provide data based on incoming MIDI messages.

    ```JSX
    import { MidiProvider } from './context/MidiProvider';

    ReactDOM.render(
      <React.StrictMode>
        <MidiProvider>
          <App />
        </MidiProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```
2. Create a component in your app that you want to import MIDI data into, and import `MidiDataContext` into this component, along with React's `useContext` hook as shown below. This example passes the connected MIDI device's name and incoming keyData which contains the key pressed and associated velocity value.

    ```JSX
    import React, { useContext } from 'react';
    import { MidiDataContext } from '../context/MidiDataContext';

    const ExampleComponent = () => {
      const { deviceName, keyData } = useContext(MidiDataContext);

      return (
        <div>
          <h1>{deviceName}</h1>
          {keyData.map((key, i) => {
            return <p key={i}>{key.note}</p>
          })}
        </div>
      );
    };
    
    export default ExampleComponent;
    ```
## Available Data
MidiDataContext has the following props available:

  `deviceName` - string name of the connected device, provided by the device itself

  `keyData` - an array of note/velocity objects representing key presses, in the form: 
  ```JavaScript
  keyData = [{ 
    note: 68,
    velocity: 114
  }]
  ```
  `pitch` - number from 0-127 representing the pitch bend, where the midpoint 64 is no bend.

  `modulation` - number from 0-127

  `errors` - string that is populated when device connection problems occur
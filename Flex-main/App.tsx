// import React, { useEffect } from 'react';
// import messaging from '@react-native-firebase/messaging';
// import Home from './Home'; // Import Home screen directly

// const App: React.FC = () => {
//   useEffect(() => {
//     // Request user permissions for notifications
//     const requestUserPermission = async () => {
//       try {
//         const authStatus = await messaging().requestPermission();
//         const enabled =
//           authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//           authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//         if (enabled) {
//           console.log('Notification permissions granted:', authStatus);
//         } else {
//           console.warn('Notification permissions not granted');
//         }
//       } catch (error) {
//         console.error('Error requesting notification permissions:', error);
//       }
//     };

//     // Fetch and log the FCM token
//     const fetchFCMToken = async () => {
//       try {
//         const token = await messaging().getToken();
//         console.log('FCM Token:', token);
//       } catch (error) {
//         console.error('Error fetching FCM token:', error);
//       }
//     };

//     // Handle foreground notifications
//     const handleForegroundMessages = () => {
//       const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//         console.log('Foreground message received:', remoteMessage);
//       });

//       return unsubscribe; // Unsubscribe when component unmounts
//     };

//     const initializeFCM = async () => {
//       await requestUserPermission();
//       await fetchFCMToken();
//       handleForegroundMessages();
//     };

//     initializeFCM();

//     // Optional: Handle background/quit-state messages (for iOS or Android)
//     messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//       console.log('Background message received:', remoteMessage);
//     });
//   }, []);

//   // Render Home screen directly
//   return <Home />;
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import messaging from '@react-native-firebase/messaging';
// import Name from './Name';
// import Age from './Age';
// import Gender from './Gender';
// import Height from './Height';
// import Weight from './Weight';
// import Goal from './Goal';
// import BodyType from './BodyType';
// import Equipments from './Equipments';
// import Home from './Home';

// const App: React.FC = () => {
//   const [screen, setScreen] = useState<'name' | 'age' | 'gender' | 'height' | 'weight' | 'goal' | 'bodyType' | 'equipments' | 'home'>('name');

//   useEffect(() => {
//     const requestUserPermission = async () => {
//       try {
//         const authStatus = await messaging().requestPermission();
//         const enabled =
//           authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//           authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//         if (enabled) {
//           console.log('Notification permissions granted:', authStatus);
//         } else {
//           console.warn('Notification permissions not granted');
//         }
//       } catch (error) {
//         console.error('Error requesting notification permissions:', error);
//       }
//     };

//     const fetchFCMToken = async () => {
//       try {
//         const token = await messaging().getToken();
//         console.log('FCM Token:', token);
//       } catch (error) {
//         console.error('Error fetching FCM token:', error);
//       }
//     };

//     const handleForegroundMessages = () => {
//       const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//         console.log('Foreground message received:', remoteMessage);
//       });

//       return unsubscribe;
//     };

//     const initializeFCM = async () => {
//       await requestUserPermission();
//       await fetchFCMToken();
//       handleForegroundMessages();
//     };

//     initializeFCM();

//     messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//       console.log('Background message received:', remoteMessage);
//     });
//   }, []);

//   const renderScreen = () => {
//     switch (screen) {
//       case 'name':
//         return <Name onContinue={() => setScreen('age')} />;
//       case 'age':
//         return <Age onContinue={() => setScreen('gender')} />;
//       case 'gender':
//         return <Gender onContinue={() => setScreen('height')} />;
//       case 'height':
//         return <Height onContinue={() => setScreen('weight')} />;
//       case 'weight':
//         return <Weight onContinue={() => setScreen('goal')} />;
//       case 'goal':
//         return <Goal onContinue={() => setScreen('bodyType')} />;
//       case 'bodyType':
//         return <BodyType onContinue={() => setScreen('equipments')} />;
//       case 'equipments':
//         return <Equipments onContinue={() => setScreen('home')} />;
//       case 'home':
//         return <Home />;
//       default:
//         return <Name onContinue={() => setScreen('age')} />;
//     }
//   };

//   return <>{renderScreen()}</>;
// };

// export default App;

import React, { useState, useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { FormProvider } from './FormContext'; // Import the FormProvider
import Name from './Name';
import Age from './Age';
import Gender from './Gender';
import Height from './Height';
import Weight from './Weight';
import Goal from './Goal';
import BodyType from './BodyType';
import Equipments from './Equipments';
import Home from './Home';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<
    'name' | 'age' | 'gender' | 'height' | 'weight' | 'goal' | 'bodyType' | 'equipments' | 'home'
  >('name');

  useEffect(() => {
    const initializeFCM = async () => {
      try {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Notification permissions granted:', authStatus);
        }

        const token = await messaging().getToken();
        console.log('FCM Token:', token);

        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
          console.log('Foreground message received:', remoteMessage);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('Error initializing FCM:', error);
      }
    };

    initializeFCM();

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Background message received:', remoteMessage);
    });
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'name':
        return <Name onContinue={() => setCurrentScreen('age')} />;
      case 'age':
        return <Age onContinue={() => setCurrentScreen('gender')} />;
      case 'gender':
        return <Gender onContinue={() => setCurrentScreen('height')} />;
      case 'height':
        return <Height onContinue={() => setCurrentScreen('weight')} />;
      case 'weight':
        return <Weight onContinue={() => setCurrentScreen('goal')} />;
      case 'goal':
        return <Goal onContinue={() => setCurrentScreen('bodyType')} />;
      case 'bodyType':
        return <BodyType onContinue={() => setCurrentScreen('equipments')} />;
      case 'equipments':
        return <Equipments onContinue={() => setCurrentScreen('home')} />;
      case 'home':
        return <Home />;
      default:
        return <Name onContinue={() => setCurrentScreen('age')} />;
    }
  };

  return (
    <FormProvider> {/* Wrap the app in the FormProvider */}
      {renderScreen()}
    </FormProvider>
  );
};

export default App;

import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { RecoilRoot } from 'recoil';
import Toast from "react-native-toast-message";
import { toastConfig } from "config";


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RecoilRoot>
          <Navigation />
          <Toast config={toastConfig} />
        </RecoilRoot>
      </SafeAreaProvider>
    );
  }
}

import { useState, useEffect } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

type currentNetwork = boolean | null;
type CheckConnectionType = boolean | null;

let currentNetwork: currentNetwork;

NetInfo.fetch().then((state: NetInfoState) => {
  currentNetwork = state.isConnected;
});

const CheckConnection = (): CheckConnectionType => {
  const [netInfo, setNetInfo] = useState<currentNetwork>(currentNetwork);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setNetInfo(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return netInfo;
};

export default CheckConnection;

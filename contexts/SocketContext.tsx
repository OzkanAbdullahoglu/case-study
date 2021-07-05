import React, { useCallback, useEffect, useRef, useState } from 'react';
import { UserData } from '../hooks/types';
import dataHandler from '../utils/socketHelper';

const INITIAL_DATA_LENGTH = 50;
const DATA_CHUNK_LENGTH = 500;
const CLOSED = 3;

type ISocketContext = {
  userData: UserData[];
  updateListData: () => void;
};

export const SocketContext = React.createContext<ISocketContext>(null);

const url =
  'wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket';

let webSocket = new WebSocket(url);

export const WrappedSocketManager: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isUnmounted, setIsUnMounted] = useState(false);
  const dataContainer = useRef<UserData[]>([]);

  const connect = useCallback(() => {
    if (
      webSocket === undefined ||
      (webSocket && webSocket.readyState === CLOSED)
    ) {
      webSocket = new WebSocket(url);
    }
    webSocket.onopen = () => {
      console.log('connection established');
    };
    webSocket.onclose = () => {
      console.log('connection lost');
      if (isUnmounted) {
        setIsUnMounted(false);
        console.log('connection closed by app');
      } else {
        connect();
      }
    };
    webSocket.onmessage = (message: MessageEvent) => {
      try {
        const data = dataHandler(message.data);
        data && dataContainer.current.push(data);
        if (data && dataContainer.current.length < INITIAL_DATA_LENGTH) {
          setUserData((userData) => [...userData, data]);
        }
      } catch (error) {
        console.log(error, 'err');
      }
    };
  }, [isUnmounted]);

  useEffect(() => {
    connect();
    return () => {
      try {
        if (webSocket) {
          webSocket.close();
          console.log('connection closed by app');
        }
      } catch (e) {
        console.log(e, 'closure error');
      }
    };
  }, [connect]);

  const updateListData = () => {
    const availableData = dataContainer.current.length - userData.length;
    if (availableData > 0 && availableData < DATA_CHUNK_LENGTH) {
      const getData = dataContainer.current.slice(
        userData.length,
        userData.length + availableData
      );
      setUserData((userData) => [...userData, ...getData]);
    } else {
      const getData = dataContainer.current.slice(
        userData.length,
        userData.length + DATA_CHUNK_LENGTH
      );
      setUserData((userData) => [...userData, ...getData]);
    }
  };

  return (
    <SocketContext.Provider
      value={{
        userData,
        updateListData,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default WrappedSocketManager;

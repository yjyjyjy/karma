import React, { useContext, createContext, useReducer } from 'react';

const initialContext = {
  ethBalance: '--',
  setEthBalance: () => { },

  nftBalance: '--',
  setNftBalance: () => { },

  mintCost: '--',
  setMintCost: () => { },

  isWalletConnectionModalOpen: false,
  setWalletConnectModal: () => { },

  txnStatus: 'NOT_SUBMITTED',
  setTxnStatus: () => { },
};

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ETH_BALANCE':
      return {
        ...state,
        ethBalance: payload,
      };

    case 'SET_NFT_BALANCE':
      return {
        ...state,
        nftBalance: payload,
      }

    case 'SET_MINT_COST':
      return {
        ...state,
        mintCost: payload,
      }

    case 'SET_WALLET_MODAL':
      return {
        ...state,
        isWalletConnectModalOpen: payload,
      };

    case 'SET_TXN_STATUS':
      return {
        ...state,
        txnStatus: payload,
      };
    default:
      return state;
  }
};

const AppContext = createContext(initialContext);
export const useAppContext = () => useContext(AppContext);
export const AppContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialContext);

  const contextValue = {
    ethBalance: store.ethBalance,
    setEthBalance: (balance) => {
      dispatch({ type: 'SET_ETH_BALANCE', payload: balance });
    },

    nftBalance: store.nftBalance,
    setNftBalance: (balance) => {
      dispatch({ type: 'SET_NFT_BALANCE', payload: balance })
    },

    mintCost: store.mintCost,
    setMintCost: (cost) => {
      dispatch({ type: 'SET_MINT_COST', payload: cost })
    },

    isWalletConnectModalOpen: store.isWalletConnectModalOpen,
    setWalletConnectModal: (open) => {
      dispatch({ type: 'SET_WALLET_MODAL', payload: open });
    },

    txnStatus: store.txnStatus,
    setTxnStatus: (status) => {
      dispatch({ type: 'SET_TXN_STATUS', payload: status });
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

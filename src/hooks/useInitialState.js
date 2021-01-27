import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const getCounters = (payload) => {
    setState({
      ...state,
      counters: payload,
    });
  };

  const addCounters = (payload) => {
    setState({
      ...state,
      counters: [...state.counters, payload],
    });
  };

  return {
    getCounters,
    addCounters,
    state,
  };
};

export default useInitialState;

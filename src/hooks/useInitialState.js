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

  return {
    getCounters,
    state,
  };
};

export default useInitialState;

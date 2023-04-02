import { useContext } from 'react';
import PopContext from '../Context/PopContext';

const usePop = () => {
    return useContext(PopContext);
}

export default usePop;
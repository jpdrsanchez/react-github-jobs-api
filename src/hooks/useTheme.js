import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return { dark, setDark };
};

export default useTheme;

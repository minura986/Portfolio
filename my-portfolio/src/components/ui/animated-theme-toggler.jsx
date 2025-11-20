import { Moon, SunDim } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/utils';

export const AnimatedThemeToggler = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark') || 
                 document.documentElement.getAttribute('data-theme') === 'dark';
    setIsDarkMode(dark);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;
    const toggleDom = () => {
      const dark = !isDarkMode;
      if (dark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
      setIsDarkMode(dark);
    };

    if (document.startViewTransition) {
      await document.startViewTransition(() => flushSync(toggleDom)).ready;
    } else {
      toggleDom();
    }
  };

  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      {isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};
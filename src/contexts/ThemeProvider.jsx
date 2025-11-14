import React, { Children, createContext, useContext, useEffect, useState } from 'react'
const ThemContext = createContext();
export const useTheme =()=>{
  const context  = useContext(ThemContext);
  if(!context){
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


const ThemeProvider = () => {

  const [isDarkMode , setIsDarkMode] = useState(false);

  useEffect(()=>{
    const saveTheme = localStorage.getItem('theme');
    if(saveTheme){
      setIsDarkMode(saveTheme === 'dark');
    }else{
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(preferDark);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if(isDarkMode){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  },[isDarkMode]);
  const toggleTheme = () =>{
    setIsDarkMode(prev => !prev);
  }
  const setTheme = (dark)=>{
    setIsDarkMode(dark);
  }

  const  value = {
    isDarkMode,
    toggleTheme,
    setTheme
  }

  


  return (
    <ThemContext.p value={value}>
      {children}
    </ThemContext.p>
  )
}

export default ThemeProvider


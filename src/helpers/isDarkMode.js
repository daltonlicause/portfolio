const IsDarkMode = () => {
  let darkMode = true;
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const matchedDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if(storedDarkMode != null) {
    darkMode = storedDarkMode === "true" ? true : false;
  } else if(matchedDarkMode) {
    darkMode = true
  } else {
    darkMode = false
  }

  return darkMode
}

export default IsDarkMode
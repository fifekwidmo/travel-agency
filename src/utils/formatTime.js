
export const formatTime = providedNumber => {
  if ((providedNumber) && (typeof(providedNumber) === 'number') && (providedNumber >= 0)) {
    const seconds = Math.floor(providedNumber%60);
    const mins = Math.floor(providedNumber/60%60);
    const hours = Math.floor(providedNumber/3600);
    const finalTime = [hours, mins, seconds].map(element => `${element+100}`.substring(1));
    return finalTime.join(':');
  } else {
    return null;
  } 
}; 
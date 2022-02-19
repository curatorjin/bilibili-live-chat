export const formatTime = time => {
  let sec = parseInt(time);
  let min = 0;
  if (sec >= 60) {
    min = parseInt(sec / 60);
    sec = parseInt(sec % 60);
  }
  sec = sec < 10 ? '0' + sec : sec;
  min = min < 10 ? '0' + min : min;
  return min + ':' + sec;
};

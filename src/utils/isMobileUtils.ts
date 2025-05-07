// tar reda på om användaren är på mobil device som kan använda touch
export function isMobile() {
  // Letar efter nyckelord i user agenten:
  const keyWords = /Android|iPhone|iPad/i.test(navigator.userAgent);
  console.log("userAgent nyckelord för mobilde device:", keyWords);

  // kollar efter touch punkter:
  // const hasTouchPoints = navigator.maxTouchPoints > 0;
  // console.log("tp", navigator.maxTouchPoints);

  // returnerar sant eller fakskt
  return keyWords;
}

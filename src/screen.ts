
const screenWidthIsMedium = (): boolean => {
  return window.innerWidth <= 768 && window.innerWidth > 640;
};

const screenWidthIsSmall = (): boolean => {
  return window.innerWidth <= 640;
};

export { screenWidthIsMedium, screenWidthIsSmall };
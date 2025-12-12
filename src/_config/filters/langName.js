export const langName = (code) => {
    const map = {
        fr: "Français",
        en: "English",
    };
  return map[code] || code;
};
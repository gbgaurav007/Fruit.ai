export const translateText = async (text, fromLang, toLang) => {
  const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLang}|${toLang}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  return data.responseData.translatedText;
};

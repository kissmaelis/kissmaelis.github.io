const supportedLanguageTags = ['en', 'fr'];
const defaultLanguageTag = 'fr';

function detectPreferredLanguageTag() {
    for (let preferredLanguageTag of navigator.languages) {
        preferredLanguageTag = preferredLanguageTag.toLowerCase();

        if (supportedLanguageTags.includes(preferredLanguageTag)) {
          return preferredLanguageTag;
        }

        const languageCode = preferredLanguageTag.split('-')[0];
        if (supportedLanguageTags.includes(languageCode)) {
          return languageCode;
        }
    }
    return null;
}

function redirectToLanguage() {
    const languageSwitched = sessionStorage.getItem('languageSwitched');
    if (languageSwitched) return;

    const preferredLanguageTag = detectPreferredLanguageTag();
    
    if (preferredLanguageTag && window.location.pathname === '/' && preferredLanguageTag !== defaultLanguageTag) {
        sessionStorage.setItem('languageSwitched', 'true');
        window.location.href = `/${preferredLanguageTag}`;
    }
}

redirectToLanguage();
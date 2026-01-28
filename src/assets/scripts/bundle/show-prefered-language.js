const supportedLanguageTags = ['en', 'fr'];
const defaultLanguageTag = 'fr';

export function detectPreferredLanguageTag() {
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


// Show banner if not previously closed
if (sessionStorage.getItem('languageBannerClosed') !== 'true') {
    document.getElementById('language-banner').style.display = 'block';
}

document.getElementById('close-banner').addEventListener('click', function() {
    sessionStorage.setItem('languageBannerClosed', 'true');
    document.getElementById('language-banner').style.display = 'none';
});

document.getElementById('redirect-button').addEventListener('click', function() {
    const preferredLanguageTag = detectPreferredLanguageTag();
    if (preferredLanguageTag) {
        // Redirect to the preferred language URL
        window.location.href = `/${preferredLanguageTag}/`;
    }
});

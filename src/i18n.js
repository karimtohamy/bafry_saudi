import { createI18n } from 'vue-i18n';

// Define the language directions
const langDirections = {
    en: 'ltr', // English is Left-to-Right
    ar: 'rtl'  // Arabic is Right-to-Left
};

// Function to load and merge locale messages dynamically
const loadLocaleMessages = () => {
    const locales = {
        en: {},
        ar: {}
    };

    const enFiles = import.meta.glob('./lang/en/*.json', { eager: true });
    const arFiles = import.meta.glob('./lang/ar/*.json', { eager: true });

    // Merge all English files into one object
    Object.keys(enFiles).forEach((file) => {
        const messages = enFiles[file].default;
        Object.assign(locales.en, messages);
    });

    // Merge all Arabic files into one object
    Object.keys(arFiles).forEach((file) => {
        const messages = arFiles[file].default;
        Object.assign(locales.ar, messages);
    });

    return locales;
};

// Get the user's language from the device (browser)
const deviceLanguage = navigator.language.split('-')[0]; // Extract language code (e.g., 'en', 'ar')

// Determine the initial locale (fallback to 'en' if the device language is not supported)
const initialLocale = ['en', 'ar'].includes(deviceLanguage) ? deviceLanguage : 'en';

// Create i18n instance with dynamically loaded messages
const i18n = createI18n({
    locale: initialLocale, // Set locale based on device's language or fallback to 'en'
    fallbackLocale: 'en',
    messages: loadLocaleMessages() // Load the messages dynamically
});

// Watch for locale changes and set the document direction
i18n.global.watchLocale = (newLocale) => {
    const direction = langDirections[newLocale] || 'ltr'; // Fallback to LTR if unknown
    document.documentElement.setAttribute('dir', direction); // Set the 'dir' attribute
};

// Set initial direction based on the current locale
i18n.global.watchLocale(i18n.global.locale.value);

export default i18n;

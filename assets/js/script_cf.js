function changeLanguage(language, flagClass, languageText) {
    document.getElementById('selected-flag').className = 'flag-icon ' + flagClass;
    document.getElementById('selected-language').textContent = languageText;
    localStorage.setItem('language', language);
    localStorage.setItem('selectedLanguage', JSON.stringify({ language, flagClass, languageText }));

    // Fetch and update content based on the selected language
    fetchLanguageData(language).then(updateContent);
}

async function fetchLanguageData(language) {
    // Implement fetching language data based on the language parameter
    // This is a placeholder function. Replace with actual data fetching logic.
    try {
        const response = await fetch(`../languages/${language}.json`);
        if (!response.ok) {
            throw new Error(`Error fetching language data: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Failed to fetch language data', error);
        return {}; // Return an empty object in case of error
    }
}

function updateContent(langData) {
    // Update the content of the page based on langData
    // Implement your content updating logic here
    console.log(langData); // For demonstration purposes
}

document.addEventListener('DOMContentLoaded', async () => {
    const savedLanguage = JSON.parse(localStorage.getItem('selectedLanguage'));
    if (savedLanguage) {
        document.getElementById('selected-flag').className = 'flag-icon ' + savedLanguage.flagClass;
        document.getElementById('selected-language').textContent = savedLanguage.languageText;
    }

    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    console.log('User Preferred Language:', userPreferredLanguage);
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
});


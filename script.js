
function modifyText(info,tab) {
    const selectedText = info.selectionText;

    // Effectuez vos modifications sur le texte sélectionné ici
    const text = selectedText.toLowerCase();
    const firstLetter = text.charAt(0)
    const firstLetterCapitalize = firstLetter.toUpperCase()
    const remainingLetters = text.slice(1)
    const modifiedText = firstLetterCapitalize + remainingLetters


    // Remplacez le texte sélectionné par le texte modifié
    const script = `
        document.execCommand("delete", false);
        document.execCommand("insertText", false, "${modifiedText}");
    `;
    browser.tabs.executeScript({
      code: script
    });
};

browser.contextMenus.create({
    title: "Corriger", 
    contexts:["selection"], 
    onclick: modifyText
});
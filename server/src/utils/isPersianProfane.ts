import dataset from './data/farsi.json'

/**
 * @param {String} text
 * @param {String[]} words
 * Searching the text for swear words
 */
function searchText(text, words) {
    return words.find(v => (text.includes(v))) ?? false;
}


/**
 *
 * @param {String} text
 */
function textCleaner(text) {

    // در مورد ارزش املایی خوندید تو فارسی دیگه؟ ما اینجا متن رو به ساده ترین حالت مینویسیم و درصد تشخیص بالا میره

    return text
        .trim()
        .replace(/[\p{P}\p{S}]/gu, "")
        .replace(/[\u0629\u0643\u0649-\u064B\u064D\u06D5]/gm, "")
        .replace(/[\u0020\u2000-\u200F\u2028-\u202F]/gm, "")
        .replace(/([\u064B-\u0652])/gm, "")
        .replace(/[\u064E\u064F\u0650\u0651\u0655]/gm)
        .replace(/[\u06F0-\u06F9]/gm, "")
        .replace(/\u0660-\u0669/gm, "")
        .replace(/\u200c/gm, "")
        .replace(/\s/gm, "")
        .replace(/\u0629/gm, "ه")
        .replace(/\u0643/gm, "ک")
        .replace(/\u0649/gm, "ی")
        .replace(/\u064A/gm, "ی")
        .replace(/\u064B/gm, "")
        .replace(/\u064D/gm, "")
        .replace(/\u06D5/gm, "ه")
        .replace(/ص/gm, "س")
        ///////////////////
        .replace(/ث/gm, "س")
        ///////////////////
        .replace(/ط/gm, "ت")
        ///////////////////
        .replace(/ذ/gm, "ز")
        ///////////////////
        .replace(/ض/gm, "ز")
        ///////////////////
        .replace(/ظ/gm, "ز")
        ///////////////////
        .replace(/آ/gm, "ا")
        .replace(/إ/gm, "ا")
        .replace(/أ/gm, "ا")
        ///////////////////
        .replace(/ح/gm, "ه");

}


/**
 * checks your text for persian bad/swear words.
 * @param {String} text - your text.
 * @returns Boolean - result of detection.
 */

export function isPersianProfane(text) {
    const cleaned = textCleaner(text);
    const lower = textCleaner(text.toLowerCase());

    return searchText(cleaned, dataset.farsiWords) || searchText(lower, dataset.finglishWords);
}


/**
 * Get the first bad word in the sentence
 * @param {String} text - your text.
 */
export function getBadWord(text) {

    return searchText(textCleaner(text), dataset.farsiWords) ?? searchText(textCleaner(text.toLowerCase()), dataset.finglishWords);
}

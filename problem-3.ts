{
    /// Problem 3 ///

    function countWordOccurrences(sentence: string, word: string): number {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const matches = sentence.match(regex);
        return matches ? matches.length : 0;
    }

    // console.log(countWordOccurrences("I love typescript", "typescript"));

    ///
}
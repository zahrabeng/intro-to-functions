function longestInList(words){
    let longest = words[0]
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest
}

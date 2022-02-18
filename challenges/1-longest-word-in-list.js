function longestInList(words){
    let longest = words[0]
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest
}

console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), "should be Northern Ireland")
console.log(longestInList(["the", "quick", "brown", "fox"]), "should be quick")
console.log(longestInList(["hello", "hi", "greetings", "hey"]), "should be greetings")


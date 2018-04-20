(function(){
    const HIDDEN_CODE = "corn"
    const currentSequence = []


    document.addEventListener("keyup", doesKeyMatchCode)

    function doesKeyMatchCode({ key }) {
        const letterToMatch = HIDDEN_CODE.charAt(currentSequence.length)

        console.log(letterToMatch, key)
        if (letterToMatch === key) {
            currentSequence.push(key)
        } else {
            currentSequence.length = 0
        }

        console.log("CURRENT SEQUENCE:", currentSequence)
        if (currentSequence.length === HIDDEN_CODE.length) {
            cornify_add()
            currentSequence.length = 0
        }
    }
})()


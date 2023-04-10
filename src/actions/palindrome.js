export default function isPalindromeRepository(input) {
    const reversed = reverseString(input)
    return compareStrings(input, reversed)
}

function reverseString(input) {
    const size = input.length
    let reversed = []
    let cont = 0
    for(let i = 0; i < size; i++) {
        reversed[size - cont] = input[i]
        cont++
    }
    return reversed.join('')
}

function compareStrings(s1, s2) {
    if (s1 === s2) return true
    return false
}
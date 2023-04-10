import isPalindromeRepository from '../../actions/palindrome'

export default function isPalindrome(ctx) {
    const result = isPalindromeRepository(ctx.params.input)
    ctx.body = { isPalindrome: result }
}
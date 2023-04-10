import Router from 'koa-router'
import getHealth from './health/health'

import isPalindrome from './palindrome/palindrome'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/palindrome/:input', isPalindrome)

export default router

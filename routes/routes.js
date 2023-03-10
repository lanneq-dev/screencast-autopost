import express from 'express'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Home')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

export default router;
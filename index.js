const express = require('express') 
const path = require('path')
const app = express()

const members = [
  {
    name: 'Vishal Sengar',
    email: 'vishalsengardtu@gmail.com',
    status: 'active'
  },
  {
    name: 'Siddhant Khichar',
    email: 'siddhantkhichar@gmail.com',
    status: 'inactive'
  },
  {
    name: 'Utkarsh Kharb',
    email: 'utkarshkharb.007@gmail.com',
    status: 'active'
  }
]

app.get('/api/members', (req, res) => {
  res.json(members)
})

// set static folder
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})
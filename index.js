const express = require('express')
require('./services/passport')

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 4200
app.listen(PORT)
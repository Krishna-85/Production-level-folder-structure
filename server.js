const app = require('./src/app')
const dbConnect = require('./src/db/db')
dbConnect()



app.listen(4000)
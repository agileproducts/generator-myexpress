express = require 'express'
path = require 'path'


app = express()


app.set('views', './app/views')
app.set('view engine', 'jade')
app.use express.static(path.join(__dirname, 'public'))


app.get '/', (req,res) ->
  res.render 'index'


app.listen process.env.VCAP_APP_PORT || 3000


module.exports = app
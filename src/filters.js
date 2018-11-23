const moment = require('moment')

export default {
  localDate: (dateString) => {
    return moment(dateString).format('MMMM Do YYYY, h:mm:ss a')
  }
}

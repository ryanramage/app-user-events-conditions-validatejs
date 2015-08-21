var validate = require('validate.js')

module.exports = function (trigger, doc, cb) {
  if (!trigger || !trigger.conditions || !trigger.conditions.constraints) {
    return cb('no constraints found, we cant run')
  }
  var errors = validate(doc, trigger.conditions.constraints)
  if (!errors) return cb(null, true)
  return cb(null, false)
}

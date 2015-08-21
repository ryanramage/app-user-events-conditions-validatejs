var mod = require('../lib/index')
var test = require('tape')

test('validates', function (t) {
  var trigger = {
    conditions: {
      constraints: {
        'data.creditCardNumber': {
          presence: true,
          format: {
            pattern: /^(34|37|4|5[1-5]).*$/,
            message: 'must be a valid Amex, Visa or Mastercard number'
          }
        }
      }
    }
  }

  var doc = {
    data: {
      creditCardNumber: '4242424242424242'
    }
  }

  mod(trigger, doc, function (err, result) {
    t.error(err)
    t.ok(result)
    t.end()
  })

})

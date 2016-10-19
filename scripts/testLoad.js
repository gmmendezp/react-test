var testsContext = require.context('../src', true, /.+\.test$/)
testsContext.keys().forEach(testsContext)

testsContext = require.context('../src', true, /.+\.spec$/)
testsContext.keys().forEach(testsContext)

testsContext = require.context('../tests/', true, /.+\$/)
testsContext.keys().forEach(testsContext)

import 'babel-core/register'
import test from 'ava'
import resolveIndent from './resolveIndent'

test('main', t => {
  const code = `import re
for test_string in ['555-1212', 'ILL-EGAL']:
    if re.match(r'^\d{3}-\d{4}$', test_string):
        print test_string, 'is a valid US local phone number'
    else:
        print test_string, 'rejected'
parents, babies = (1, 1)
while babies < 100:
    print 'This generation has {0} babies'.format(babies)
    parents, babies = (babies, parents + babies)`
  const result = resolveIndent(code)
  const expected = [ 'import re',
  'for test_string in [\'555-1212\', \'ILL-EGAL\']:\n    if re.match(r\'^d{3}-d{4}$\', test_string):\n        print test_string, \'is a valid US local phone number\'\n    else:\n        print test_string, \'rejected\'',
  'parents, babies = (1, 1)',
  'while babies < 100:\n    print \'This generation has {0} babies\'.format(babies)\n    parents, babies = (babies, parents + babies)' ]
  t.same(result, expected)
})

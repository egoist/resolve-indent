# resolve-indent 

[![NPM version](https://img.shields.io/npm/v/resolve-indent.svg)](https://www.npmjs.com/package/resolve-indent)
[![NPM download](https://img.shields.io/npm/dm/resolve-indent.svg)](https://www.npmjs.com/package/resolve-indent)
[![Build Status: Linux](https://travis-ci.org/egoist/resolve-indent.svg?branch=master)](https://travis-ci.org/egoist/resolve-indent)

Split code block by indent.

## Installation

```bash
npm i -S resolve-indent
```

## Example

**You have a source file:**

```python
import re
for test_string in ['555-1212', 'ILL-EGAL']:
    if re.match(r'^\d{3}-\d{4}$', test_string):
        print test_string, 'is a valid US local phone number'
    else:
        print test_string, 'rejected'
parents, babies = (1, 1)
while babies < 100:
    print 'This generation has {0} babies'.format(babies)
    parents, babies = (babies, parents + babies)
```

**You compile the code:**

```javascript
import resolveIndent from 'indent-resolve'
resolveIndent(code)
```

**You got the output:**

```
[
  "import re",

  "for test_string in ['555-1212', 'ILL-EGAL']:\n    if re.match(r'^d{3}-d{4}$', test_string):\n        print test_string, 'is a valid US local phone number'\n    else:\n        print test_string, 'rejected'\",

  "parents, babies = (1, 1)",

  "while babies < 100:\n    print 'This generation has {0} babies'.format(babies)\n    parents, babies = (babies, parents + babies)"
]
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)

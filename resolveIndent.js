function indentLevel (line) {
  line = line.match(/^(\s+)/g)
  const spaces =  line ? line[0] : line
  return spaces ? spaces.length/2 : 0
}

function error (level, index) {
  return `Expected no indent but found ${level*2} spaces indent at line ${index+1}`
}

export default function walk (code) {
  code = code.split(/\r?\n/)
  let pointTo = 0
  let topLevels = []
  let hasMeetFirstBlock = false
  code.forEach((line, index) => {
    if (!line.trim()) {
      return
    }
    const level = indentLevel(line)
    if (index === 0 && level !== 0) {
      throw new Error(error(level, index))
    }
    if (level === 0) {
      if (hasMeetFirstBlock) {
        pointTo++
      }
      topLevels[pointTo] = [line]
      hasMeetFirstBlock = true
    } else {
      topLevels[pointTo].push(line)
    }
  })
  return topLevels.map(level => level.join('\n'))
}

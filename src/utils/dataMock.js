/**
 * create a fake reactions with portions of
 * 1/2 of Likes, 1/3 of Hahas and 1/6 of Loves.
 * @param {numberTotal}
 *  How many reactions to make, must be greater than 2.
 * @returns {reactor}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The reactor's profile name
 *  @prop {type}
 *    The reactor's reaction type: `Like`, `Haha`, `Love`
 */
export const createReactions = (numberTotal = 16419) => {
  const reactor = [
    { name: '鍋苔冥', type: 'Like' },
    { name: '憨摑娛', type: 'Like' },
    { name: '找到田大學', type: 'Haha' },
    { name: '菜應蚊', type: 'Haha' },
    { name: '台灣工具伯 王進坪', type: 'Love' },
    { name: '叮守鐘', type: 'Love' }
  ]
  if (numberTotal < 2) throw new Error('Number of total must greater than 2.')
  const halfTotal = Math.ceil((numberTotal - 1) / 2)
  const oneThirdTotal = Math.ceil((numberTotal - 1) / 3)
  for (let i = 0; i < numberTotal; i++) {
    if (i < halfTotal) {
      reactor.push({ name: `Fake User ${i}`, type: 'Like' })
    } else if (i < halfTotal + oneThirdTotal) {
      reactor.push({ name: `Fake User ${i}`, type: 'Haha' })
    } else {
      reactor.push({ name: `Fake User ${i}`, type: 'Love' })
    }
  }
  return reactor
}

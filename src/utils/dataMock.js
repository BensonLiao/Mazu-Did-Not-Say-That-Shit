import { REACTIONS } from '../pages/actions'

/**
 * create fake reactions with default ratio of
 * 1/2 of Likes, 1/3 of Hahas and 1/6 of Loves
 * if @param {ratio} was omitted.
 * @param {numberTotal}
 *  How many reactions to make, must be greater than 2.
 * @param {ratio}
 *  How to distribute the ratio of reaction type,
 *  accept only an array of 1 to 6 numbers,
 *  and ignore the omitted numbers.
 *  eg. `[3,2,1]` will distribute the ratio for
 *  3/(3+2+1) of `Like`, 2/(3+2+1) of `Haha`,
 *  1/(3+2+1) of `Love` and empty ratio for the rest of types.
 *  eg2. `[0,0,0,0,0,1]` will distribute the raio for full of `Anger`.
 *  eg3. `[0,0,0,0,1]` will distribute the raio for full of `Sad`.
 * @returns {reactor}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The reactor's profile name
 *  @prop {type}
 *    The reactor's reaction type: `Like`, `Haha`, `Love`,
 *    `Wow`, `Sad`, `Anger`
 */
export const createReactions = (numberTotal = 16419, ratio = [3, 2, 1]) => {
  const reactor = [
    { name: '鍋苔冥', type: REACTIONS.LIKE },
    { name: '憨摑娛', type: REACTIONS.LIKE },
    { name: '找到田大學', type: REACTIONS.HAHA },
    { name: '菜應蚊', type: REACTIONS.HAHA },
    { name: '台灣工具伯 王進坪', type: REACTIONS.LOVE },
    { name: '叮守鐘', type: REACTIONS.LOVE }
  ]
  if (numberTotal < 2) {
    throw new Error('Number of total must greater than 2.')
  }
  if (ratio.length > 6 || ratio.length < 1) {
    throw new Error('Ratio must be 1 to 6 numbers.')
  }
  if (ratio.filter(r => typeof r !== 'number').length > 0) {
    throw new Error('Array of ratio must be type of number.')
  }
  const ratioTotal = ratio.reduce((r, acc) => r + acc)
  const ratioLikes = ratioTotal / ratio[0]
  const ratioHahas = ratio[1] ? ratioTotal / ratio[1] : 0
  const ratioLoves = ratio[2] ? ratioTotal / ratio[2] : 0
  const ratioWows = ratio[3] ? ratioTotal / ratio[3] : 0
  const ratioSads = ratio[4] ? ratioTotal / ratio[4] : 0
  const ratioAngers = ratio[5] ? ratioTotal / ratio[5] : 0
  const totalLikes =
    ratioLikes === 0 ? 0 : Math.ceil((numberTotal - 1) / ratioLikes)
  const totalHahas =
    ratioHahas === 0 ? 0 : Math.ceil((numberTotal - 1) / ratioHahas)
  const totalLoves =
    ratioLoves === 0 ? 0 : Math.ceil((numberTotal - 1) / ratioLoves)
  const totalWows =
    ratioWows === 0 ? 0 : Math.ceil((numberTotal - 1) / ratioWows)
  const totalSads =
    ratioSads === 0 ? 0 : Math.ceil((numberTotal - 1) / ratioSads)
  const totalAngers =
    ratioAngers === 0 ? 0 : Math.ceil((numberTotal - 1) / ratioAngers)
  for (let i = 0; i < numberTotal; i++) {
    if (i < totalLikes) {
      reactor.push({ name: `假帳號${i}`, type: REACTIONS.LIKE })
    } else if (i < totalLikes + totalHahas) {
      reactor.push({ name: `假帳號${i}`, type: REACTIONS.HAHA })
    } else if (i < totalLikes + totalHahas + totalLoves) {
      reactor.push({ name: `假帳號${i}`, type: REACTIONS.LOVE })
    } else if (i < totalLikes + totalHahas + totalLoves + totalWows) {
      reactor.push({ name: `假帳號${i}`, type: REACTIONS.WOW })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads
    ) {
      reactor.push({ name: `假帳號${i}`, type: REACTIONS.SAD })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads + totalAngers
    ) {
      reactor.push({ name: `假帳號${i}`, type: REACTIONS.ANGRY })
    }
  }
  return reactor
}

/**
 * create fake comments.
 * @param {numberTotal}
 *  How many comments to make, must be greater than 2.
 * @returns {commenter}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The commenter's profile name
 */
export const createComments = (numberTotal = 1526) => {
  const commenter = [
    {
      name: '鍋苔冥',
      comment: '謝謝樓主托夢，三樓的民主不能當飯吃！',
      time: '3天',
      reactions: createReactions(531, [0, 0, 0, 0, 0, 1])
    },
    {
      name: '憨摑娛',
      comment: '樓上為什麼不考慮吃個包子呢？',
      time: '3天',
      reactions: createReactions(980, [2, 0, 0, 0, 0, 1])
    },
    {
      name: '菜應蚊',
      comment: '我也這麼覺得',
      time: '4天',
      reactions: createReactions(1211, [2, 1])
    },
    {
      name: '台灣工具伯 王進坪',
      comment: '這個我想，要查證比較難啦',
      time: '5天',
      reactions: createReactions(556, [3, 2, 0, 1])
    },
    {
      name: '叮守鐘',
      comment: '可以托夢讓我重選台北市長嗎？',
      time: '4天',
      reactions: createReactions(556, [2, 0, 0, 1])
    },
    {
      name: '找到田大學',
      comment: '五樓要不要藉這個機會在神明的面前澄清一下？',
      attachMedia: 'https://i.imgur.com/wvWFAMT.png',
      mediaType: 'pic',
      time: '3天',
      reactions: createReactions(967, [2, 0, 0, 0, 1])
    },
    {
      name: '每天關心愛情摩天輪的興建狀況',
      comment: '五樓，我快等不及了',
      time: '5天',
      reactions: createReactions(498, [2, 1])
    },
    {
      name: '尛理惠的整理魔法',
      comment: `臺灣的碰有打家好～
      今天要來教打家年後清理臉書版面的小妙招分享
      1. 點進去五樓的粉絲團
      2. 啊～原來ＸＸＸ和其他 10 位朋友都說這個讚
      3. 果斷斷開好友連結
      #怦然心動的臉書整理魔法
      #簡單三步驟打家學會了嗎`,
      time: '5天',
      reactions: createReactions(781, [2, 1])
    }
  ]
  if (numberTotal < 2) throw new Error('Number of total must greater than 2.')

  for (let i = 0; i < numberTotal; i++) {
    commenter.push({
      name: `假帳號${i}`,
      comment: '假留言',
      time: `${i}天`,
      reactions: createReactions(322, [2, 1])
    })
  }
  return commenter
}

/**
 * create fake shares.
 * @param {numberTotal}
 *  How many shares to make, must be greater than 2.
 * @returns {sharer}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The sharer's profile name
 */
export const createShares = (numberTotal = 2903) => {
  const sharer = [
    { name: '鍋苔冥' },
    { name: '憨摑娛' },
    { name: '菜應蚊' },
    { name: '台灣工具伯 王進坪' },
    { name: '叮守鐘' },
    { name: '找到田大學' },
    { name: '每天關心愛情摩天輪的興建狀況' },
    { name: '尛理惠的整理魔法' }
  ]
  if (numberTotal < 2) throw new Error('Number of total must greater than 2.')
  for (let i = 0; i < numberTotal; i++) {
    sharer.push({ name: `假帳號${i}` })
  }
  return sharer
}

import uuidv1 from 'uuid/v1'
import { REACTIONS } from '../pages/actions'

export const definedUsers = {
  theMazu: {
    id: uuidv1(),
    profileName: '媽祖',
    profileLink: 'https://www.facebook.com/themazhou/',
    profileImg: 'mazu.png'
  },
  terryGoodTiming: {
    id: uuidv1(),
    profileName: '鍋苔冥',
    profileLink: 'https://www.facebook.com/TerryGou1018/',
    profileImg: 'terry.png'
  },
  dingDing: {
    id: uuidv1(),
    profileName: '叮守鐘',
    profileLink: 'https://www.youtube.com/watch?v=_97bLScvHWs',
    profileImg: 'dingding.png'
  },
  toolMan: {
    id: uuidv1(),
    profileName: '台灣工具伯 汪進坪',
    profileLink: 'https://www.facebook.com/jingping.tw/',
    profileImg: 'toolman.png'
  },
  english: {
    id: uuidv1(),
    profileName: '菜應蚊',
    profileLink: 'https://www.facebook.com/tsaiingwen/',
    profileImg: 'english.png'
  },
  koreanFish: {
    id: uuidv1(),
    profileName: '憨摑娛',
    profileLink: 'https://www.facebook.com/twherohan/',
    profileImg: 'korean-fish.png'
  },
  careWheelEveryday: {
    id: uuidv1(),
    profileName: '每天關心愛情摩天輪的興建狀況',
    profileLink: 'https://www.facebook.com/CareLoveFerrisWheelEveryday/',
    profileImg: 'wheel.png'
  },
  universityFoundField: {
    id: uuidv1(),
    profileName: '找到田大學',
    profileLink: '#',
    profileImg: 'anonymous-university.png'
  },
  sparkJoy: {
    id: uuidv1(),
    profileName: '尛理惠的整理魔法',
    profileLink: '#',
    profileImg: 'sparkJoy.png'
  }
}

/**
 * Get fake user object with the following properties:
 *   @prop {id}
 *   @prop {profileName}
 *   @prop {profileLink}
 *   @prop {profileImg}
 * @param {nameId} nameId
 *  An id to distinguish from users,
 *  will append to @prop {profileName}.
 * @param {gender} gender
 *  Choose an img represent gender, `MALE` if ommited.
 */
export const getFakeUser = (nameId, gender = 'MALE') => {
  const maleUserImg = 'anonymous-male.png'
  const femaleUserImg = 'anonymous-female.png'
  const userImg = gender === 'MALE' ? maleUserImg : femaleUserImg
  return {
    id: uuidv1(),
    profileName: `假帳號${nameId}`,
    profileLink: '#',
    profileImg: userImg
  }
}

/**
 * create fake reactions with default ratio of
 * 1/2 of Likes, 1/3 of Hahas and 1/6 of Loves
 * if @param {ratio} ratio was omitted.
 * @param {numberTotal} numberTotal
 *  How many reactions to make, must be greater than 2,
 *  16419 will pass down if omitted.
 * @param {ratio} ratio
 *  How to distribute the ratio of reaction type,
 *  accept only an array of 1 to 6 numbers,
 *  and ignore the omitted numbers.
 *  eg. `[3,2,1]` will distribute the ratio for
 *  3/(3+2+1) of `Like`, 2/(3+2+1) of `Haha`,
 *  1/(3+2+1) of `Love` and empty ratio for the rest of types.
 *  eg2. `[0,0,0,0,0,1]` will distribute the raio for full of `Anger`.
 *  eg3. `[0,0,0,0,1]` will distribute the raio for full of `Sad`.
 * @returns {react}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The reactor's profile name
 *  @prop {type}
 *    The react's reaction type: `Like`, `Haha`, `Love`,
 *    `Wow`, `Sad`, `Anger`
 */
export const createReactions = (numberTotal = 16419, ratio = [3, 2, 1]) => {
  const react = [
    {
      user: definedUsers.terryGoodTiming,
      type: REACTIONS.LIKE
    },
    {
      user: definedUsers.koreanFish,
      type: REACTIONS.LIKE
    },
    {
      user: definedUsers.universityFoundField,
      type: REACTIONS.HAHA
    },
    { user: definedUsers.english, type: REACTIONS.HAHA },
    { user: definedUsers.toolMan, type: REACTIONS.LOVE },
    { user: definedUsers.dingDing, type: REACTIONS.LOVE }
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
      react.push({ user: getFakeUser(i), type: REACTIONS.LIKE })
    } else if (i < totalLikes + totalHahas) {
      react.push({ user: getFakeUser(i), type: REACTIONS.HAHA })
    } else if (i < totalLikes + totalHahas + totalLoves) {
      react.push({ user: getFakeUser(i), type: REACTIONS.LOVE })
    } else if (i < totalLikes + totalHahas + totalLoves + totalWows) {
      react.push({ user: getFakeUser(i), type: REACTIONS.WOW })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads
    ) {
      react.push({ user: getFakeUser(i), type: REACTIONS.SAD })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads + totalAngers
    ) {
      react.push({ user: getFakeUser(i), type: REACTIONS.ANGRY })
    }
  }
  return react
}

/**
 * create fake comments.
 * @param {numberTotal} numberTotal
 *  How many comments to make, must be greater than 2,
 *  1526 will pass down if omitted.
 * @returns {comments}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The commenter's profile name
 */
export const createComments = (numberTotal = 1526) => {
  const comments = [
    {
      id: uuidv1(),
      user: definedUsers.terryGoodTiming,
      comment: '謝謝樓主托夢，三樓的民主不能當飯吃！',
      time: '3天',
      reactions: createReactions(531, [0, 0, 0, 0, 0, 1])
    },
    {
      id: uuidv1(),
      user: definedUsers.koreanFish,
      comment: '樓上為什麼不考慮吃個包子呢？',
      time: '3天',
      reactions: createReactions(980, [2, 0, 0, 0, 0, 1])
    },
    {
      id: uuidv1(),
      user: definedUsers.english,
      comment: '我也這麼覺得',
      time: '4天',
      reactions: createReactions(1211, [2, 1])
    },
    {
      id: uuidv1(),
      user: definedUsers.toolMan,
      comment: '這個我想，要查證比較難啦',
      time: '5天',
      reactions: createReactions(556, [3, 2, 0, 1])
    },
    {
      id: uuidv1(),
      user: definedUsers.dingDing,
      comment: '可以托夢讓我重選台北市長嗎？',
      time: '4天',
      reactions: createReactions(556, [2, 0, 0, 1])
    },
    {
      id: uuidv1(),
      user: definedUsers.universityFoundField,
      comment: '五樓要不要藉這個機會在神明的面前澄清一下？',
      attachMedia: 'https://i.imgur.com/wvWFAMT.png',
      mediaType: 'pic',
      time: '3天',
      reactions: createReactions(967, [2, 0, 0, 0, 1])
    },
    {
      id: uuidv1(),
      user: definedUsers.careWheelEveryday,
      comment: '五樓，我快等不及了',
      time: '5天',
      reactions: createReactions(498, [2, 1])
    },
    {
      id: uuidv1(),
      user: definedUsers.sparkJoy,
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
    comments.push({
      id: uuidv1(),
      user: getFakeUser(i),
      comment: '假留言',
      time: `${i}天`,
      reactions: createReactions(322, [2, 1])
    })
  }
  return comments
}

/**
 * create fake shares.
 * @param {numberTotal} numberTotal
 *  How many shares to make, must be greater than 2,
 *  2903 will pass down if omitted.
 * @returns {shares}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The sharer's profile name
 */
export const createShares = (numberTotal = 2903) => {
  const shares = [
    { user: definedUsers.terryGoodTiming },
    { user: definedUsers.koreanFish },
    { user: definedUsers.english },
    { user: definedUsers.toolMan },
    { user: definedUsers.dingDing },
    { user: definedUsers.universityFoundField },
    { user: definedUsers.careWheelEveryday },
    { user: definedUsers.sparkJoy }
  ]
  if (numberTotal < 2) throw new Error('Number of total must greater than 2.')
  for (let i = 0; i < numberTotal; i++) {
    shares.push({ user: getFakeUser(i) })
  }
  return shares
}

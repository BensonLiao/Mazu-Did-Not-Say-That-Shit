import uuidv1 from 'uuid/v1'
import { REACTIONS, FEEDBACK } from '../actions'

export const getDefinedUsers = id => ({
  theMazu: {
    id,
    profileName: '媽祖',
    profileLink: 'https://www.facebook.com/themazhou/',
    profileImg: 'mazu.png'
  },
  terryGoodTiming: {
    id,
    profileName: '鍋苔冥',
    profileLink: 'https://www.facebook.com/TerryGou1018/',
    profileImg: 'terry.png'
  },
  dingDing: {
    id,
    profileName: '叮守鐘',
    profileLink: 'https://www.youtube.com/watch?v=_97bLScvHWs',
    profileImg: 'dingding.png'
  },
  toolMan: {
    id,
    profileName: '台灣工具伯 汪進坪',
    profileLink: 'https://www.facebook.com/jingping.tw/',
    profileImg: 'toolman.png'
  },
  english: {
    id,
    profileName: '菜應蚊',
    profileLink: 'https://www.facebook.com/tsaiingwen/',
    profileImg: 'english.png'
  },
  koreanFish: {
    id,
    profileName: '憨摑娛',
    profileLink: 'https://www.facebook.com/twherohan/',
    profileImg: 'korean-fish.png'
  },
  careWheelEveryday: {
    id,
    profileName: '每天關心愛情摩天輪的興建狀況',
    profileLink: 'https://www.facebook.com/CareLoveFerrisWheelEveryday/',
    profileImg: 'wheel.png'
  },
  universityFoundField: {
    id,
    profileName: '找到田大學',
    profileLink: '#',
    profileImg: 'anonymous-university.png'
  },
  sparkJoy: {
    id,
    profileName: '尛理惠的整理魔法',
    profileLink: '#',
    profileImg: 'sparkJoy.png'
  }
})

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

const addCommentReactions = (
  reacts,
  targetId,
  commentIds,
  numberTotal = 200,
  ratio = [3, 2, 1]
) => {
  if (!Array.isArray(reacts)) {
    throw new Error('reacts must be array.')
  }
  if (typeof targetId !== 'string') {
    throw new Error('Target comment id must be string.')
  }
  if (!Array.isArray(commentIds)) {
    throw new Error('commentIds must be array.')
  }
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
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.LIKE,
        postOrCommentId: targetId
      })
    } else if (i < totalLikes + totalHahas) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.HAHA,
        postOrCommentId: targetId
      })
    } else if (i < totalLikes + totalHahas + totalLoves) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.LOVE,
        postOrCommentId: targetId
      })
    } else if (i < totalLikes + totalHahas + totalLoves + totalWows) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.WOW,
        postOrCommentId: targetId
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads
    ) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.SAD,
        postOrCommentId: targetId
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads + totalAngers
    ) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.ANGRY,
        postOrCommentId: targetId
      })
    }
  }
  commentIds.push(targetId)
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
 * @returns {reactObj}
 *  An object contains th following properties:
 *  @prop {reacts}
 *   An array of objects contains the following properties:
 *   @prop {name}
 *    The user's profile name
 *   @prop {type}
 *    The react's reaction type: `Like`, `Haha`, `Love`,
 *    `Wow`, `Sad`, `Anger`
 *  @prop {commentIds}
 *   An array of @prop {commentId}, type is string.
 *   For @function createComments .
 */
export const createReactions = (numberTotal = 12419, ratio = [3, 2, 1]) => {
  const reacts = [
    {
      id: uuidv1(),
      user: getDefinedUsers(uuidv1()).terryGoodTiming,
      type: REACTIONS.LIKE,
      postOrCommentId: FEEDBACK.TARGET
    },
    {
      id: uuidv1(),
      user: getDefinedUsers(uuidv1()).koreanFish,
      type: REACTIONS.LIKE,
      postOrCommentId: FEEDBACK.TARGET
    },
    {
      id: uuidv1(),
      user: getDefinedUsers(uuidv1()).universityFoundField,
      type: REACTIONS.HAHA,
      postOrCommentId: FEEDBACK.TARGET
    },
    {
      id: uuidv1(),
      user: getDefinedUsers(uuidv1()).english,
      type: REACTIONS.HAHA,
      postOrCommentId: FEEDBACK.TARGET
    },
    {
      id: uuidv1(),
      user: getDefinedUsers(uuidv1()).toolMan,
      type: REACTIONS.LOVE,
      postOrCommentId: FEEDBACK.TARGET
    },
    {
      id: uuidv1(),
      user: getDefinedUsers(uuidv1()).dingDing,
      type: REACTIONS.LOVE,
      postOrCommentId: FEEDBACK.TARGET
    }
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
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.LIKE,
        postOrCommentId: FEEDBACK.TARGET
      })
    } else if (i < totalLikes + totalHahas) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.HAHA,
        postOrCommentId: FEEDBACK.TARGET
      })
    } else if (i < totalLikes + totalHahas + totalLoves) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.LOVE,
        postOrCommentId: FEEDBACK.TARGET
      })
    } else if (i < totalLikes + totalHahas + totalLoves + totalWows) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.WOW,
        postOrCommentId: FEEDBACK.TARGET
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads
    ) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.SAD,
        postOrCommentId: FEEDBACK.TARGET
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads + totalAngers
    ) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        type: REACTIONS.ANGRY,
        postOrCommentId: FEEDBACK.TARGET
      })
    }
  }
  const commentIds = []
  let commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 53, [0, 0, 0, 0, 0, 1])
  commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 99, [2, 0, 0, 0, 0, 1])
  commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 121, [2, 1])
  commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 155, [3, 2, 0, 1])
  commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 55, [2, 0, 0, 1])
  commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 96, [2, 0, 0, 0, 0, 1])
  commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 49, [2, 1])
  commentId = uuidv1()
  addCommentReactions(reacts, commentId, commentIds, 78, [2, 1])
  for (let i = 0; i < 200; i++) {
    addCommentReactions(reacts, uuidv1(), commentIds, 32, [2, 1])
  }
  const reactObj = { reacts, commentIds }
  return reactObj
}

/**
 * create fake comments.
 * @param {commentIds} commentIds
 *  How many comments to make, based on output of
 *  @function createReactions .
 * @returns {comments}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The user's profile name
 */
export const createComments = (commentIds = []) => {
  const comments = [
    {
      id: commentIds[0],
      user: getDefinedUsers(uuidv1()).terryGoodTiming,
      comment: '謝謝樓主托夢，三樓的民主不能當飯吃！',
      time: '3天'
    },
    {
      id: commentIds[1],
      user: getDefinedUsers(uuidv1()).koreanFish,
      comment: '樓上為什麼不考慮吃個包子呢？',
      time: '3天'
    },
    {
      id: commentIds[2],
      user: getDefinedUsers(uuidv1()).english,
      comment: '我也這麼覺得',
      time: '4天'
    },
    {
      id: commentIds[3],
      user: getDefinedUsers(uuidv1()).toolMan,
      comment: '這個我想，要查證比較難啦',
      time: '5天'
    },
    {
      id: commentIds[4],
      user: getDefinedUsers(uuidv1()).dingDing,
      comment: '可以托夢讓我重選台北市長嗎？',
      time: '4天'
    },
    {
      id: commentIds[5],
      user: getDefinedUsers(uuidv1()).universityFoundField,
      comment: '五樓要不要藉這個機會在神明的面前澄清一下？',
      attachMedia: 'https://i.imgur.com/wvWFAMT.png',
      mediaType: 'pic',
      time: '3天'
    },
    {
      id: commentIds[6],
      user: getDefinedUsers(uuidv1()).careWheelEveryday,
      comment: '五樓，我快等不及了',
      time: '5天'
    },
    {
      id: commentIds[7],
      user: getDefinedUsers(uuidv1()).sparkJoy,
      comment: `臺灣的碰有打家好～
      今天要來教打家年後清理臉書版面的小妙招分享
      1. 點進去五樓的粉絲團
      2. 啊～原來ＸＸＸ和其他 10 位朋友都說這個讚
      3. 果斷斷開好友連結
      #怦然心動的臉書整理魔法
      #簡單三步驟打家學會了嗎`,
      time: '5天'
    }
  ]
  for (let i = 8; i < commentIds.length; i++) {
    comments.push({
      id: commentIds[i],
      user: getFakeUser(i),
      comment: '假留言',
      time: `${i}天`
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
 *    The user's profile name
 */
export const createShares = (numberTotal = 290) => {
  const shares = [
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).terryGoodTiming },
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).koreanFish },
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).english },
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).toolMan },
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).dingDing },
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).universityFoundField },
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).careWheelEveryday },
    { id: uuidv1(), user: getDefinedUsers(uuidv1()).sparkJoy }
  ]
  if (numberTotal < 2) throw new Error('Number of total must greater than 2.')
  for (let i = 0; i < numberTotal; i++) {
    shares.push({ id: uuidv1(), user: getFakeUser(i) })
  }
  return shares
}

export const createPostData = (postReactions = 12419) => {
  const reactionsData = createReactions(postReactions)
  const initPostDatas = {
    post: {
      id: 'POST',
      user: getDefinedUsers(uuidv1()).theMazu,
      time: '4月17日下午6:12 ·',
      content: '我根本沒說。'
    },
    reacts: reactionsData.reacts,
    comments: createComments(reactionsData.commentIds),
    shares: createShares()
  }
  return initPostDatas
}

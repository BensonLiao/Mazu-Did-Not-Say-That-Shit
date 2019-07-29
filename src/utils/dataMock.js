import uuidv1 from 'uuid/v1'
import { REACTIONS, FEEDBACK } from '../actions'

export const definedUsers = {
  goldXFive: {
    id: uuidv1(),
    profileName: '金乘五',
    profileLink: 'https://www.facebook.com/takeshikaneshirofanspage/',
    profileImg: 'goldxfive.png',
    isVerified: false
  },
  theMazu: {
    id: uuidv1(),
    profileName: '媽祖',
    profileLink: 'https://www.facebook.com/themazhou/',
    profileImg: 'mazu.png',
    isVerified: false
  },
  terryGoodTiming: {
    id: uuidv1(),
    profileName: '鍋苔冥',
    profileLink: 'https://www.facebook.com/TerryGou1018/',
    profileImg: 'terry.png',
    isVerified: true
  },
  dingDing: {
    id: uuidv1(),
    profileName: '叮守鐘',
    profileLink: 'https://www.youtube.com/watch?v=_97bLScvHWs',
    profileImg: 'dingding.png',
    isVerified: false
  },
  toolMan: {
    id: uuidv1(),
    profileName: '台灣工具伯 汪進坪',
    profileLink: 'https://www.facebook.com/jingping.tw/',
    profileImg: 'toolman.png',
    isVerified: true
  },
  english: {
    id: uuidv1(),
    profileName: '菜應蚊',
    profileLink: 'https://www.facebook.com/tsaiingwen/',
    profileImg: 'english.png',
    isVerified: true
  },
  koreanFish: {
    id: uuidv1(),
    profileName: '憨摑娛',
    profileLink: 'https://www.facebook.com/twherohan/',
    profileImg: 'korean-fish.png',
    isVerified: true
  },
  careWheelEveryday: {
    id: uuidv1(),
    profileName: '每天關心愛情摩天輪的興建狀況',
    profileLink: 'https://www.facebook.com/CareLoveFerrisWheelEveryday/',
    profileImg: 'wheel.png',
    isVerified: false
  },
  universityFoundField: {
    id: uuidv1(),
    profileName: '找到田大學',
    profileLink: '#',
    profileImg: 'anonymous-university.png',
    isVerified: false
  },
  sparkJoy: {
    id: uuidv1(),
    profileName: '尛理惠的整理魔法',
    profileLink: '#',
    profileImg: 'sparkJoy.jpg',
    isVerified: true
  }
}

const definedReactors = [
  definedUsers.terryGoodTiming,
  definedUsers.koreanFish,
  definedUsers.universityFoundField,
  definedUsers.english,
  definedUsers.toolMan,
  definedUsers.dingDing
]

/**
 * Get user object for reactions with the following properties:
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
export const getReactor = (nameId, gender = 'MALE') => {
  const maleUserImg = 'anonymous-male.png'
  const femaleUserImg = 'anonymous-female.png'
  const userImg = gender === 'MALE' ? maleUserImg : femaleUserImg
  const user = nameId < definedReactors.length ?
    definedReactors[nameId] :
    {
      id: uuidv1(),
      profileName: `假帳號${nameId}`,
      profileLink: '#',
      profileImg: userImg,
      isVerified: false
    }
  return user
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
    profileImg: userImg,
    isVerified: false
  }
}

const addCommentReactions = (
  reacts,
  targetId,
  commentIds,
  commentReactsTotal = 200,
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
  if (ratio.length > 6 || ratio.length < 1) {
    throw new Error('Ratio must be 1 to 6 numbers.')
  }
  if (ratio.filter(r => typeof r !== 'number').length > 0) {
    throw new Error('Array of ratio must be type of number.')
  }
  // Calculate reations feeling distribution by ratio
  // If commentReactsTotal < ratioTotal, ratio will be [1] for full of Likes
  const ratioTotal = ratio.reduce((r, acc) => r + acc)
  const ratioAvailable = commentReactsTotal >= ratioTotal
  const divisorLike = ratioAvailable ? ratioTotal / ratio[0] : 1
  const divisorHaha = ratioAvailable && ratio[1] ? ratioTotal / ratio[1] : 0
  const divisorLove = ratioAvailable && ratio[2] ? ratioTotal / ratio[2] : 0
  const divisorWow = ratioAvailable && ratio[3] ? ratioTotal / ratio[3] : 0
  const divisorSad = ratioAvailable && ratio[4] ? ratioTotal / ratio[4] : 0
  const divisorAnger = ratioAvailable && ratio[5] ? ratioTotal / ratio[5] : 0
  const totalLikes =
    divisorLike === 0 ? 0 : Math.ceil(commentReactsTotal / divisorLike)
  const totalHahas =
    divisorHaha === 0 ? 0 : Math.ceil(commentReactsTotal / divisorHaha)
  const totalLoves =
    divisorLove === 0 ? 0 : Math.ceil(commentReactsTotal / divisorLove)
  const totalWows =
    divisorWow === 0 ? 0 : Math.ceil(commentReactsTotal / divisorWow)
  const totalSads =
    divisorSad === 0 ? 0 : Math.ceil(commentReactsTotal / divisorSad)
  const totalAngers =
    divisorAnger === 0 ? 0 : Math.ceil(commentReactsTotal / divisorAnger)
  for (let i = 0; i < commentReactsTotal; i++) {
    if (i < totalLikes) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        feeling: REACTIONS.LIKE,
        targetId
      })
    } else if (i < totalLikes + totalHahas) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        feeling: REACTIONS.HAHA,
        targetId
      })
    } else if (i < totalLikes + totalHahas + totalLoves) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        feeling: REACTIONS.LOVE,
        targetId
      })
    } else if (i < totalLikes + totalHahas + totalLoves + totalWows) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        feeling: REACTIONS.WOW,
        targetId
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads
    ) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        feeling: REACTIONS.SAD,
        targetId
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads + totalAngers
    ) {
      reacts.push({
        id: uuidv1(),
        user: getFakeUser(i),
        feeling: REACTIONS.ANGRY,
        targetId
      })
    }
  }
  commentIds.push(targetId)
}

const getCommentReactsTotal = (reactsTotal, ratio = 388) => {
  const minCommentReacts = 6
  const commentReacts = Math.ceil(reactsTotal / ratio)
  return commentReacts > minCommentReacts ? commentReacts : minCommentReacts
}

/**
 * create fake reactions with default ratio of
 * 1/2 of Likes, 1/3 of Hahas and 1/6 of Loves
 * if @param {ratio} ratio was omitted.
 * @param {totalReactions} totalReactions
 *  How many reactions to make, at least to be 1.
 * @param {totalComments} totalComments
 *  How many comments to make.
 * @param {ratio} ratio
 *  How to distribute the ratio of reaction type,
 *  accept only an array of 1 to 6 numbers,
 *  and ignore the omitted numbers.
 *  eg. `[3,2,1]` will distribute the ratio for
 *  3/(3+2+1) of `Like`, 2/(3+2+1) of `Haha`,
 *  1/(3+2+1) of `Love` and empty ratio for the rest of types.
 *  eg2. `[1]` will distribute the ratio for full of `Like`.
 *  eg3. `[0,0,0,0,0,1]` will distribute the ratio for full of `Anger`.
 *  eg4. `[0,0,0,0,1]` will distribute the ratio for full of `Sad`.
 * @returns {reactObj}
 *  An object contains th following properties:
 *  @prop {reacts}
 *   An array of objects contains the following properties:
 *   @prop {name}
 *    The user's profile name
 *   @prop {feeling}
 *    The react's feeling: `Like`, `Haha`, `Love`,
 *    `Wow`, `Sad`, `Anger`
 *  @prop {commentIds}
 *   An array of @prop {commentId}, type is string.
 *   For @function createComments .
 */
export const createReactions = (
  totalReactions,
  totalComments,
  ratio = [3, 2, 1]
) => {
  if (totalReactions < 1) {
    throw new Error('Number of total reactions at least to be 1.')
  }
  if (ratio.length > 6 || ratio.length < 1) {
    throw new Error('Ratio must be 1 to 6 numbers.')
  }
  if (ratio.filter(r => typeof r !== 'number').length > 0) {
    throw new Error('Array of ratio must be type of number.')
  }
  // Calculate reations feeling distribution by ratio
  // If totalReactions < ratioTotal, ratio will be [1] for full of Likes
  const ratioTotal = ratio.reduce((r, acc) => r + acc)
  const ratioAvailable = totalReactions >= ratioTotal
  const divisorLike = ratioAvailable ? ratioTotal / ratio[0] : 1
  const divisorHaha = ratioAvailable && ratio[1] ? ratioTotal / ratio[1] : 0
  const divisorLove = ratioAvailable && ratio[2] ? ratioTotal / ratio[2] : 0
  const divisorWow = ratioAvailable && ratio[3] ? ratioTotal / ratio[3] : 0
  const divisorSad = ratioAvailable && ratio[4] ? ratioTotal / ratio[4] : 0
  const divisorAnger = ratioAvailable && ratio[5] ? ratioTotal / ratio[5] : 0
  const totalLikes =
    divisorLike === 0 ? 0 : Math.ceil(totalReactions / divisorLike)
  const totalHahas =
    divisorHaha === 0 ? 0 : Math.ceil(totalReactions / divisorHaha)
  const totalLoves =
    divisorLove === 0 ? 0 : Math.ceil(totalReactions / divisorLove)
  const totalWows = divisorWow === 0 ? 0 : Math.ceil(totalReactions / divisorWow)
  const totalSads = divisorSad === 0 ? 0 : Math.ceil(totalReactions / divisorSad)
  const totalAngers =
    divisorAnger === 0 ? 0 : Math.ceil(totalReactions / divisorAnger)
  // Add reactions as many as totalReactions
  // And the first n reactions is pre-defined reactors
  // (n = length of pre-defined reactors)
  // Or (totalReactions + commentReactsTotal) reactions for comments
  // if totalComments > 0
  const reacts = []
  for (let i = 0; i < totalReactions; i++) {
    if (i < totalLikes) {
      reacts.push({
        id: uuidv1(),
        user: getReactor(i),
        feeling: REACTIONS.LIKE,
        targetId: FEEDBACK.TARGET
      })
    } else if (i < totalLikes + totalHahas) {
      reacts.push({
        id: uuidv1(),
        user: getReactor(i),
        feeling: REACTIONS.HAHA,
        targetId: FEEDBACK.TARGET
      })
    } else if (i < totalLikes + totalHahas + totalLoves) {
      reacts.push({
        id: uuidv1(),
        user: getReactor(i),
        feeling: REACTIONS.LOVE,
        targetId: FEEDBACK.TARGET
      })
    } else if (i < totalLikes + totalHahas + totalLoves + totalWows) {
      reacts.push({
        id: uuidv1(),
        user: getReactor(i),
        feeling: REACTIONS.WOW,
        targetId: FEEDBACK.TARGET
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads
    ) {
      reacts.push({
        id: uuidv1(),
        user: getReactor(i),
        feeling: REACTIONS.SAD,
        targetId: FEEDBACK.TARGET
      })
    } else if (
      i <
      totalLikes + totalHahas + totalLoves + totalWows + totalSads + totalAngers
    ) {
      reacts.push({
        id: uuidv1(),
        user: getReactor(i),
        feeling: REACTIONS.ANGRY,
        targetId: FEEDBACK.TARGET
      })
    }
  }
  // Add reactions for comments if totalComments > 0
  const commentIds = []
  let commentReactsTotal = 0
  if (totalComments > 0) {
    let commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 240)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      0,
      0,
      0,
      0,
      0,
      1
    ])
    commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 124)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      2,
      0,
      0,
      0,
      0,
      1
    ])
    commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 112)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      2,
      1
    ])
    commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 80)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      3,
      2,
      0,
      1
    ])
    commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 112)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      2,
      0,
      0,
      1
    ])
    commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 125)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      2,
      3,
      0,
      0,
      0
    ])
    commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 244)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      2,
      1,
      0,
      1,
      2
    ])
    commentId = uuidv1()
    commentReactsTotal = getCommentReactsTotal(totalReactions, 160)
    addCommentReactions(reacts, commentId, commentIds, commentReactsTotal, [
      2,
      1,
      0,
      1
    ])
    commentReactsTotal = getCommentReactsTotal(totalReactions)
  }
  for (let i = 0; i < totalComments; i++) {
    addCommentReactions(reacts, uuidv1(), commentIds, commentReactsTotal, [
      2,
      3,
      0,
      1,
      2
    ])
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
      user: definedUsers.terryGoodTiming,
      saying: '謝謝樓主托夢，三樓的民主不能當飯吃！',
      time: '3天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    },
    {
      id: commentIds[1],
      user: definedUsers.koreanFish,
      saying: '樓上為什麼不考慮吃個包子呢？',
      time: '3天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    },
    {
      id: commentIds[2],
      user: definedUsers.english,
      saying: '我也這麼覺得',
      time: '4天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    },
    {
      id: commentIds[3],
      user: definedUsers.toolMan,
      saying: '這個我想，要查證比較難啦',
      time: '5天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    },
    {
      id: commentIds[4],
      user: definedUsers.dingDing,
      saying: '可以托夢讓我重選台北市長嗎？',
      time: '4天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    },
    {
      id: commentIds[5],
      user: definedUsers.universityFoundField,
      saying: '五樓要不要藉這個機會在神明的面前澄清一下？',
      attachMedia: 'wvWFAMT.jpg',
      mediaType: 'pic',
      time: '3天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    },
    {
      id: commentIds[6],
      user: definedUsers.careWheelEveryday,
      saying: '五樓，我快等不及了',
      time: '5天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    },
    {
      id: commentIds[7],
      user: definedUsers.sparkJoy,
      saying: `臺灣的碰有打家好～
      今天要來教打家年後清理臉書版面的小妙招分享
      1. 點進去五樓的粉絲團
      2. 啊～原來ＸＸＸ和其他 10 位朋友都說這個讚
      3. 果斷斷開好友連結
      #怦然心動的臉書整理魔法
      #簡單三步驟打家學會了嗎`,
      time: '5天',
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    }
  ]
  for (let i = 8; i < commentIds.length; i++) {
    comments.push({
      id: commentIds[i],
      user: getFakeUser(i),
      saying: '假留言',
      time: `${i}天`,
      targetId: FEEDBACK.TARGET,
      reactId: uuidv1()
    })
  }
  return comments
}

/**
 * create fake shares.
 * @param {commentReactsTotal} commentReactsTotal
 *  How many shares to make, must be greater than 2,
 *  2903 will pass down if omitted.
 * @returns {shares}
 *  An array of objects contains the following properties:
 *  @prop {name}
 *    The user's profile name
 */
export const createShares = (commentReactsTotal = 290) => {
  const shares = [
    { id: uuidv1(), user: definedUsers.terryGoodTiming },
    { id: uuidv1(), user: definedUsers.koreanFish },
    { id: uuidv1(), user: definedUsers.english },
    { id: uuidv1(), user: definedUsers.toolMan },
    { id: uuidv1(), user: definedUsers.dingDing },
    { id: uuidv1(), user: definedUsers.universityFoundField },
    { id: uuidv1(), user: definedUsers.careWheelEveryday },
    { id: uuidv1(), user: definedUsers.sparkJoy }
  ]
  if (commentReactsTotal < 2) throw new Error('Number of total must greater than 2.')
  for (let i = 0; i < commentReactsTotal; i++) {
    shares.push({ id: uuidv1(), user: getFakeUser(i) })
  }
  return shares
}

export const createPostData = (reacts = 2419, comments = 2, shares = 152) => {
  const reactionsData = createReactions(reacts, comments)
  const initPostDatas = {
    post: {
      id: 'POST',
      user: definedUsers.theMazu,
      time: 1555495920000,
      // UNIX-timestamp in milli-sec for local time: 2019/04/17 18:12:00
      content: '我根本沒說。'
    },
    reacts: reactionsData.reacts.filter(
      react => react.targetId === FEEDBACK.TARGET
    ),
    commentReacts: reactionsData.reacts.filter(
      react => react.targetId !== FEEDBACK.TARGET
    ),
    comments: createComments(reactionsData.commentIds),
    shares: createShares(shares)
  }
  return initPostDatas
}

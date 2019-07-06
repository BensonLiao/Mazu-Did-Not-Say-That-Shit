import CommentReactionTipIcon from '../components/CommentReactionTipIcon'
import { reactionIconTipWrapperStyle } from '../styles/post'

export default {
  getTimeStamp(timeStamp) {
    const date = new Date(timeStamp * 1000)
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
    return {
      forText: `${date.getMonth() + 1}月${date.getDate()}日`,
      forTip: `${date.toLocaleString('zh-TW', options)}`
    }
  },
  getTimeSpan(timeStamp) {
    let timeSpanStamp = Date.now() - timeStamp * 1000
    const hours = Math.floor(timeSpanStamp / 1000 / 60 / 60)
    timeSpanStamp -= hours * (1000 * 60 * 60)
    const minutes = Math.floor(timeSpanStamp / 1000 / 60)
    timeSpanStamp -= minutes * (1000 * 60)
    const seconds = Math.floor(timeSpanStamp / 1000)
    console.log('seconds', seconds)
    const timeSpan = '1分鐘'
    return timeSpan
  },
  getTotalCount(total) {
    const formattedTotal =
      total > 10000 ?
        (total / 10000).toFixed(1).concat('萬') :
        total.toString().replace(/\d(?=(\d{3})+)/g, '$&,')
    return formattedTotal
  },
  /**
   * A formator that returns a one-lined summary of reactions count
   * for display as always-visible text.
   * @param {reactions}
   *   An array of objects contains the following properties:
   *   @prop {name}
   *     The reactor's profile name.
   * @param {numTopShow}
   *     Show the reactor's name of the top n of @param {reactions}.
   *     (Default of n: 2)
   */
  getReactionsCount(reactions, numTopShow = 2) {
    // console.log('reactions user', reactions[0].user.profileName)
    if (numTopShow > reactions.length) {
      throw new Error('Number of top n must lesser than number of reactions.')
    }
    let formattedSummary = ''
    if (reactions.length > 0) {
      for (let i = 0; i < numTopShow; i++) {
        const {
          user: { profileName }
        } = reactions[i]
        const name =
          i + 1 === numTopShow ? `${profileName}` : `${profileName}、`
        formattedSummary += name
      }
    }
    const totalOthers = reactions.length - numTopShow
    const formattedTotalOthers = this.getTotalCount(totalOthers)
    formattedSummary += `和其他${formattedTotalOthers}人`
    return formattedSummary
  },
  /**
   * A formator that returns a one-lined summary of feedbacks count
   * for display as always-visible text.
   * @param {feedbacks}
   *   An array of objects represent how many people feedback the post.
   * @param {type}
   *   Type of feedback, `comment` or `share`.
   */
  getFeedbacksCount(feedbacks, type) {
    const total = feedbacks.length
    const formattedTotal = this.getTotalCount(total)
    const formattedSummary =
      type === 'comment' ? `${formattedTotal}則留言` : `${formattedTotal}次分享`
    return formattedSummary
  },
  /**
   * A formator that returns a wrapped summary of feedbacks count
   * for tootip text
   * @param {feedbacks}
   *   An array of objects contains the following properties:
   *   @prop {name}
   *     The feedbacker's profile name.
   * @param {numTopShow}
   *     Show the feedbacker's name of the top n of @param {feedbacks}.
   *     (Default of n: 2)
   */
  getFeedbacksCountTip(feedbacks, numTopShow = 1) {
    if (feedbacks.length < 1) {
      return ''
    }
    const totalShow = numTopShow > feedbacks.length ? 1 : numTopShow
    let formattedSummary = ''
    if (feedbacks.length > 0) {
      for (let i = 0; i < totalShow; i++) {
        const {
          user: { profileName }
        } = feedbacks[i]
        formattedSummary += `${profileName}<br>`
      }
    }
    formattedSummary += `和其他${feedbacks.length - totalShow}個...`
    return formattedSummary
  },
  /**
   * A formator that returns a wrapped summary of reactions count
   * for comment's display as always-visible text.
   * @param {reactions}
   *   An array of objects contains the following properties:
   *   @prop {name}
   *     The reactor's profile name.
   */
  getCommentReactionsCount(reactions) {
    const formattedTotal = this.getTotalCount(reactions.length)
    return formattedTotal
  },
  /**
   * A formator that returns a wrapped summary of reactions count
   * for comment's tootip text.
   * Shows top 10 reactor's name of reaction if it has only 1 type of reaction,
   * and the rest of it will be number of sum for each type.
   * If a comment has more than 1 type of reaction,
   * it will only show number of sum for each type.
   * @param {reactions}
   *   An array of objects contains the following properties:
   *   @prop {name}
   *     The reactor's profile name.
   * @param {rank}
   *   Ab object contains ranking of reaction types
   */
  getCommentReactionsCountTip(reactions, rank) {
    if (reactions.length < 1) {
      return ''
    }
    const tipIconText = rank.reduce((acc, react) => {
      const tipSpan = react.total > 0 ? CommentReactionTipIcon(react) : ''
      return acc + tipSpan
    }, '')
    const totalShow = reactions.length > 10 ? 10 : reactions.length
    const totalOthers =
      reactions.length > 10 ? `和其他${reactions.length - totalShow}個...` : ''
    let formattedSummary = ''
    for (let i = 0; i < totalShow; i++) {
      const {
        user: { profileName }
      } = reactions[i]
      formattedSummary += `${profileName}<br>`
    }
    formattedSummary += totalOthers
    formattedSummary = rank[1].total > 0
      ? ''
      : `<div style='${reactionIconTipWrapperStyle}'>${formattedSummary}</div>`
    return `<div>${tipIconText}</div>${formattedSummary}`
  }
}

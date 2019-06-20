export default {
  timeStampFormator(timeStamp) {
    let formattedTimeStamp = ''
    if (timeStamp) {
      formattedTimeStamp = '4/17/19, 6:12 PM'
    }
    return formattedTimeStamp
  },
  totalCountFormator(total) {
    let formattedTotal = ''
    formattedTotal =
      total > 10000
        ? (total / 10000)
            .toFixed(1)
            .toString()
            .concat('萬')
        : total.toString().replace(/\d(?=(\d{3})+)/g, '$&,')
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
  reactionsCountFormator(reactions, numTopShow = 2) {
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
    const formattedTotalOthers = this.totalCountFormator(totalOthers)
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
  feedbacksCountFormator(feedbacks, type) {
    const total = feedbacks.length
    const formattedTotal = this.totalCountFormator(total)
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
  feedbacksCountTipFormator(feedbacks, numTopShow = 1) {
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
  }
}

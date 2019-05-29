export default {
  timeStampFormator(timeStamp) {
    let formattedTimeStamp = ''
    if (timeStamp) {
      formattedTimeStamp = '4/17/19, 6:12 PM'
    }
    return formattedTimeStamp
  },
  /**
   * A formator that returns a one-lined summary of reactions count
   * for display as always-visible text.
   * @param {reactions}
   *   An array of objects contains the following properties:
   *   @prop {name}
   *     The reactor's profile name.
   *   @prop {type}
   *     The reactor's reaction type: `Like`, `Haha`, `Love`
   * @param {numTopShow}
   *     Show the reactor's name of the top n of @param {reactions}.
   *     (Default of n: 2)
   */
  reactionsCountFormator(reactions, numTopShow = 2) {
    if (numTopShow > reactions.length) {
      throw new Error('Number of top n must lesser than number of reactions.')
    }
    let formattedSummary = ''
    if (reactions.length > 0) {
      for (let i = 0; i < numTopShow; i++) {
        const name =
          i + 1 === numTopShow
            ? `${reactions[i].name}`
            : `${reactions[i].name}、`
        formattedSummary += name
      }
    }
    formattedSummary += `和其他${reactions.length - numTopShow}人`
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
    const formattedSummary =
      type === 'comment'
        ? `${feedbacks.length}則留言`
        : `${feedbacks.length}次分享`
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
  feedbacksCountTipFormator(feedbacks, numTopShow = 2) {
    if (numTopShow > feedbacks.length) {
      throw new Error('Number of top n must lesser than number of feedbacks.')
    }
    let formattedSummary = ''
    if (feedbacks.length > 0) {
      for (let i = 0; i < numTopShow; i++) {
        formattedSummary += `${feedbacks[i].name}<br>`
      }
    }
    formattedSummary += `和其他${feedbacks.length - numTopShow}個...`
    return formattedSummary
  }
}

export default {
  timeStampFormator(timeStamp) {
    let formattedTimeStamp = ''
    if (timeStamp) {
      formattedTimeStamp = '4/17/19, 6:12 PM'
    }
    return formattedTimeStamp
  },
  /**
   * A formator that returns a one-line summary of reactions count
   * for display as always-visible text.
   * @param {reactions}
   *   An array of objects contains the following properties:
   *   @prop {name}
   *     The reactor's profile name
   *   @prop {type}
   *     The reactor's reaction type: `Like`, `Haha`, `Love`
   * @param {numTopShow}
   *     Show the reactor's name of the top n of @param {reactions}
   *     Default of n: 2
   */
  reactionsCountFormator(reactions, numTopShow = 2) {
    if (numTopShow > reactions.length) {
      throw new Error('Number of top n must lesser than number of reactions.')
    }
    let formattedReactionsSummary = ''
    if (reactions.length > 0) {
      for (let i = 0; i < numTopShow; i++) {
        formattedReactionsSummary += `${reactions[i].name}、`
      }
    }
    formattedReactionsSummary += `和其他${reactions.length - numTopShow}人`
    return formattedReactionsSummary
  },
  /**
   * A formator that returns a wrapped summary of reactions count
   * for tootip text
   * @param {reactions}
   *   An array of objects contains the following properties:
   *   @prop {name}
   *     The reactor's profile name
   *   @prop {type}
   *     The reactor's reaction type: `Like`, `Haha`, `Love`
   * @param {numTopShow}
   *     Show the reactor's name of the top n of @param {reactions}
   *     Default of n: 2
   */
  reactionsCountTipFormator(reactions, numTopShow = 2) {
    if (numTopShow > reactions.length) {
      throw new Error('Number of top n must lesser than number of reactions.')
    }
    let formattedReactionsSummary = ''
    if (reactions.length > 0) {
      for (let i = 0; i < numTopShow; i++) {
        formattedReactionsSummary += `${reactions[i].name}<br>`
      }
    }
    formattedReactionsSummary += `和其他${reactions.length - numTopShow}個...`
    return formattedReactionsSummary
  }
}

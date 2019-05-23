const reactions = (state = [], action) => {
  switch (action.type) {
    case 'LIKE_TO_POST':
      return [
        ...state,
        {
          reaction: 'Like',
          name: action.name
        }
      ]
    case 'HAHA_TO_POST':
      return [
        ...state,
        {
          reaction: 'Haha',
          name: action.name
        }
      ]
    case 'LOVE_TO_POST':
      return [
        ...state,
        {
          reaction: 'Love',
          name: action.name
        }
      ]
    case 'UNDO_REACTION_TO_POST':
      return state.filter(react => react.name !== action.name)
    default:
      return state
  }
}

export default reactions

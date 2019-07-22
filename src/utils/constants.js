import uuidv1 from 'uuid/v1'
import { definedUsers } from './dataMock'

export default {
  you: definedUsers.goldXFive,
  reactId: uuidv1(),
  myCommentInputCompId: 'myCommentInputCompId',
  commentPlaceholderCompId: 'commentPlaceholderCompId',
  component: {
    // Follow the file name under src/components in format like:
    // SIMPLECOMPONENT: 'simpleComponent'
    // For components that receiving props: withComponent
    DEFAULT: 'default',
    COMMENT: 'comment'
  }
}

import uuidv1 from 'uuid/v1'
import { definedUsers } from './dataMock'

export enum WITH_COMPONENT {
  // Follow the file name under src/components in format like:
  // SIMPLECOMPONENT: 'simpleComponent'
  // For components that receiving props: withComponent
  DEFAULT = 'default',
  COMMENT = 'comment'
}

export default {
  you: definedUsers.goldXFive,
  reactId: uuidv1(),
  fakeUserId: 'fakeUserId',
  fakeReactId: 'fakeReactId',
  fakeCommentId: 'fakeCommentId',
  fakeShareId: 'fakeShareId',
  myCommentInputCompId: 'myCommentInputCompId',
  commentPlaceholderCompId: 'commentPlaceholderCompId'
}

import { normalize, schema } from 'normalizr'

// const userProcessStrategy = value => {
// console.log('value', value)
// console.log('parent', parent)
// console.log('key', key)
// const processed = { ...value, users: [parent.id] }
// console.log('processed', processed)
// switch (key) {
//   case 'user':
//     return value.id
//   default:
//     return { ...value }
// }
//   return value.id
// }

// const userMergeStrategy = (entityA, entityB) => {
//   return {
//     ...entityA,
//     ...entityB,
//     comments: [...(entityA.comments || []), ...(entityB.comments || [])]
//   }
// }

// Define a users schema
const UserSchema = new schema.Entity('users')
// const userSchema = new schema.Entity(
//   'users',
//   {},
//   { processStrategy: userProcessStrategy }
// )

// const subUserSchema = new schema.Entity(
//   'users',
//   {},
//   { processStrategy: userProcessStrategy }
// )

// Define your reactions schema
// const reactSchema = new schema.Entity(
//   'reacts',
//   {},
//   {
//     processStrategy: value => {
//       // console.log('value', value)
//       // console.log('parent', parent)
//       return { ...value, userId: value.user.id }
//     }
//   }
// )
export const ReactSchema = new schema.Entity('reacts', {
  user: UserSchema
})

// Define your comments schema
export const CommentSchema = new schema.Entity('comments', {
  user: UserSchema
})

// Define your shares schema
export const ShareSchema = new schema.Entity('shares', {
  user: UserSchema
})

// Define your post schema
export const PostSchema = new schema.Entity('post', {
  reacts: [ReactSchema],
  comments: [CommentSchema],
  shares: [ShareSchema]
})

// export const AppSchema = new schema.Entity('app', {
//   post: [PostSchema]
// })

export const getNormalizedData = (data, dataSchema) =>
  normalize(data, dataSchema)

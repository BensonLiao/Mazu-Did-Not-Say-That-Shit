import { normalize, schema } from 'normalizr'

const userProcessStrategy = (value, parent, key) => {
  // console.log('value', value)
  // console.log('parent', parent)
  // console.log('key', key)
  // const processed = { ...value, users: [parent.id] }
  // console.log('processed', processed)
  switch (key) {
    case 'user':
      return value.id
    default:
      return { ...value }
  }
}

// const userMergeStrategy = (entityA, entityB) => {
//   return {
//     ...entityA,
//     ...entityB,
//     comments: [...(entityA.comments || []), ...(entityB.comments || [])]
//   }
// }

// Define a users schema
const userSchema = new schema.Entity('users')

const subUserSchema = new schema.Entity(
  'users',
  {},
  { processStrategy: userProcessStrategy }
)

// Define your reactions schema
const reactSchema = new schema.Entity(
  'reacts',
  {
    user: subUserSchema
  },
  {
    processStrategy: (value, parent) => {
      // console.log('value', value)
      // console.log('parent', parent)
      return { ...value, post: parent.id }
    }
  }
)

// Define your comments schema
const commentSchema = new schema.Entity('comments', {
  user: subUserSchema
})

// Define your shares schema
const shareSchema = new schema.Entity('shares', {
  user: subUserSchema
})

// Define your post schema
export const PostSchema = new schema.Entity('post', {
  reacts: [reactSchema],
  comments: [commentSchema],
  shares: [shareSchema],
  users: [userSchema]
})

export const getNormalizedData = data => normalize(data, PostSchema)

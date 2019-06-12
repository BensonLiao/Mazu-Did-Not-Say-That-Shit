import { normalize, schema } from 'normalizr'

// Define a users schema
const userSchema = new schema.Entity('users')

// Define your reactions schema
const reactSchema = new schema.Entity('reacts', {
  user: userSchema
})

// Define your comments schema
const commentSchema = new schema.Entity('comments', {
  user: userSchema
})

// Define your shares schema
const shareSchema = new schema.Entity('shares', {
  user: userSchema
})

// Define your post schema
export const PostSchema = new schema.Entity('post', {
  reacts: [reactSchema],
  comments: [commentSchema],
  shares: [shareSchema],
  users: [userSchema]
})

export const getNormalizedData = data => normalize(data, PostSchema)

import { normalize, schema } from 'normalizr'

// Define a users schema
const userSchema = new schema.Entity('users')

// Define your reactions schema
const reactSchema = new schema.Entity('reacts', {
  reactor: userSchema
})

// Define your comments schema
const commentSchema = new schema.Entity('comments', {
  commenter: userSchema
})

// Define your shares schema
const shareSchema = new schema.Entity('shares', {
  sharer: userSchema
})

// Define your post schema
export const PostSchema = new schema.Entity('post', {
  poster: userSchema,
  reacts: [reactSchema],
  comments: [commentSchema],
  shares: [shareSchema]
})

export const getNormalizedData = data => normalize(data, PostSchema)

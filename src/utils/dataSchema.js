import { normalize, schema } from 'normalizr'

// Define a users schema
const UserSchema = new schema.Entity('users')

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

export const getNormalizedData = (data, dataSchema) =>
  normalize(data, dataSchema)

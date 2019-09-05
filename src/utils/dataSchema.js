// const { normalize, schema } = require('normalizr')
import { normalize, schema } from 'normalizr'

const ReactSchema = new schema.Entity('reacts')

const CommentReactSchema = new schema.Entity('commentReacts')

// Define your comments schema
const CommentSchema = new schema.Entity('comments')

// Define your shares schema
const ShareSchema = new schema.Entity('shares')

// Define your post schema
export const PostSchema = new schema.Entity('post', {
  reacts: [ReactSchema],
  commentReacts: [CommentReactSchema],
  comments: [CommentSchema],
  shares: [ShareSchema]
})

export const getNormalizedData = (data, dataSchema) =>
  normalize(data, dataSchema)

// module.exports = {
//   ReactSchema,
//   CommentReactSchema,
//   CommentSchema,
//   ShareSchema,
//   PostSchema,
//   getNormalizedData
// }

import { normalize, schema, Schema } from 'normalizr'

export const ReactSchema = new schema.Entity('reacts')

export const CommentReactSchema = new schema.Entity('commentReacts')

// Define your comments schema
export const CommentSchema = new schema.Entity('comments')

// Define your shares schema
export const ShareSchema = new schema.Entity('shares')

// Define your post schema
export const PostSchema = new schema.Entity('post', {
  reacts: [ReactSchema],
  commentReacts: [CommentReactSchema],
  comments: [CommentSchema],
  shares: [ShareSchema]
})

export const getNormalizedData = (data: any, dataSchema: Schema) =>
  normalize(data, dataSchema)

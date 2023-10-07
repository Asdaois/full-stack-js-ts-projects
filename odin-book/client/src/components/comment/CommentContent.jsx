import React, { useState } from 'react'

import moment from 'moment'

import ProfilePicture from '../user/profile_picture'
import { CommentInput } from './'

/**
 *
 * @param props
 * @param {string} props.owner Is a id, This is for when it is a child of a comment to decide whether to add a new comment to the parent or to itself.
 * @param {boolean} props.isReply Handle the size of the profilePicture image
 * @returns {React.Component}
 */
const CommentContent = ({ comment, isReply, owner }) => {
  const [isReplying, setIsReplying] = useState(false)
  const { content, userID: user, comments, postType, _id } = comment
  const postID = owner || comment._id

  return (
    <div className=''>
      <div className='flex gap-2'>
        <ProfilePicture medium={isReply} />

        <div className='text-sm flex flex-col '>
          <div className='rounded-3xl bg-slate-400 p-2'>
            <p className='font-bold capitalize'>{user?.displayName}</p>
            <p className='first-letter:capitalize'>{content?.text}</p>
          </div>

          <div className='text-xs px-2'>
            <span className='hover:cursor-pointer'>Like</span>
            &nbsp;·&nbsp;
            <span className='hover:cursor-pointer' onClick={() => setIsReplying(true)}>
              Reply
            </span>
            &nbsp;·&nbsp;
            <span>{moment(new Date(comment.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>

      {/* Recursion in react for print nested comments */}
      {postType === 'Comment' && (
        <div className='ml-12 mt-2'>
          {comments?.map((comment) => (
            <CommentContent comment={comment} isReply key={comment._id} owner={_id} />
          ))}
        </div>
      )}

      <div className={`${isReplying ? 'block' : 'hidden'}`}>
        <CommentInput postID={postID} postType='SubComment' setVisible={setIsReplying} />
      </div>
    </div>
  )
}

export default CommentContent

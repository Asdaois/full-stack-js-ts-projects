import React, { useState } from 'react'

import moment from 'moment'
import { AiOutlineLike } from 'react-icons/ai'

import ButtonLike from '../button_like'
import { CommentContent, CommentInput } from '../comment'
import HorizontalLine from '../horizontal_line'
import { CommentIcon } from '../icons'
import ProfilePicture from '../user/profile_picture'

const Post = ({ post }) => {
  const [showInputComment, setShowInputComment] = useState(false)
  const createAT = post.createdAt
  const date = new Date(createAT)

  const getNumberComments = () => {
    // Work for two levels, consider recursive method for more deep levels
    let numberComments = post.comments.length

    for (const comment of post.comments) {
      numberComments += comment.comments.length
    }

    return numberComments
  }
  const numberComments = getNumberComments()

  return (
    <div className='w-full bg-slate-200 mt-4 rounded-xl p-4'>
      <div className='flex items-center  pb-0'>
        <ProfilePicture pictureLink={post.userID?.avatar} />
        <div className='flex flex-col ml-2'>
          <span>{post.userID?.displayName}</span>
          <span className='text-xs'>
            {/* <TimeAgo datetime={date} locale="en" /> */}
            <div className=''>{moment(date).fromNow()}</div>
          </span>
        </div>
      </div>

      <div className=''>
        <p className=''>{post.content?.text}</p>
      </div>

      <div className='flex justify-between my-2'>
        <div className='flex gap-2 items-center '>
          <AiOutlineLike size={20} />
          {post.likedBy.length}
        </div>
        <div className=''>
          {numberComments} Comment {numberComments === 1 ? '' : 's'}
        </div>
      </div>

      <HorizontalLine />

      <div className='flex gap-2 justify-evenly my-2 w-4/5 mx-auto relative'>
        <button
          className='button w-2/3 flex justify-center gap-2'
          onClick={() => setShowInputComment(true)}
        >
          <CommentIcon />
          Comment
        </button>
        <ButtonLike postID={post._id} />
      </div>

      <HorizontalLine />
      <div className='h-1' />

      <div className={`${showInputComment ? 'block' : 'hidden'}`}>
        <CommentInput postID={post._id} setVisible={setShowInputComment} />
      </div>

      {post?.comments.map((comment) => (
        <CommentContent comment={comment} key={comment._id} />
      ))}
    </div>
  )
}

export default Post

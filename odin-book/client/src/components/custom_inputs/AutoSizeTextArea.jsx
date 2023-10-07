import React from 'react'

const AutoSizeTextArea = ({ name }) => {
  const calcHeight = (value) => {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length
    // min-height + lines x line-height + padding + border
    if (numberOfLineBreaks > 9) {
      numberOfLineBreaks = 9
    }
    const newHeight = 20 + numberOfLineBreaks * 28 + 12 + 2
    return newHeight
  }

  return (
    <textarea
      name={name}
      maxLength={200}
      placeholder="What's on your mind?"
      className='overflow-hidden w-full bg-transparent focus-visible:outline-none text-lg'
      onKeyUp={(e) =>
        (e.currentTarget.style.height =
          calcHeight(e.currentTarget.value) + 'px')}
    />
  )
}

export default AutoSizeTextArea

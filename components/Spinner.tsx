import React, { FC } from 'react'

const Spinner: FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <div
      className=" animate-spin rounded-full border border-2 border-gray-500 border-l-transparent"
      style={{ height: size, width: size }}
    ></div>
  )
}

export default Spinner

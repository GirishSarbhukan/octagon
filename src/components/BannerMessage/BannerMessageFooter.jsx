import React from 'react'

/**
 * Footer for BannerMessage. Content is centered by default.
 */

const BannerMessageFooter = props => {
  const { children, alignment, center, right, ...rest } = props

  function getAlignmentClass () {
    const defaultAlignment = 'banner-message__footer-center'
    if (center || (alignment && alignment === 'center')) return defaultAlignment
    if (right || (alignment && alignment === 'right')) {
      return 'banner-message__footer-right'
    }
    return defaultAlignment
  }

  return (
    <div className={`banner-message__footer ${getAlignmentClass()}`} {...rest}>
      {children}
    </div>
  )
}

export default BannerMessageFooter

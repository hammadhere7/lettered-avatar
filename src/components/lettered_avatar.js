import React from 'react'
import Utils from './utils'

const LetteredAvatar = (props) => {
    return (
        <React.Fragment>
            {getAvatarHTML(props)}
        </React.Fragment>
    )
}

const getAvatarHTML = (props) => {
    let {options = {}} = props
    if (options.href)
    {
        return <a href={options.href} target={options.target ? options.target : '_self'}> {getImage(props)}</a>
    }
    return getImage(props)
}

const getImage = (props) => {
    let {name = '', imgSrc = '', options = {}} = props
    let {imgClass = null, shape = 'round', size = 60, tooltip = true, tooltipTitle = name, imgWidth = size, imgHeight = size} = options
    return (
        <img
        {...imgSrc ? {src: imgSrc} : {src: createAvatar(props)}}
        {...imgClass ? {className: imgClass} : ''}
        {...shape === 'round' ? {style:{borderRadius: '50%' }} : ''}
        {...tooltip ? tooltipTitle ? {title: tooltipTitle } : {title: name } : ''}
        {...imgSrc && imgWidth && imgHeight ? {width: imgWidth, height: imgHeight} : ''}
        alt={name}
        />
    )

}

const createAvatar = (props) => {
    let {name, options = {}} = props
    let {size = 60, twoLetter = false, bgColor = null, letterColor = null} = options

    let initials = Utils.getNameInitials(name, twoLetter)
    let canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    let context = canvas.getContext('2d')
    context.fillStyle = bgColor || Utils.getColor(initials)
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.font = Math.round(canvas.width / 2) + 'px Arial'
    context.textAlign = 'center'
    context.fillStyle = letterColor || '#FFF'
    context.fillText(initials, size / 2, size / 1.5)

    let dataURI = canvas.toDataURL()
    canvas = null

    return dataURI
}
export default LetteredAvatar

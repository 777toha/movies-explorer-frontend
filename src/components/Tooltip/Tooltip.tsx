import React from 'react';
import './Tooltip.css';

interface TooltipProps {
  isTooltipActive: boolean
  onClose: () => void
  caption: string
  image: string
}

 function Tooltip(props: TooltipProps) {

 const { isTooltipActive, onClose, caption, image } = props;

  return (
    <div
      className={isTooltipActive ? 'tooltip tooltip_opened' : 'tooltip'}
      onClick={onClose}
    >
      <div className='tooltip__container' onClick={(e) => e.stopPropagation()}>
        <button
          className='tooltip__close-btn button'
          onClick={onClose}
        ></button>
        <img className='tooltip__img' src={image} alt='Ошибка запроса' />
        <p className='tooltip__caption'>{caption}</p>
        <button className='tooltip__ok-btn button' onClick={onClose}>
          Понятно
        </button>
      </div>
    </div>
  );
}

export default Tooltip;

import React from 'react'
import { Icon } from '../../../utils/Icon/Icon'
import { formatPauseTime } from '../../../../utils/time'

interface IPauseTimeProps {
	pauseTime: number
	selectDay: boolean
}

export function PauseTime({ pauseTime, selectDay }: IPauseTimeProps) {
	return (
		<div
			className={
				selectDay || pauseTime !== 0
					? 'detail-statistics pause-time pause-time--active'
					: 'detail-statistics pause-time'
			}
		>
			<div className='detail-statistics__description'>
				<h3 className='detail-statistics__title'>Время на паузе</h3>
				<p className='detail-statistics__info'>{formatPauseTime(pauseTime)}</p>
			</div>
			<div className='detail-statistics__icon pause-time__icon'>
				<Icon name='PauseTimeIcon' />
			</div>
		</div>
	)
}

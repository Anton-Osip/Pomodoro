import React from 'react'
import { Icon } from '../../../utils/Icon/Icon'

interface IFocusProps {
	selectDay: boolean
	pauseTime: number
	workingTime: number
}

export function Focus({ selectDay, pauseTime, workingTime }: IFocusProps) {
	let focus = Math.round((workingTime / (pauseTime + workingTime)) * 100) || 0
	return (
		<div
			className={
				selectDay || focus !== 0 ? 'detail-statistics focus focus--active' : 'detail-statistics focus'
			}
		>
			<div className='detail-statistics__description'>
				<h3 className='detail-statistics__title'>Фокус</h3>
				<p className='detail-statistics__info'>{focus}%</p>
			</div>
			<div className='detail-statistics__icon focus__icon'>
				<Icon name='FocusIcon' />
			</div>
		</div>
	)
}

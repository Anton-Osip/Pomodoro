import React from 'react'
import { Icon } from '../../../utils/Icon/Icon'

interface IStopsProps {
	stops: number
	selectDay: boolean
}

export function Stops({ stops, selectDay }: IStopsProps) {
	return (
		<div
			className={
				selectDay || stops !== 0 ? 'detail-statistics stops stops--active' : 'detail-statistics stops  '
			}
		>
			<div className='detail-statistics__description'>
				<h3 className='detail-statistics__title'>Остановки</h3>
				<p className='detail-statistics__info'>{stops}</p>
			</div>
			<div className='detail-statistics__icon stops__icon'>
				<Icon name='StopsIcon' />
			</div>
		</div>
	)
}

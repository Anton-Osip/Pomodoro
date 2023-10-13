import React from 'react'
import { IStatisticsDay, setSelectedDay } from '../../../../redux/tasksReducer'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
import { formatMarkup } from '../../../../utils/time'

interface IScheduleProps {
	activeWeek: IStatisticsDay[]
}

export function Schedule({ activeWeek }: IScheduleProps) {
	const dispatch = useDispatch()
	let MaxWorkTime: number = 0

	activeWeek.map(day => {
		if (day.workingTime > MaxWorkTime) MaxWorkTime = day.workingTime
	})

	return (
		<div className='schedule'>
			<div className='schedule__days'>
				{activeWeek.map(d => (
					<div
						className='schedule__day'
						key={uuid()}
						onClick={() => {
							dispatch(setSelectedDay({ date: d.date.date }))
						}}
					>
						<div className='schedule__item-wrapper'>
							<div
								className={
									d.selectedDay
										? 'schedule__item schedule__item--active'
										: d.workingTime !== 0
										? 'schedule__item'
										: 'schedule__item--null'
								}
								style={
									d.workingTime !== 0
										? { height: `${(d.workingTime / MaxWorkTime) * 100}%` }
										: { height: `5px` }
								}
							></div>
						</div>
						<span className={d.selectedDay ? 'schedule__text schedule__text--active' : 'schedule__text'}>
							{d.date.day}
						</span>
					</div>
				))}
			</div>
			<div className='schedule__markup'>
				<div className='schedule__markup-item'>
					<div className='schedule__line'></div>
					<div className='schedule__line-text'>{formatMarkup(MaxWorkTime)}</div>
				</div>
				<div className='schedule__markup-item'>
					<div className='schedule__line'></div>
					<div className='schedule__line-text'>{formatMarkup(MaxWorkTime * 0.75)}</div>
				</div>
				<div className='schedule__markup-item'>
					<div className='schedule__line'></div>
					<div className='schedule__line-text'>{formatMarkup(MaxWorkTime * 0.5)}</div>
				</div>
				<div className='schedule__markup-item'>
					<div className='schedule__line'></div>
					<div className='schedule__line-text'>{formatMarkup(MaxWorkTime * 0.25)}</div>
				</div>
			</div>
		</div>
	)
}

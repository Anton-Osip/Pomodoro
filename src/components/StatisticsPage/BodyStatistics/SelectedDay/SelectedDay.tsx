import React from 'react'
import { formatSelectedDay } from '../../../../utils/time'

interface ISelectedDayProps {
	workingTime: number
	day: string
}

export function SelectedDay({ workingTime, day }: ISelectedDayProps) {
	let dayOfTheWeek =
		day === 'Пн'
			? 'Понедельник'
			: day === 'Вт'
			? 'Вторник'
			: day === 'Ср'
			? 'Среда'
			: day === 'Чт'
			? 'Четверг'
			: day === 'Пт'
			? 'Пятница'
			: day === 'Cб'
			? 'Суббота'
			: day === 'Вс'
			? 'Воскресенье'
			: 'Выберете день'
	return (
		<div className='selected-day'>
			<h3 className='selected-day__title'>{dayOfTheWeek}</h3>
			{workingTime === 0 ? (
				<p className='selected-day__data'>Нет данных</p>
			) : (
				<p className='selected-day__data'>
					Вы работали над задачами в течение&nbsp;
					<span className='selected-day__data--red'>{formatSelectedDay(workingTime)}</span>
				</p>
			)}
		</div>
	)
}

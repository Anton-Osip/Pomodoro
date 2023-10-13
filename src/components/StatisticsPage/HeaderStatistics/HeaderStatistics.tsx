import React, { useState } from 'react'
import { Icon } from '../../utils/Icon/Icon'
import AcardionItem from './AcardionItem/AcardionItem'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/rootReducer'
import { ISelectedWeek } from '../../../redux/tasksReducer'

export function HeaderStatistics() {
	const selectedWeek = useSelector<IRootState, ISelectedWeek[]>(store => store.tasks.selectedWeek)
	const [acardionIsOpen, setAcardionIsOpen] = useState(false)

	function handleClick() {
		acardionIsOpen ? setAcardionIsOpen(false) : setAcardionIsOpen(true)
	}

	let selected = ''
	selectedWeek.map(week => {
		if (week.selected === true) {
			selected = week.name
		}
	})

	return (
		<div className='header-statistics' onClick={handleClick}>
			<h3 className='header-statistics__title'>Ваша активность</h3>
			<div className='header-statistics__acardion statistics-acardion'>
				<div className='statistics-acardion__header'>
					<p className='statistics-acardion__text'>{selected}</p>
					<div
						className={acardionIsOpen ? 'statistics-acardion__icon--active' : 'statistics-acardion__icon'}
					>
						<Icon name='ArrowIcon' />
					</div>
				</div>
				<div
					className={acardionIsOpen ? 'statistics-acardion__body--active' : 'statistics-acardion__body '}
				>
					{selectedWeek.map(week => (
						<AcardionItem timeInterval={week.name} key={week.name} />
					))}
				</div>
			</div>
		</div>
	)
}

import { useSelector } from 'react-redux'
import { IRootState } from '../redux/rootReducer'
import { ISelectedWeek, IStatisticsDay, addActiveWeek } from '../redux/tasksReducer'
import { getStaticsWeek } from '../utils/getStaticsWeek'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export function useStatSelectedWeek() {
	const statistics = useSelector<IRootState, IStatisticsDay[]>(store => store.tasks.statistics)
	const selectedWeek = useSelector<IRootState, ISelectedWeek[]>(store => store.tasks.selectedWeek)
	const dispatch = useDispatch()

	let stat = getStaticsWeek(statistics, selectedWeek)
	useEffect(() => {
		dispatch(addActiveWeek([...stat]))
	}, [selectedWeek])

	return stat
}

import { ISelectedWeek, IStatisticsDay } from '../redux/tasksReducer'

export const getStaticsWeek = (statistics: IStatisticsDay[], selectedWeek: ISelectedWeek[]) => {
	let interval: number = 0
	const date = new Date()

	let arr: IStatisticsDay[] = []

	selectedWeek.forEach(w => {
		if (w.selected === true) {
			interval = w.interval
		}
	})
	const week = getWeek(interval)
	week.map(day => {
		let is = false
		statistics.map(st => {
			if (day.date === st.date.date) {
				is = true
				arr.push(st)
			}
		})

		if (!is) {
			arr.push({
				date: {
					fullYear: 2023,
					month: 4,
					date: day.date,
					day: day.day,
				},
				selectedDay: false,
				workingTime: 0,
				pouseTime: 0,
				stops: 0,
				numberOfComplitedTasks: 0,
			})
		}
	})

	return arr
}

export const getWeek = (prop: number) => {
	const arr = [0, 604800000, 604800000 * 2]
	const date = new Date(new Date().getTime() - arr[prop])
	const weekDay = date.getDay()
	const monthDay = date.getDate()
	const month = date.getMonth()

	const countDayOnMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс']
	let result = []
	let countMonthDay
	if (weekDay > 1) {
		countMonthDay = monthDay - (weekDay - 1)
	} else if (weekDay === 0) {
		countMonthDay = monthDay - 6
	} else {
		countMonthDay = monthDay
	}

	for (let i = 0; i < week.length; i++) {
		if (countMonthDay + i > countDayOnMonth[month]) {
			let count = countDayOnMonth[month] - (countMonthDay + (week.length - 1))
			result.push({ day: week[i], date: count + i })
		} else {
			result.push({ day: week[i], date: countMonthDay + i })
		}
	}

	return result
}

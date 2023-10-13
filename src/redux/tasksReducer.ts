import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'

export interface ITasksState {
	settings: ISettingsState
	tasks: ITaskData[]
	statistics: IStatisticsDay[]
	activeWeek: IStatisticsDay[]
	selectedWeek: ISelectedWeek[]
	breakCount: number
	soundPlay: boolean
}
export interface ISettingsState {
	workTime: number
	longBreackTime: number
	shotBreackTime: number
	frequencyOfLongBbreaks: number
	sound: boolean
	nightThemes: boolean
}
export interface ISelectedWeek {
	name: 'Эта неделя' | 'Прошлая неделя' | '2 недели назад'
	selected: boolean
	interval: number
}

export interface IStatisticsDay {
	date: IDate
	selectedDay: boolean
	workingTime: number
	pouseTime: number
	stops: number
	numberOfComplitedTasks: number
}

export interface IDate {
	fullYear: number
	month: number
	date: number
	day: string
}

export interface ITaskData {
	id: string
	name: string
	totalTask: number
	completedTask: number
	taskIsActive: boolean
	time: number
	isEditName: boolean
	isPopupOpen: boolean
	taskIsWork: boolean
	taskIsPauseWork: boolean
	taskIsStop: boolean
	taskIsBreak: boolean
	taskIsPauseBreak: boolean
	taskIsDelete: boolean
}

const week = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб']

const initialState: ITasksState = {
	settings: {
		workTime: 1500,
		longBreackTime: 600,
		shotBreackTime: 300,
		frequencyOfLongBbreaks: 4,
		sound: false,
		nightThemes: false,
	},
	tasks: [],
	activeWeek: [],
	statistics: [],
	selectedWeek: [
		{
			name: 'Эта неделя',
			selected: true,
			interval: 0,
		},
		{ name: 'Прошлая неделя', selected: false, interval: 1 },
		{ name: '2 недели назад', selected: false, interval: 2 },
	],
	breakCount: 0,
	soundPlay: false,
}

const tasksReducer = createSlice({
	name: 'tasks',
	initialState: initialState,

	reducers: {
		addNewTask(state, action) {
			state.tasks.push({
				id: uuid(),
				name: action.payload,
				totalTask: 1,
				completedTask: 0,
				taskIsActive: false,
				time: state.settings.workTime,
				isEditName: false,
				isPopupOpen: false,
				taskIsWork: false,
				taskIsPauseWork: false,
				taskIsStop: false,
				taskIsBreak: false,
				taskIsPauseBreak: false,
				taskIsDelete: true,
			})
		},
		increaseTotalTask(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.totalTask++
				}
			})
		},
		decreaseTotalTask(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.totalTask--
				}
			})
		},
		changeIsEditName(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.isEditName = true
				}
			})
		},
		editName(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload.id) {
					task.name = action.payload.name
					task.isEditName = false
				}
			})
		},
		openPopup(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.isPopupOpen = true
				}
			})
		},
		closePopup(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.isPopupOpen = false
				}
			})
		},
		setTaskIsDelete(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.taskIsDelete = false
				}
			})
		},
		deleteTask(state, action) {
			state.tasks = state.tasks.filter(task => task.id !== action.payload)
		},
		setActiveTask(state, action) {
			state.tasks.forEach(task => {
				task.taskIsActive = false
				if (task.id === action.payload) {
					task.taskIsActive = true
				}
			})
		},
		addOneMinute(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					if (!task.taskIsWork && !task.taskIsBreak) task.time += 60
				}
			})
		},

		setSec(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.time--
				}
			})
		},

		startTaskWorking(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.taskIsWork = true
					task.taskIsPauseWork = false
					task.taskIsBreak = false
				}
			})
		},
		pouseTaskWorking(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					if (task.taskIsWork) {
						task.taskIsWork = false
						task.taskIsPauseWork = true
					} else if (task.taskIsBreak) {
						task.taskIsBreak = false
						task.taskIsPauseBreak = true
					}
				}
			})
		},
		stopTaskWorking(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.taskIsWork = false
					task.taskIsPauseWork = false
					task.time = 1500
				}
			})
		},
		сontinueTaskWorking(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					if (task.taskIsPauseWork) {
						task.taskIsWork = true
						task.taskIsPauseWork = false
					} else if (task.taskIsPauseBreak) {
						task.taskIsBreak = true
						task.taskIsPauseBreak = false
					}
				}
			})
		},
		startTaskBreak(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					state.breakCount++
					console.log(state.breakCount % 3 === 0)

					if (
						(task.time === 0 || task.time > 300) &&
						state.breakCount % state.settings.frequencyOfLongBbreaks !== 0
					) {
						task.time = state.settings.shotBreackTime
					}
					if (
						(task.time === 0 || task.time > 300) &&
						state.breakCount % state.settings.frequencyOfLongBbreaks === 0
					) {
						task.time = state.settings.longBreackTime
					}
					task.taskIsWork = false
					task.taskIsPauseWork = false
					task.taskIsBreak = true
				}
			})
		},
		taskSkip(state, action) {
			state.tasks.forEach((task, index, arr: any) => {
				if (task.id === action.payload) {
					if (task.totalTask === 1 && arr.length - 1 > index && task.totalTask === 1) {
						arr[index + 1].taskIsActive = true
						state.tasks = state.tasks.filter(task => task.id !== action.payload)
					}
					if (task.totalTask === 1 && index !== 0 && arr.length - 1 !== 0 && task.totalTask === 1) {
						arr[index - 1].taskIsActive = true
						state.tasks = state.tasks.filter(task => task.id !== action.payload)
					}
					if (task.totalTask === 1 && index === 0 && arr.length - 1 === 0) {
						state.tasks = state.tasks.filter(task => task.id !== action.payload)
					}
					if (task.totalTask > 1) {
						task.completedTask++
						task.totalTask--
						task.time = state.settings.workTime
						task.taskIsPauseBreak = false
						task.taskIsBreak = false
					}
				}
			})
		},

		creatNewDay(state) {
			const fullYear = new Date().getFullYear()
			const month = new Date().getMonth()
			const date = new Date().getDate()
			const day = new Date().getDay()

			let dateIsRepeats = true

			state.statistics.forEach(s => {
				if (s.date.fullYear === fullYear && s.date.month === month && s.date.date === date) {
					dateIsRepeats = false
					return
				}
			})
			if (dateIsRepeats)
				state.statistics.unshift({
					date: {
						fullYear: fullYear,
						month: month,
						date: date,
						day: week[day],
					},
					selectedDay: false,
					workingTime: 0,
					pouseTime: 0,
					stops: 0,
					numberOfComplitedTasks: 0,
				})
		},
		setSecWorkingTime(state) {
			state.statistics[0].workingTime++
		},
		setSecPouseTime(state) {
			state.statistics[0].pouseTime++
		},
		setStops(state) {
			state.statistics[0].stops++
		},
		setNumberOfComplitedTasks(state) {
			state.statistics[0].numberOfComplitedTasks++
		},
		setSelectedWeek(state, action) {
			state.selectedWeek.forEach(week => {
				week.selected = false

				if (week.name === action.payload) {
					week.selected = true
				}
			})
		},
		setSelectedDay(state, action) {
			state.activeWeek.forEach(s => {
				s.selectedDay = false
				if (s.date.date === action.payload.date) {
					s.selectedDay = true
				}
			})
		},
		addActiveWeek(state, action) {
			state.activeWeek = []
			state.activeWeek.push(...action.payload)
		},
		setSettings(state, action) {
			state.settings.workTime = action.payload.workTime * 60
			state.settings.shotBreackTime = action.payload.shotBreackTime * 60
			state.settings.longBreackTime = action.payload.longBreackTime * 60
			state.settings.nightThemes = action.payload.nightThemes
			state.settings.sound = action.payload.sound
			state.settings.frequencyOfLongBbreaks = action.payload.frequencyOfLongBbreaks
		},
		setSoundPlay(state, action) {
			state.soundPlay = action.payload
		},
	},
})
export default tasksReducer.reducer
export const {
	addNewTask,
	increaseTotalTask,
	decreaseTotalTask,
	changeIsEditName,
	editName,
	openPopup,
	closePopup,
	deleteTask,
	setTaskIsDelete,
	setActiveTask,
	addOneMinute,
	setSec,

	startTaskWorking,
	pouseTaskWorking,
	stopTaskWorking,
	сontinueTaskWorking,

	startTaskBreak,

	taskSkip,

	creatNewDay,
	setSecWorkingTime,
	setSecPouseTime,
	setStops,
	setNumberOfComplitedTasks,
	setSelectedWeek,

	setSelectedDay,
	addActiveWeek,
	setSettings,
	setSoundPlay,
} = tasksReducer.actions

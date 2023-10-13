const padTime = (time: any) => {
	return String(time).length === 1 ? `0${time}` : `${time}`
}

export const formatForMinuts = (time: any) => {
	return `${Math.floor(time / 60)}:${padTime(time % 60)}`
}

export const formatSelectedDay = (time: any) => {
	let hour = Math.floor(time / 3600)
	let minuts = Math.floor(time / 60) - hour * 60
	if (
		hour === 0 &&
		(minuts === 1 || minuts === 21 || minuts === 31 || minuts === 41 || minuts === 51)
	) {
		return `${minuts} минуты`
	} else if (hour === 0 && minuts !== 0) {
		return `${minuts} минут`
	} else if ((hour === 1 || hour === 21) && minuts === 0) {
		return `${hour} часа`
	} else if (hour !== 0 && minuts === 0) {
		return `${hour} часов`
	} else if (
		(hour === 1 || hour === 21) &&
		(minuts === 1 || minuts === 21 || minuts === 31 || minuts === 41 || minuts === 51)
	) {
		return `${hour} часа ${minuts} минуты`
	} else if (
		hour !== 0 &&
		(minuts === 1 || minuts === 21 || minuts === 31 || minuts === 41 || minuts === 51)
	) {
		return `${hour} часов ${minuts} минуты`
	} else if ((hour === 1 || hour === 21) && minuts !== 0) {
		return `${hour} часа ${minuts} минут`
	} else if (hour !== 0 && minuts !== 0) {
		return `${hour} часов ${minuts} минут`
	}
}

export const formatPauseTime = (time: any) => {
	let hour = Math.floor(time / 3600)
	let minuts = Math.floor(time / 60) - hour * 60
	if (hour === 0 && minuts === 0) {
		return '0м'
	} else if (hour === 0 && minuts !== 0) {
		return `${minuts}м`
	} else if (hour !== 0 && minuts === 0) {
		return `${hour}ч`
	}
	return `${hour}ч ${minuts}м`
}

export const formatMarkup = (time: any) => {
	let hour = Math.floor(time / 3600)
	let minuts = Math.floor(time / 60) - hour * 60
	if (hour === 0 && minuts === 0) {
		return '0'
	} else if (hour === 0 && minuts !== 0) {
		return `${minuts}мин`
	} else if (hour !== 0 && minuts === 0) {
		return `${hour}ч`
	}
	return `${hour}ч ${minuts}мин`
}

export const formatForHour = (time: any) => {
	let hour = Math.floor(time / 3600)
	let minuts = Math.floor(time / 60) - hour * 60
	if (hour === 0 && minuts === 0) {
		return ''
	} else if (hour === 0 && minuts !== 0) {
		return `${minuts} мин`
	} else if (hour === 1 && minuts === 0) {
		return `${hour} час`
	} else if (hour > 1 && hour < 5 && minuts === 0) {
		return `${hour} часа`
	} else if (hour >= 5 && minuts === 0) {
		return `${hour} часов`
	} else if (hour === 1 && minuts !== 0) {
		return `${hour} час ${minuts} мин`
	} else if (hour > 1 && hour < 5 && minuts !== 0) {
		return `${hour} часа ${minuts} мин`
	} else if (hour >= 5 && minuts !== 0) {
		return `${hour} часов ${minuts} мин`
	}
}

import React from 'react'
import { Icon } from '../utils/Icon/Icon'
import { NavLink } from 'react-router-dom'

export function Header() {
	return (
		<div className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<NavLink to={'/pomodoro'} className='header__logo-wrapper'>
						<Icon name={'LogoIcon'} width={205} height={40} color={'#DC3E22'} />
					</NavLink>
					<div className='header__inner'>
						<NavLink to={'/statistics'} className='header__statistics-icon-wrapper'>
							<Icon name={'StatisticsIcon'} width={114} height={24} />
						</NavLink>
						<NavLink to={'/settings'} className='header__settings-icon-wrapper'>
							<Icon name={'SettingsIcon'} color={'#DC3E22'} />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

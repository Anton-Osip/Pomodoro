import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface IDropdownProps {
	button: React.ReactNode
	children: React.ReactNode
	isOpen?: boolean
	onOpen?: () => void
	onClose?: () => void
}
const NOOP = () => {}

export function Dropdown({
	button,
	children,
	isOpen,
	onClose = NOOP,
	onOpen = NOOP,
}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)

	const ref = useRef<HTMLDivElement>(null)
	const refElem = ref.current?.getBoundingClientRect()

	const node = document.querySelector('#dropdown_root')
	if (!node) return null

	React.useEffect(() => {
		setIsDropdownOpen(isOpen)
	}, [isOpen])

	React.useEffect(() => {
		isDropdownOpen ? onOpen() : onClose()
	}, [isDropdownOpen])

	const handleOpen = () => {
		if (isOpen === undefined) {
			setIsDropdownOpen(!isDropdownOpen)
		}
	}

	return (
		<div className='container'>
			<div onClick={handleOpen} ref={ref}>
				{button}
			</div>
			{isDropdownOpen &&
				createPortal(
					<div className='listContainer'>
						<div
							className='list'
							style={{
								top: Math.round(refElem ? +window.scrollY + refElem.top + refElem?.height * 1.5 : 0),
								left: Math.round(refElem ? refElem.left - 110 : 0),
							}}
							onClick={() => setIsDropdownOpen(false)}
						>
							{children}
						</div>
					</div>,
					node,
				)}
		</div>
	)
}

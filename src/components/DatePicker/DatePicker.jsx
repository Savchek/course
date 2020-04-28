import React from 'react'
import './DatePicker.css'

const Popup = ({ chosenDate, setChosenDate }) => {

	const changeDate = e => {
		const newDate = e.target.value ? new Date(e.target.value) : new Date()
		setChosenDate(newDate.toISOString().slice(0, 10))
	}

	return (
		<div className='datePicker'>
			<label className='datePicker-label' htmlFor="datePicker">
				<input type="date" id="datePicker" value={chosenDate} onChange={changeDate} />
			</label>
		</div>
	)
}

export default Popup
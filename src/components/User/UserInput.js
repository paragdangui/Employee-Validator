import styles from './UserInput.module.css';
import Card from '../UI/Card'
import React, { useState } from 'react';

const UserInput = (props) => {
	const [userInput, setUserInput] = useState('');
	const [ageInput, setAgeInput] = useState('');


	const usernameHandler = (event) => {
		setUserInput(event.target.value);
	}

	const ageHandler = (event) => {
		setAgeInput(event.target.value);
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const formValues = {
			input: userInput,
			age: ageInput
		}
		props.onUserValues(formValues);
	}

	return (
		<form className={styles['form-section']} onSubmit={formSubmitHandler}>
			<Card>
				<label>	Username</label>
				<input type="text" onChange={usernameHandler} />
				<label>	Age(Years)</label>
				<input type="number" onChange={ageHandler} />
				<button>Add User</button>
			</Card>
		</form>
	);
}

export default UserInput;
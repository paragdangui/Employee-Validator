import styles from "./UserInput.module.css";
import Card from "../../UI/Card";
import React, { useState } from "react";
import button from "../../UI/Button.module.css";
import ErrorModal from "../../UI/ErrorModal";



const UserInput = (props) => {
	const [userInput, setUserInput] = useState("");
	const [ageInput, setAgeInput] = useState("");
	let [error, setError] = useState();

	const usernameHandler = (event) => {
		setUserInput(event.target.value);
	};

	const ageHandler = (event) => {
		setAgeInput(event.target.value);
	};


	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (userInput.trim().length === 0 || ageInput.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age (non-empty values)."
			});

		} else if (ageInput < 0) {
			setError({
				title: "Invalid Age",
				message: "Please enter a valid age (>0)."
			});

		} else {

			const formValues = {
				id: Math.random().toString(),
				name: userInput,
				age: ageInput,
			};
			props.onUserValues(formValues);
		}

		setUserInput("");
		setAgeInput("");
	};

	const closeHandler = () => {
		setError(null);
	}

	return (
		<React.Fragment>
			{error && <ErrorModal details={error} onConfirm={closeHandler} />}

			<form className={styles["form-section"]} onSubmit={formSubmitHandler}>
				<Card>
					<label> Username</label>
					<input type="text" value={userInput} onChange={usernameHandler} />
					<label> Age(Years)</label>
					<input type="number" value={ageInput} onChange={ageHandler} />
					<button className={button.button}>Add User</button>
				</Card>
			</form>

		</React.Fragment>

	);
};

export default UserInput;

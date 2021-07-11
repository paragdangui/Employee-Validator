import styles from "./UserInput.module.css";
import Card from "../../UI/Card";
import React, { useState, useRef } from "react";
import button from "../../UI/Button.module.css";
import ErrorModal from "../../UI/ErrorModal";



const UserInput = (props) => {
	const [error, setError] = useState();
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const formSubmitHandler = (event) => {
		event.preventDefault();

		const nameInput = nameInputRef.current.value;
		const ageInput = ageInputRef.current.value;

		if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
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
				name: nameInput,
				age: ageInput,
			};
			props.onUserValues(formValues);
		}

		nameInputRef.current.value = '';
		ageInputRef.current.value = '';

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
					<input type="text" ref={nameInputRef} />
					<label> Age(Years)</label>
					<input type="number" ref={ageInputRef} />
					<button className={button.button}>Add User</button>
				</Card>
			</form>

		</React.Fragment>

	);
};

export default UserInput;

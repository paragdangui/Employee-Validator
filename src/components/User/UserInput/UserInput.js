import styles from "./UserInput.module.css";
import Card from "../../UI/Card";
import React, { useState } from "react";
import errorModal from "./ErrorModal.module.css";
import button from "../../UI/Button.module.css";
import Wrapper from "../../Helpers/Wrapper";

const UserInput = (props) => {
	const [userInput, setUserInput] = useState("");
	const [ageInput, setAgeInput] = useState("");
	const [validInput, setValidInput] = useState(true);
	let [errorMsg, setErrorMsg] = useState(true);

	const usernameHandler = (event) => {
		setUserInput(event.target.value);
	};

	const ageHandler = (event) => {
		setAgeInput(event.target.value);
	};

	const closeHandler = () => {
		setValidInput(true);
	}
	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (userInput.trim().length === 0 || ageInput.trim().length === 0) {

			setErrorMsg("Please enter a valid name and age (non-empty values).");
			setValidInput(false);

		} else if (ageInput < 0) {
			setErrorMsg("Please enter a valid age (>0).");
			setValidInput(false);

		} else {
			console.log("in the else part ");

			const formValues = {
				id: Math.random().toString(),
				name: userInput,
				age: ageInput,
			};
			props.onUserValues(formValues);
			setValidInput(true);

		}

		setUserInput("");
		setAgeInput("");
	};

	return (
		<Wrapper>
			{!validInput &&
				<div className={errorModal.backdrop}>
					<div className={errorModal.modal}>
						<div className={errorModal.header}>
							<h2>Invalid input</h2>
						</div>
						<div className={errorModal.content}>
							<div className={errorModal.msg}>
								{errorMsg}
							</div>
							<div className={errorModal.actions}>
								<button className={button.button} onClick={closeHandler}>Close</button>
							</div>
						</div>
					</div>
				</div>}

			<form className={styles["form-section"]} onSubmit={formSubmitHandler}>
				<Card>
					<label> Username</label>
					<input type="text" value={userInput} onChange={usernameHandler} />
					<label> Age(Years)</label>
					<input type="number" value={ageInput} onChange={ageHandler} />
					<button className={button.button}>Add User</button>
				</Card>
			</form>

		</Wrapper>

	);
};

export default UserInput;

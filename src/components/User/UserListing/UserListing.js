import styles from './UserListing.module.css';

import Card from '../../UI/Card'

const UserListing = (props) => {
	// if (props.userValues.length === 0) {
	// 	console.log('no-listing');
	// } else {
	// 	console.log('there is a listing');
	// }
	// let userEntry = "";
	// if (props.userValues.length > 0) {
	let userEntry = props.userValues.map((userData) => (
		<div className={`${styles['user-list']}`}
			key={userData.id} >
			{userData.name}
			<span> ({userData.age} Years Old)</span>
		</div>
	))
	// }

	return (
		<Card>
			{userEntry}
		</Card>
	);
}
export default UserListing;
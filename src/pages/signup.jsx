import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

const SignUp = ({ children, ...restProps }) => {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const isInvalid = firstName === "" || email === "" || password === "";

	const handleSignUp = (event) => {
		event.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						history.push(ROUTES.BROWSE);
					});
			})
			.catch((error) => {
				setFirstName("");
				setEmail("");
				setPassword("");
				setError(error.message);
			});
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignUp} method="post">
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => {
								setFirstName(target.value);
							}}
						/>
						<Form.Input
							placeholder="Email"
							value={email}
							onChange={({ target }) => {
								setEmail(target.value);
							}}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							value={password}
							onChange={({ target }) => {
								setPassword(target.value);
							}}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign Up
						</Form.Submit>
						<Form.Text>
							Already a user?{" "}
							<Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot. Learn More.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default SignUp;

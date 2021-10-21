import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

const SignIn = ({ children, ...restProps }) => {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid = password === "" || email === "";

	const handelSignIn = (event) => {
		event.preventDefault();
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((e) => {
				setEmail("");
				setPassword("");
				setError(e.message);
			});
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handelSignIn} method="POST">
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
						<Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix?{"  "}
						<Form.Link to={ROUTES.SIGN_UP}>Sign Up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn More.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default SignIn;

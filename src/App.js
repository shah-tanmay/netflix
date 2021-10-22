import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { Browse, Home, SignIn, SignUp } from "./pages";

const App = () => {
	const { user } = useAuthListener();
	return (
		<Router>
			<Switch>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
				>
					<SignIn />
				</IsUserRedirect>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
				>
					<SignUp />
				</IsUserRedirect>
				<ProtectedRoute path={ROUTES.BROWSE} user={user}>
					<Browse />
				</ProtectedRoute>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.HOME}
					exact
				>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
};

export default App;

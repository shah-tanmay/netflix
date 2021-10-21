import { Feature, OptForm } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumboTronContainer } from "../containers/jumbotron";

const Home = ({ children, ...restProps }) => {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>
						Unlimited films, TV programmes and more.
					</Feature.Title>
					<Feature.SubTitle>Watch Anywhere.Cancel at anytime</Feature.SubTitle>
					<OptForm>
						<OptForm.Input placeholder="Email Address" />
						<OptForm.Button>Try it Now</OptForm.Button>
						<OptForm.Break />
						<OptForm.Text>
							Ready to Watch? Enter your email to create or restart your
							membership
						</OptForm.Text>
					</OptForm>
				</Feature>
			</HeaderContainer>
			<JumboTronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
};

export default Home;

import faqsData from "../fixtures/faq.json";
import { Accordion } from "../components";
import { OptForm } from "../components";

export const FaqsContainer = ({ children, ...restProps }) => {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqsData.map((item) => {
				return (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				);
			})}
			<Accordion.Item />
			<OptForm>
				<OptForm.Input placeholder="Email Address" />
				<OptForm.Button>Try it Now</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Ready to Watch? Enter your email to create or restart your membership
				</OptForm.Text>
			</OptForm>
		</Accordion>
	);
};

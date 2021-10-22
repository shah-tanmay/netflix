import {
	Break,
	Column,
	Container,
	Link,
	Row,
	Text,
	Title,
	Author,
} from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Author = function FooterAuthor({ children, ...restProps }) {
	return (
		<Author
			{...restProps}
			href="https://github.com/shah-tanmay"
			target="_blank"
		>
			{children}
		</Author>
	);
};

Footer.Row = function FooterRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
	return <Break {...restProps}>{children}</Break>;
};

export default Footer;

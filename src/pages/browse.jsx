import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { SelectionFilter } from "../utils";

const Browse = ({ children, ...restProps }) => {
	const { series } = useContent("series");
	const { films } = useContent("films");
	const slides = SelectionFilter({ series, films });
	return <BrowseContainer slides={slides} />;
};

export default Browse;

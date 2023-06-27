export default function contentUrlGenerator(
	contentKey,
	contentType,
	thumbnail = false
) {
	const commonUrl =
		"https://github.com/beksiazek/portfolio-davila/blob/master/portfolio_content/";
    const fileName = contentKey + (thumbnail ? "_thumb.jpg" : ".jpg" )
	return (
		commonUrl +
		fileName +
		"?raw=true"
	);
}

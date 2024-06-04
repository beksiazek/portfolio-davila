export default function contentUrlGenerator(
	contentKey,
	contentType,
	thumbnail = false,
	maxres = false
) {
	if (contentType === "avi") {
		return (
			"https://img.youtube.com/vi/" +
			/[^/]*$/.exec(contentKey)[0] +
			"/" + (maxres === true ? "maxres" : "hq") + "default.jpg"
		);
	}
	const commonUrl =
		"https://github.com/beksiazek/portfolio-davila/blob/master/portfolio_content/";
	const fileName = contentKey + (thumbnail ? "_thumb.jpg" : ".jpg");
	return commonUrl + fileName + "?raw=true";
}

import checkImage from "./checkImage";

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
	if (thumbnail) {
		const fileName = contentKey + "_thumb.jpg";
		const thumbUrl = commonUrl + fileName + "?raw=true";
		if (checkImage(thumbUrl)) {
			return thumbUrl;
		}
	}
	const fileName = contentKey + ".jpg";
	const fullUrl = commonUrl + fileName + "?raw=true";
	return fullUrl;
}

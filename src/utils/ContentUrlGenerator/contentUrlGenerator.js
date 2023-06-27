export default function contentUrlGenerator(
	contentKey,
	contentType,
	thumbnail = false
) {
	const commonUrl =
		"https://github.com/beksiazek/portfolio-davila/blob/master/portfolio_content/";
	const folderName = contentType + "/";
	const fileExtension = "." + contentType;
    const fileName = contentKey + (thumbnail ? "_thumb.jpg" : fileExtension)
	return (
		commonUrl +
		folderName +
		fileName +
		"?raw=true"
	);
}

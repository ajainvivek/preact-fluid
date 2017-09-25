// Theme
function shadeColor (color, percent) {

	let R = parseInt(color.substring(1,3),16);
	let G = parseInt(color.substring(3,5),16);
	let B = parseInt(color.substring(5,7),16);

	R = parseInt(R * (100 + percent) / 100, 10);
	G = parseInt(G * (100 + percent) / 100, 10);
	B = parseInt(B * (100 + percent) / 100, 10);

	R = (R<255)?R:255;
	G = (G<255)?G:255;
	B = (B<255)?B:255;

	const RR = ((R.toString(16).length === 1)?'0'+R.toString(16):R.toString(16));
	const GG = ((G.toString(16).length === 1)?'0'+G.toString(16):G.toString(16));
	const BB = ((B.toString(16).length === 1)?'0'+B.toString(16):B.toString(16));

	return '#'+RR+GG+BB;
};

const primaryColor  = '#1072B5';
const secondaryColor = '#1A9EDC';
const linkColor = primaryColor;
const darkColor = '#454d5d';
const lightColor = '#ffffff';
const grayColor = shadeColor(darkColor, -40);
const borderColor = shadeColor(grayColor, -23);
const bgColor = shadeColor(darkColor, -66);
const controlSuccessColor = '#32b643';
const controlWarningColor = '#ffb700';
const controlErrorColor = '#e85600';
const codeColor = '#e06870';
const highlightColor = '#ffe9b3';

export default {
	primaryColor,
	primaryColorDark: shadeColor(primaryColor, 3),
	primaryColorLight: shadeColor(primaryColor, -3),
	secondaryColor,
	secondaryColorDark: shadeColor(secondaryColor, 3),
	secondaryColorLight: shadeColor(secondaryColor, -3),
	linkColor: primaryColor,
	linkColorDark: shadeColor(linkColor, 10),
	darkColor,
	lightColor,
	grayColor,
	grayColorDark: shadeColor(grayColor, 20),
	grayColorLight: shadeColor(grayColor, -20),
	borderColor,
	borderColorDark: shadeColor(borderColor, 15),
	bgColor: shadeColor(darkColor, -66),
	bgColorDark: shadeColor(bgColor, 3),
	bgColorLight: lightColor,
	controlSuccessColor,
	controlWarningColor,
	controlErrorColor,
	codeColor,
	highlightColor
};


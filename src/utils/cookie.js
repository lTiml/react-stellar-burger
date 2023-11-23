export const setCookie = (name, value, props) => {
	props = props || {};
	let exp = props.expires;
	if (typeof exp == 'number' && exp) {
		const date = new Date();
		date.setTime(date.getTime() + exp * 1000);
		exp = props.expires = date;
	}
	if (exp && exp.toUTCString) {
		props.expires = exp.toUTCString();
	}
	value = encodeURIComponent(value);
	let updatedCookie = name + '=' + value;
	for (const propName in props) {
		updatedCookie += '; ' + propName;
		const propValue = props[propName];
		if (propValue !== true) {
			updatedCookie += '=' + propValue;
		}
	}
	document.cookie = updatedCookie;
}

export const getCookie = (name) => {
	const matches = document.cookie.match(
		new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*')
	)
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const deleteCookie = (name) => {
	setCookie(name, null, { expires: -1 });
}
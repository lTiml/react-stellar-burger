export const setCookie = (name: string, value: string, props: { expires?: number | Date | string, [key: string]: any } = {}) => {
	props = {
		path: '/',
		...props
	}
	let exp = props.expires;
	if (typeof exp == 'number' && exp) {
		const date = new Date();
		date.setTime(date.getTime() + exp * 1000);
		exp = props.expires = date;
	}
	if (exp && exp.toString()) {
		props.expires = exp.toString();
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

export const getCookie = (name: string) => {
	const matches = document.cookie.match(
		new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
		)
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const deleteCookie = (name: string) => {
	setCookie(name, '', { expires: -1 });
}
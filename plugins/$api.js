export default function ({ $axios, i18n }, inject) {
	let time = Date.now();
	// const lang = i18n.locale === i18n.fallbackLocale ? '' : '&_locale=' + i18n.locale

	const api = {};

	inject("api", api);
}

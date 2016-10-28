export const API_ROOT = (process.env.NODE_ENV === 'production')
			? 'http://api.jackhu.top/'
			:'http://localhost:4000/api/v1/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
			? '.jackhu.top'
			:''

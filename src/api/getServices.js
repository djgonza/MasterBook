const data = [
	{
		serviceName: 'a',
		user: 'user name',
		pass: 'pass',
		key: '1'
	},
	{
		serviceName: 'b',
		user: 'user name',
		pass: 'pass',
		key: '2'
	},
	{
		serviceName: 'c',
		key: '3'
	}
]

export default () => {
	return new Promise ((resolve, reject) => {
		resolve (data)
	})
}
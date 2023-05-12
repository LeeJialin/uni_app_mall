const BASE_URL = "http://123.207.32.32:7888/api/hy66/"
const TIME_OUT = 10000

// 定义接口类
class LRequest {
	constructor(config) {
		// 保存初始化数据
		this.options = config;
	}

	execute(item) {
		let herder = {
			"Content-Type": "application/x-www-form-urlencoded"
		}
		// 验证是否有登录的token
		// if( token ) ...............
		return new Promise((resolve, reject) => {
			// uni.showLoading({
			// })
			uni.request({
				url: BASE_URL + item.url,
				method: item.method,
				timeout: TIME_OUT,
				data: item.params,
				success: (res) => {
					if (res.statusCode === 200) {
						resolve(res.data)
					}
					if (res.statusCode === 404) {
						uni.showToast({
							title: '数据请求错误',
							icon: "error"
						})
					}

				},
				fail: (err) => {
					uni.showToast({
						title: '网络出了小差',
						icon: "error"
					})
					reject(err)
				}
			})
		})
	}

	create() {
		let modules = {};
		for (let module in this.options.Modules) {
			let modulesApi = {};
			this.options.Modules[module].forEach((item) => { // item:每个模块中的配置项
				modulesApi[item.name] = (params) => { // params:封装的请求参数
					item.params = params;
					return this.execute(item);
				};
			});
			modules[module] = modulesApi; // 将请求的模块再返回出去，形成一个方法
		}
		return modules;
	}
}
export default LRequest;

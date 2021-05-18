import Taro from "@tarojs/taro";

/**
 * 请求参数
 */
interface RequestOption {
	/**
	 * header
	 * */
	header?: { [key: string]: string };

	/**
	 * 请求url
	 * */
	url: string;

	/**
	 * 是否显示loading
	 */
	showLoading: boolean;

	/**
	 * 请求类型
	 */
	method: "GET" | "POST";

	/**
	 * 请求数据
	 */
	data: string | object | ArrayBuffer;

	/**
	 * 是否显示错误信息
	 */
	showErrorToast: boolean;
}

class HttpUtil {

	/**
	 * 显示loading的请求数
	 */
	showLoadingRequestCount = 0

	/**
	 * 数据请求
	 * @export
	 * @class Request
	 */
	request<T>(option: RequestOption): Promise<T> {
		return new Promise((resolve, reject) => {
			if (!option.header) option.header = {};
			if (option.showLoading) {
				if (this.showLoadingRequestCount < 1) {
					Taro.showLoading({ title: '加载中...' });
				}
				this.showLoadingRequestCount++;
			}
			Taro.request({
				url: option.url,
				data: option.data,
				header: option.header,
				method: option.method || 'GET',
				dataType: 'json',
				responseType: "text",
				success: (response: any) => {
					response = response.data
					if (option.showLoading) {
						this.showLoadingRequestCount--
						this.showLoadingRequestCount < 1 && Taro.hideLoading()
					}
					switch (response.code) {
						case 200:
							return resolve(response)
						case 201:
							return reject(response)
						default:
							option.showErrorToast && Taro.showToast({ title: response.msg, icon: 'none' })
							break;
					}
					return reject(response)
				},
				fail: (error) => {
					if (option.showLoading) {
						this.showLoadingRequestCount--
					}
					this.showLoadingRequestCount <= 0 && Taro.hideLoading()
					return reject(error)
				}
			})
		})
	}
}

/**
 * 请求配置
 */
export interface RequestConfig {

	/**
	 * 请求url
	 */
	url: string;

	/**
	 * 请求数量
	 */
	data: string;

	/**
	 * 请求方式
	 */
	method?: "POST"
}

const httpUtil = new HttpUtil()

/**
 * json请求
 * @param url 
 * @param body 
 * @param showLoading 
 * @param showErrorToast 
 */
export function postJson<T>(
	url: string,
	body = {},
	showLoading = true,
	showErrorToast = true,
	header = {},
): Promise<T> {
	return httpUtil.request<T>({
		url: url,
		data: body,
		method: "POST",
		showLoading: showLoading,
		showErrorToast: showErrorToast,
		header: header
	});
}
export {
	httpUtil
}
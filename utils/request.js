//GET请求
function GET(params,url,header={}) {
	let requestHandler={
		params, 
		url,
		header
	}
	return request('GET', requestHandler)

}
//POST请求
function POST(params, url, header = {}) {
	let requestHandler = {
		params,
		url
	}
	return request('POST', requestHandler)
}

function request(method, requestHandler) {
	var params = requestHandler.params;
	var url = requestHandler.url;
	var header = Object.assign(requestHandler.header,{
		'Content-Type': 'application/json'
	})
	let promise = new Promise(function (resolve, reject) {
		wx.request({
			url: url,
			data: params,
			method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			success: function (res) {
				//注意：可以对参数解密等处理
				resolve(res);
			},
			header: header,
			fail: function (err) {
				reject(err);
			},
			complete: function () {
				// complete
			}
		})
	});
	return promise;
}

module.exports = {
	GET: GET,
	POST: POST
}

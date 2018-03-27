# fangchan
微信小程序
小程序采坑笔记
一.小程序页面层级
1.使用wx.navigateTo()或者<navigator>组件跳转的页面路径最多只有5层，这些页面路径是可以通过wx.navigateBack()API或者左上角返回按钮按顺序返回的。
当页面路径大于5层时，使用wx.navigateTo()进行下一页吗跳转会抛出错误：navigateTo:fail webview count limit exceed.
2.微信小程序 wx.navigateBack()返回上一页面时的数据传递
  1）直接获取和操作目标Page对象
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    通过prevPage.setData({data:''})设置参数
  2）使用全局数据存储
    将要传递的数据，存储在App对象上（比如globalData属性）。
    将要传递的数据，存储在小程序的本地数据缓存（Storage）中。
二.

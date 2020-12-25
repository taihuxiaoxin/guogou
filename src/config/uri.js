export default {
//get
    getfrist:"https://www.fastmock.site/mock/c9f35a6d14adb4c434286ca22844ff69/v1/shouye",
    //post 固定参数 "region=province_name"
    getcity:"http://127.0.0.1/city.php?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1608811579892&act=Address&op=get_region",
    //post 固定参数 "region=province_name&parent_id=340" parent_id在上一个页面获取
    getcitytwo:"http://127.0.0.1/city.php?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1608814197761&act=Address&op=get_region",
    //分类一级列表 post 无参数
    getonelist:"http://127.0.0.1/city.php?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1608814714114&act=mobile_cate&op=index",
    //二级列表 post 参数"gc_id=1094" gc_id在一级分类获取
    gettowlist:"http://127.0.0.1/city.php?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1608814714114&act=mobile_cate&op=index",
    //参数gcId
    gettreelist:"http://127.0.0.1/city.php?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1608853631804&act=goods&op=goodsList",
    //参数goods_id   common_id
    getdetail:"http://127.0.0.1/city.php?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1608853631804&act=goods&op=goodsList",

}
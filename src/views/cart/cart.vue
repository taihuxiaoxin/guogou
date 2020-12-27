<template>
	<div class="shop">
		<!-- 未登录 -->
		<div class="shoping" v-show="lookLogin">
			已登录：欢迎
			<button class="loginShop">{{ this.list }}</button>
		</div>
		<!-- 购物车为空列表 -->
		<div class="shopCnt" v-show="lookList">
			<span class="iconfont icon-gouwuche shopLogo"></span>
			<br />
			<span class="shopTxt">购物车空空的，快去逛逛吧！</span>
			<br />
			<van-button @click="go" plain type="primary" class="goBtn">去逛逛</van-button>
		</div>
		<!-- 购物车不为空列表 -->
		<div class="shopList" v-show="shopList">
			<ul class="listUl">
				<van-checkbox-group v-model="Select" ref="checkboxGroup">
					<li v-for="(item, index) in datas" :key="index">
						<van-checkbox class="checkbox_" checked-color="rgb(8,182,125)" :name="index" @click="checkbox_item(item)"></van-checkbox>

						<div class="look_img">
							<img
								style="width: 84px;"
								src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20200521ac%2F695%2Fw445h250%2F20200521%2F4f95-itvqccc3736277.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611569076&t=7a5d499b512aa3a4a04dde9ab95ad0ee"
							/>
						</div>
						<div class="detailed">
							<div class="detailed_1">
								<span class="sp_1">{{ item.goods_name }}</span>
								<br />
								<span class="sp_2">￥</span>
								<span class="sp_3">{{ item.goods_price }}</span>
							</div>
							<div class="detailed_2">
								<button class="deleteBtn" @click="dele(item.gc_id, index)">删除</button>
								<div class="vant_ste">
									<van-stepper
										:value="item.num"
										min="1"
										:max="item.goods_storage"
										input-width="20px"
										button-size="25px"
										@plus="plus(item)"
										@minus="minus(item)"
									/>
								</div>
							</div>
						</div>
					</li>
				</van-checkbox-group>
			</ul>
		</div>
		<van-submit-bar :price="price" button-text="去结算" @submit="onSubmit" class="van-submit-bar">
			<van-checkbox type="primary" @click="checkAll" v-model="check">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
import '@/assets/font_shop/iconfont.css';
import Vue from 'vue';
import { Button, SubmitBar, Checkbox, CheckboxGroup, Stepper } from 'vant';

Vue.use(Button);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
export default {
	data() {
		return {
			title: '原膳澳洲和牛上脑牛排(M4-5)180g',
			money: 128.0,
			value: 1,
			src: 'https://img11.yiguoimg.com/d/items/2020/200706/9288740634372326_300.jpg',

			lookLogin: true,
			lookList: false,
			check: false,
			shopList: true,
			price: 0,
			Select: [],
			datas: [],
			number_: 0,
			list: null,
		};
	},
	methods: {
		go() {
			this.$router.push('/frist');
		},
		onSubmit() {
			console.log(this.price / 100);
		},
		checkAll() {
			this.$refs.checkboxGroup.toggleAll(true);
			this.price = 0;
			this.datas.forEach(v => {
				if (this.check) {
					this.price += v.num * v.goods_price * 100;
				} else {
					this.Select = [];
				}
			});
		},
		dele(val, index) {
			this.datas.some(v => {
				if (val === v.gc_id) {
					console.log(index);
					this.datas.splice(index, 1);
				}
			});
			localStorage.setItem(this.list, JSON.stringify(this.datas));
		},
		plus(item) {
			item.num++;
			// console.log(item.num)
			this.price = this.price + item.goods_price * 100;
		},
		minus(item) {
			item.num--;
			// console.log(item.num)
			this.price = this.price - item.goods_price * 100;
		},
		checkbox_item(item) {
			this.price += item.num * item.goods_price * 100;
		}
	},
	created() {
		this.$http.get('/api/info').then(ret => {
			// console.log(ret)
			if (ret.code == 0) {
				// console.log(ret.userinfo.mobile)
				let data_ = JSON.parse(localStorage.getItem(ret.userinfo.mobile));
				// console.log(data_)
				this.list = ret.userinfo.mobile;
				this.datas = data_;
				if(this.datas.length<1){
					this.lookList = true
				}
			}
		});
	},
	watch: {
		datas: {
			handler() {
				// console.log(this.datas)
				localStorage.setItem(this.list, JSON.stringify(this.datas));
				if(this.datas.length<1){
					this.lookList = true
				}
			},
			deep: true
		}
	}
};
</script>
<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}

.shop {
	width: 100%;
	height: 823px;
	background-color: rgb(244, 244, 244);
}
.shoping {
	width: 100%;
	height: 43px;
	text-align: center;
	line-height: 43px;
	color: #808080;
	font-size: 12px;
	background-color: white;
	margin-bottom: 10px;
}
.loginShop {
	border: none;
	background-color: white;
	color: #808080;
	border-radius: 2px;
	padding-left: 15px;
	padding-right: 15px;
	// padding-top: 3px;
	// padding-bottom: 3px;
	margin-left: 5px;
	font-size: 13px;
}
.shopCnt {
	text-align: center;
	width: 100%;
	height: 400px;
	background-color: white;
}
.shopLogo {
	display: inline-block;
	margin-top: 70px;
	margin-bottom: 20px;
	font-size: 150px;
	color: #808080;
	background-color: white;
}
.shopTxt {
	color: #808080;
	font-size: 14px;
	background-color: white;
}
.goBtn {
	background-color: white;
	margin-top: 40px;
	padding-left: 50px;
	padding-right: 50px;
}
.listUl li {
	width: 100%;
	height: 110px;
	background-color: white;
	margin-bottom: 1px;
}
.checkbox_ {
	padding-top: 49px;
	padding-left: 10px;
	padding-right: 10px;
	float: left;
}
.look_img {
	width: 140px;
	height: 95px;
	padding-top: 13px;
	// background-color: red;
}
.detailed {
	width: 260px;
	height: 108px;
	// background-color: green;
	float: right;
	margin-top: -107px;
	.detailed_1 {
		width: 70%;
		height: 100%;
		// background-color: orange;
		float: left;
		.sp_1 {
			display: inline-block;
			margin-top: 5px;
			margin-bottom: 30px;
			color: #333333;
			font-size: 14px;
		}
		.sp_2,
		.sp_3 {
			color: red;
			font-size: 16px;
		}
	}
	.detailed_2 {
		width: 30%;
		height: 100%;
		// background-color: lightblue;
		float: left;
		text-align: center;
		.deleteBtn {
			margin-top: 25px;
			background-color: white;
			border: none;
			color: red;
		}
		.vant_ste {
			margin-top: 20px;
		}
	}
}
.van-submit-bar {
	bottom: 51px;
}
</style>

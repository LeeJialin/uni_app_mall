<template>
	<view class="content">
		首页
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import api from '@/api/index.js'
import { useCounterStore } from '../../store/counter.js'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count } = storeToRefs(store)
function add() {
	store.increment()
}

onMounted( async () => {
	// console.log(11111111111)
	// console.log(api)
	let result = await api.home.getHomeList()
	console.log(result)
	
	
	
})



</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

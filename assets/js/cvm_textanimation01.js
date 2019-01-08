 "use strict";

document.addEventListener("DOMContentLoaded", function(event)
{
	class TextAnimation01 
	{
		constructor(container) 
		{
			this.textOrigin;
			this.container = container;
			this.init()
		}

		randNameLetters()
	    {
	        //let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	        let chars = "電电電買买買車车車紅红紅無无無東东東馬马馬風风風時时時鳥鸟鳥語语語頭头頭魚鱼魚園园園長长長島岛島愛爱愛紙纸紙書书書見见見佛佛仏德德徳拜拜拝黑黑黒冰冰氷兔兔兎妒妒妬每每毎壤壤壌步步歩巢巢巣惠惠恵鞋鞋靴莓莓苺圓圆円聽听聴實实実證证証龍龙竜賣卖売龜龟亀藝艺芸戰战戦繩绳縄關关関鐵铁鉄圖图図團团団轉转転廣广広惡恶悪豐丰豊腦脑脳雜杂雑壓压圧雞鸡鶏價价価樂乐楽氣气気廳厅庁發发発勞劳労劍剑剣歲岁歳權权権燒烧焼贊赞賛兩两両觀观観營营営處处処齒齿歯驛驿駅櫻樱桜產产産讀读読顏颜顔學学学體体体點点点麥麦麦蟲虫虫舊旧旧萬万万盜盗盗寶宝宝國国国醫医医雙双双晝昼昼觸触触來来来畫画画黃黄黄區区区";
	        let index = Math.floor((Math.random() * chars.length - 1) + 1);
	        return chars[index];
	    }

	    transformToLetters(that)
	    {
	    	let letters = this.container.querySelectorAll(".textAnimation01_focus span")
	    	let index = 0;
	    	let lettersLength = letters.length - 1;

	    	for (let i = 0, length = letters.length; i < length; i++)
	    	{
	    		let time = i * 15 + 1250;
		    	let timeBeforeGoodLetter = setTimeout(function()
				{
					letters[i].textContent = that.textOrigin[i];
				}, time);
	    	}

			let tempo = setInterval(function()
			{
				if (index == lettersLength)
				{
					clearInterval(tempo);
				}
				letters[index].classList.add("textAnimation01-letter");
				index += 1;
			}, 15);
	    }


	    transformToSymbols(that, event)
	    {
	    	event.preventDefault();

			let tagFocus = this.container.querySelector(".textAnimation01_focus");
			this.textOrigin = tagFocus.textContent;
			let textTemp = "";
			for (let i = 0, length = this.textOrigin.length; i < length; i++)
			{
				textTemp += '<span>' + this.randNameLetters() + '</span>';
			}
			tagFocus.innerHTML = textTemp;

			this.transformToLetters(that);
	    }

		init()
		{
			let that = this;
			let launchBtn = this.container.querySelector("button");
			launchBtn.addEventListener("click", this.transformToSymbols.bind(this, that), false);
		}
	}

	let initTextAnimation01 = function()
	{
		let textAnimation01Container = document.querySelectorAll(".textAnimation01");
		let textAnimation01Obj = [];
		for (let i = textAnimation01Container.length - 1; i >= 0; i--)
		{
			textAnimation01Obj.push(new TextAnimation01(textAnimation01Container[i]));
		}
	}
	initTextAnimation01();
});

/* 	
	(sass: "assets/cvm/sass/_textAnimation01.scss")

	HTML:

	<div class="textAnimation01">
		<h2>...</h2>
		<button>Test</button>
	</div>

    <script type="text/javascript" src="assets/cvm/js/cvm_textAnimation01.js"></script>
*/



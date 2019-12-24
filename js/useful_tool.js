let vn=new Vue({
    el:'#app1',
    data:{
        pic:[
            {
                hre:"https://cantunsee.space/",
                img:"img/useful_001.png",
                tit:"cantunsee",
                recon:"它可以在线练习对手机UI界面设计中细节的把握，通过对两个类似设计的选择，选出正确的设计并得分"
            },
            {
                hre:"http://www.yingjingtu.com/index",
                img:"img/useful_011.ico",
                tit:"应景图",
                recon:"给gif添加字幕"
            },
            {
                hre:"https://10minutemail.com/10MinuteMail/index.html",
                img:"img/useful_030.png",
                tit:"10MinuteMail",
                recon:"10分钟邮箱，专注注册垃圾网站"
            },
            {
                hre:"http://tool.mkblog.cn/",
                img:"img/useful_021.ico",
                tit:"孟坤工具箱网页版",
                recon:"程序猿攻城狮的好伙伴"
            },
            {
                hre:"http://www.websiteasteroids.com",
                img:"img/useful_008.png",
                tit:"网页空战",
                recon:"它可以让你在任何网页上玩空战小游戏。可以打掉广告"
            },
            {
                hre:"https://haveibeenpwned.com/",
                img:"img/useful_066.ico",
                tit:"密码泄露查询工具",
                recon:"在这个网页中，我们可以查看到自己的账号密码是否被泄露。只需要输入你常用的邮箱或者用户名，就能查询到密码有没有被泄露."
            },
            {
                hre:"https://smallpdf.com/cn",
                img:"img/useful_004.png",
                tit:"Small PDF",
                recon:"可能是最好的在线文件转换器"
            },
            {
                hre:"https://www.apowersoft.cn/",
                img:"img/useful_028.svg",
                tit:" apowersoft ",
                recon:"好的音频视频在线管理工具。"
            },
            {
                hre:"https://www.creativelive.com/",
                img:"img/useful_239.png",
                tit:"Creativelive",
                recon:"国外在线教育网站"
            },
            {
                hre:"https://www.gaoding.com/",
                img:"img/boring_31.ico",
                tit:"稿定抠图",
                recon:"在线抠图、证件照换背景"
            },
            {
                hre:"https://yijiangaitu.com/",
                img:"img/useful_004.ico",
                tit:"一键改图",
                recon:"图像基础处理"
            },
            {
                hre:"https://photofunia.com/",
                img:"img/useful_295.ico",
                tit:"Photofunia",
                recon:"趣味图片换脸及图片制作"
            },
            {
                hre:"https://www.soogif.com/",
                img:"img/useful_122.ico",
                tit:"SOOGIF",
                recon:"多图合成GIF动图制作及编辑"
            },
            {
                hre:"https://ringer.org/",
                img:"img/useful_215.png",
                tit:"Ringer",
                recon:"在线铃声制作"
            },
            {
                hre:"https://www.apowersoft.cn/free-online-screen-recorder",
                img:"img/useful_012.svg",
                tit:"Apowersoft",
                recon:"在线录屏"
            }
        ],
        hot:[
            {
                link:"https://www.apowersoft.cn/free-online-screen-recorder",
                tit:"1.Apowersoft"
            },
            {
                link:"https://ringer.org/",
                tit:"2.Ringer"
            },
            {
                link:"http://www.yingjingtu.com/index",
                tit:"3.应景图"
            },
            {
                link:"https://cantunsee.space/",
                tit:"4.cantunsee"
            },
            {
                link:"https://www.gaoding.com/",
                tit:"5.稿定抠图"
            }
        ]
    }
});
function closeNav(){
    document.getElementById("side").style.display = "none";
}
function openNav(){
    document.getElementById("side").style.display = "block";

}
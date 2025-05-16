<template>

  <div class="app_footer">
    <!--联系我们-->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd>
            <i class="iconfont icon-kefu">在线客服</i>
            <p> 在线客服</p>
          </dd>
          <dd>
            <i class="iconfont icon-question"></i>
            问题反馈
          </dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i>公众号</dd>
          <dd><i class="iconfont icon-weibo">微博</i>></dd>
        </dl>
        <!--下载页面-->
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode">
            <img :src="qrcode" alt="二维码">
          </dd>
          <dd>
            <span>扫描二维码</span>
            <span>立马下载页面</span>
            <el-button type="primary">下载页面</el-button>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd>
            <span>30000-300-0</span>
            <small>周一至周日</small>
          </dd>
        </dl>
      </div>
    </div>

  <!--其他-->
  <div class="extra">
    <div class="container">
      <div class="slogan">
        <p>价格亲民</p>
        <p>物流快捷</p>
        <p>品质新鲜</p>
      </div>
      <div class="copyright">
         <p>
           <a href="">关于我们</a>
           <a href="">帮助中心</a>
           <a href="">售后服务</a>
           <a href="">配送与验收</a>
           <a href="">商务合作</a>
           <a href="">搜索与推荐</a>
           <a href="">友情链接</a>
         </p>
        <p> copright cat</p>



      </div>
    </div>
  </div>
</div>

</template>

<script setup>
//静态导入img
import qrcode from '@/assets/images/qrcode.jpg'


</script>

<style lang="scss" scoped>
.app_footer {
  display: block;
  background: white;
  padding-top: 20px;
.contact {
  background-color: #ffffff;
  .container {
    padding: 60px 0 40px 25px;
    display: flex;
  }
  dl{
    height:190px;
    text-align:center;
    padding:0 72px;
    border-right: 1px solid #f2f2f2;
    &:first-child{
      padding-left:0px;
    }
    &:last-child{
      padding-right:0px;
    }
  }
  dt{
    line-height:1;
    font-size: 18px;
  }
  dd{
    margin:36px 12px 0 0;
    float: left;
    width: 92px;
    height: 92px;
    padding-top:10px;
    border:1px solid #ededed;
  }
  .qrcode{
    width: 92px;
    height:92px;
    padding: 7px;
    border: 1px solid #ededed;
  }

}
  .extra {
    background: #333;
    .container{
      display: flex;
      flex-direction: column;
     justify-content: center;
      align-items: center;
    }
  }
  .slogan{
    padding:60px 100px ;
    width: 100%;
    color:#f2f2f2;
    display: flex;
    border-bottom: 1px  solid #f2f2f2;
    display: flex;
    justify-content: center;
    p{
      margin: 0px 90px;
      font-size: 40px;

    }
  }
  .copyright{
    padding-top:20px ;
    a{
      color:#f2f2f2;
      border-right: 1px solid #f2f2f2;
      margin: 0 10px;
    }
  }


}

// .app_footer{
//   background: white;
//   width: 1500px;
//  .container{
//   width: 100%;
//   display: flex;
//   margin-left: 50px;
//   margin-right: 50px;
//   dl{
//     margin-top: 50px;
//     margin-bottom: 100px;

//   }
//  }

// }
// .extra{
//   display: flex;
// .container{
//   display: flex;
//   background: lightgray;
//   color: white;
//   dl{
//     margin-left: 100px;
//     margin-right: 100px;
//     padding:20px 0;
//   }
// }
// }


</style>

<template>
   <nav class="app-topnav">
    <div class="container">
        <ul>
            <template v-if="isLogin">
                 <el-popconfirm
                    confirm-button-text="确认？"
                    cancel-button-text="取消"
                    :icon="InfoFilled"
                    icon-color="#626AEF"
                    title="确认要退出登录吗?"
                    @confirm="confirmEvent"
                    @cancel="cancelEvent"
                            >
                    <template #reference>
                    <el-button>退出</el-button>
                    </template>
                </el-popconfirm>
            </template>
            <template v-else>
                <li><a href="#">请先登录</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">关于我们</a></li>
            </template>
        </ul>
    </div>
   </nav>
   
</template>

<script setup>
import{ref}from 'vue'
const isLogin=ref(null)


</script>

<style lang="scss" scoped>
.app-topnav{
    background:#1dc779
}
ul{
    display: flex; 
    height: 53px;
    justify-content:flex-end;
    align-items:center;

    li{
        a{
             padding: 0 15px;
             color:#cdcdcd;
             line-height:1;
             display:inline-block;

             i{
                font-size:14px;
                margin-right:2px
             }
             &:hover{
                color:$xtxColor
             }

        }
        ~li{
            a{
                border-left:2px solid #666
            }
        }


    }
}

</style>

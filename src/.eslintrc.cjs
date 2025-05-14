
export default{
    root:true,
    'extends':[
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions:{
        ecmaVersion:'latest'
    },
    rules:{
        'vue/multi-word-component-names':true
    },
    env:{
        node:true,
        browser:true
    }
    

}
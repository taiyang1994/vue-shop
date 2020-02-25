import Vue from 'vue'
import { Button, Form, FormItem, Input, Menu, MenuItem, Submenu, Aside, Container, Header, Main, Message } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 设置语言
locale.use(lang)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Main)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.prototype.$message = Message

<template>
  <div>
    <router-link to="/dashboard/dash">
     Go to "/dashboard/dash"
   </router-link>
 </br>
    <router-link to="/dashboard/contact">
     Go to "/dashboard/contact"
   </router-link>
 </br>
   <router-link to="/dashboard/children">
    Go to "/dashboard/children"
  </router-link>
      <!-- <header>
       HEADER
      </header>
      <div class="app-body">
        <div class="sidebar">
      </div>
      <div class="main">
       <nav class="bg-grey-light p-3 rounded font-sans m-4">
          <ol class="list-reset flex text-grey-dark">
            <li><a href="#" class="text-blue font-bold">Home</a></li>
            <li><span class="mx-2">/</span></li>
            <li><a href="#" class="text-blue font-bold">Library</a></li>
            <li><span class="mx-2">/</span></li>
            <li>Data</li>
          </ol>
        </nav>
        <div class="container"></div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey">1</div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey-light">2</div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey">3</div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey-light">4</div>
      </div>
    </div>
     -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
  <div id="wrapper" class="flex h-screen bg-grey-lightest sm:flex-col md:flex-row font-light w-full">
          <div id="sidebar" class="bg-orange-darker md:w-64 overflow-y-scroll sm:w-screen">
              <header class="flex justify-between items-center border-b border-orange-darkest pt-8 pb-8 pl-6 pr-6">
                  <div id="logo">
                      <a href="#" class="no-underline text-white md:text-2xl sm:text-4xl font-bold">
                          <img src="#" width="120" alt="">
                          kissTheme
                      </a>
                  </div>
                  <div id="collapse" class="text-white border border-white p-2 h-8 rounded">
                      <i class="fa fa-bars" aria-hidden="true"></i>
                  </div>
              </header>
              <div id="profile" class="flex items-center border-b border-orange-darkest px-8 py-6">
                  <div id="img" class="w-1/4">
                      <img src="https://scontent.fscl14-1.fna.fbcdn.net/v/t1.0-1/p80x80/17353312_10211368131493981_4314191449503901504_n.jpg?oh=829362e45b722e771e7a7200c9191a5e&oe=5AC839A5" width="55" alt="" class="rounded-full">
                  </div>
                  <div id="welcome" class="text-white w-2/4 sm:ml-1 md:ml-4">
                      <p class="text-xs">Welcome,</p>
                      <span class="text-lg">Fabian Olivares</span>
                  </div>
              </div>
              <ul id="menu" class="flex flex-col list-reset sm:hidden md:block">
                  <li class="block">
                    <router-link to="/dashboard/dash" class="no-underline text-white block h-full w-full border-b border-orange-darkest px-8 py-4 hover:text-orange">
                      <i class="fa fa-tachometer mr-2" aria-hidden="true"></i>
                      Dashboard
                   </router-link>
                  </li>
                  <li class="flex justify-between block">
                      <a href="#" class="no-underline text-white block h-full w-full border-b border-orange-darkest px-8 py-4 hover:text-orange">
                          <i class="fa fa-user mr-2" aria-hidden="true"></i>
                          Account
                          <i class="fa fa-angle-right float-right" aria-hidden="true"></i>
                      </a>
                  </li>
                  <li class="block">
                      <a href="#" class="no-underline text-white block h-full w-full border-b border-orange-darkest px-8 py-4 hover:text-orange">
                          <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
                          MailBox
                          <i class="fa fa-angle-down float-right" aria-hidden="true"></i>
                      </a>
                      <ul class="flex flex-col list-reset bg-orange-darkest block">
                          <li class="flex block border-b border-orange-darker">
                              <a href="#" class="no-underline text-white block h-full w-full ml-4 hover:text-orange px-8 py-4">
                                  <i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                                  Inbox
                              </a>
                          </li>
                          <li class="flex block border-b border-orange-darker">
                              <a href="#" class="no-underline text-white block h-full w-full ml-4 hover:text-orange px-8 py-4">
                                  <i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                                  Categories
                                  <i class="fa fa-angle-down float-right" aria-hidden="true"></i>
                              </a>
                          </li>
                          <ul class="flex flex-col list-reset bg-orange-darkest block">
                              <li class="flex block border-b border-orange-darker">
                                  <a href="#" class="no-underline text-white block h-full w-full ml-8 hover:text-orange px-8 py-4">
                                      <i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                                      Social
                                  </a>
                              </li>
                              <li class="flex block border-b border-orange-darker">
                                  <a href="#" class="no-underline text-white block h-full w-full ml-8 hover:text-orange px-8 py-4">
                                      <i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                                      Notifications
                                  </a>
                              </li>
                          </ul>
                      </ul>
                  </li>
                  <li class="block">
                    <router-link to="/dashboard/contact" class="no-underline text-white block h-full w-full border-b border-orange-darkest px-8 py-4 hover:text-orange">
                      <i class="fa fa-address-book" aria-hidden="true"></i>
                      Contact
                   </router-link>
                  </li>
              </ul>
          </div>
          <div id="content" class="px-8 bg-transparent flex-grow flex-shrink flex-auto overflow-y-scroll">
              <div id="info" class="border-b border-grey-light h-24">
                  <div class="flex justify-between flex-grow items-center border-b h-24">
                      <div class="flex">
                          <ul class="flex list-reset text-black">
                              <li class="py-4 px-4">
                                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                              </li>
                              <li class="py-4 px-4">
                                  <i class="fa fa-envelope" aria-hidden="true"></i>
                              </li>
                              <li class="flex items-center w-8 h-8 ml-8">
                                  <a href="#" class="relative no-underline text-black">
                                      <i class="fa fa-list absolute pin-t pin-r" aria-hidden="true"></i>
                                      <span class="absolute rounded-full h-4 w-4 bg-orange text-xs text-center leading-tight text-white pin-b pin-l">2</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div class="flex">
                          <ul class="flex list-reset text-black">
                              <li class="px-4">
                                  <span class="text-sm">
                                      <i class="fa fa-comments" aria-hidden="true"></i>
                                      Chat
                                  </span>
                              </li>
                              <li class="border-l px-4">
                                  <span class="text-sm" @click="logout()" style="cursor:pointer">
                                      Log Out
                                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                                  </span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div id="info" class="border-b border-grey-light h-24">
                <div class="container mx-auto">

                  <h2>Router</h2>
                  <router-view />
                </div>
              </div>
          </div>
      </div>


  </div>
</template>

<script>
import store from "@/store"
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout(){
      console.log("logout")
      this.$destroy();
      //this.$session.destroy();
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

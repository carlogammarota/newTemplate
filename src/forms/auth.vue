<template>
    <div>
        <!-- Modal Register -->
        <modal name="newUser" class="modal" height="auto">
          <form class="w-full max-w-md newUser">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                <p class="text-red text-xs italic">Please fill out this field.</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-last-name" type="text" placeholder="Doe">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                    Password
                </label>
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-password" type="password" placeholder="******************">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                    Repeat your Password
                </label>
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-password" type="password" placeholder="******************">
                <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                    City
                </label>
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Albuquerque">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                    State
                </label>
                <div class="relative">
                    <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                        Zip
                    </label>
                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-zip" type="text" placeholder="90210">
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" style="text-align:center;margin:auto;">
                    <button style="margin-top:20px" class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                        Sing Up
                    </button>
                </div>
            </div>
            </form>
        </modal>


        <!-- Login  -->
        <div class="w-full max-w-xs auth">
        <!-- logo \ login -->
            <font-awesome-icon style="font-size:180px"  icon="coffee" />
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
                <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input v-model="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                <p class="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                <button @click="login()"  class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a>
                </div>

                </br>

                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    You do not have an account?
                </label>

                </br>
                <button style="text-align:center" @click="newUser()" class="bg-green hover:bg-green-light text-white font-bold py-2 px-4 border-b-4 border-green-dark hover:border-green rounded">
                    Sing Up
                </button>

            </form>
            <p class="text-center text-grey text-xs">
                ©2019 Acme Corp. All rights reserved.
            </p>
        </div>
    </div>

</template>

<script>
    import firebase from "firebase";
    //import router from '..//router'
    //import router from '..//router'
    import { mapActions, mapGetters } from "vuex";

	export default {
		name: "login",
		data(){
			return {
				valid: false,
				email: "",
				emailRules:[

				],
				password: "",
				passwordRules:[
				],
				password_confirmation: "",
				passwordConfirmationRules:[
				]
			}
		},
    computed:{
      ...mapGetters(['getUser'])
    },
		methods: {
            ...mapActions(["updateStore"]),
            // signUp(){
            //     firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            //         function (user){

            //         },
            //         function (err){
            //             console.log("oops", err.message)
            //         }
            //     );
            // },
			      submit(){
                 console.log(this.email, this.password)
                 //this.$emit("process", {email:this.email, password:this.password});
                 this.$router.push('dashboard')

                },
            login(){
                var self = this;
                //this.updateStore("test test test");
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                       //GUARDAR USER EN EL STATE EL USER!!!!
                        self.updateStore(user);

                        console.log("you are Login");
                        console.log(self.$router);

                        //si sale todo bien el login lo redirigimos a dashboard
                        //this.Router.replace("dashboard")
                        self.$router.push('dashboard')
                    },
                    function(err) {
                        console.log("error ", err.message)
                    }
                );
            },
            newUser(){
            this.show();
            },
            show () {
                this.$modal.show('newUser');
            },
            hide () {
                this.$modal.hide('newUser');
            }
		}
	}
</script>
<style>
.auth{
  margin: auto;
}

.newUser{
    padding: 50px;
    border: solid 3px #6CB2EB;
}

</style>

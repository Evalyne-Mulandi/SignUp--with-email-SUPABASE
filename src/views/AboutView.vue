<template>
  <main class="  max-h-screen p-28    ">
    <form class=" rounded-md border mt-6 max-w-lg mx-auto p-8" action="#" method="POST">
         
         <div>
           <label class="block text-gray-700">Email Address</label>
           <input
           v-model="email"
             type="email"
             name=""
             id=""
             placeholder="Enter Email Address"
             class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
             autofocus
             autocomplete
             required
           />
         </div>
         <div class="mt-4">
           <label class="block text-gray-700">Password</label>
           <input
           v-model="password"
             type="password"
             name=""
             id=""
             placeholder="Enter Password"
             minlength="6"
             class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
             required
           />
         </div>
       <!--   <div class="text-right mt-2">
           <a
             href="#"
             class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
             >Forgot Password?</a
           >
         </div> -->
         <button> 
        
           <router-link
            to="/heros"
            class="  px-48 w-full block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 cursor-pointer"
          >
            submit
          </router-link>
         </button>
         </form>
  </main>
</template>
 <script>

import {supabase} from '../supabase/init'
export default {
data(){
  return{
    email:"",
    password:""
  }
},
methods:{
 
   async  signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email:this.email,
    password: this.email
  })
  if(error){
    console.log(error);
  }else{
    console.log(data);
  }
}
}


} 
</script>
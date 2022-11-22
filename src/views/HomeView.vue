<template>
  <!-- component -->
  <section class="flex flex-col md:flex-row h-screen items-center overflow-hidden">
    <div class="bg-slate-900 lg:block w-full md:w-1/2 xl:w-2/3 h-screen"  >
      <img
        src="https://cdn.pixabay.com/photo/2022/06/17/16/48/subscribe-7268360_960_720.jpg"
        alt=""
        class="w-full h-3/4 md:h-full object-cover"
      />
    </div>
 

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full  md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl pb-4  md:text-2xl font-bold leading-tight mt-12">
          Sign in to your account
        </h1>
        
        <!-- <div class="flex justify-center items-center mx-auto flex-col gap-y-1">
          <div
            
            class="flex justify-center items-center mx-auto text-xs font-extrabold text-black bg-green-300 p-4 rounded-md"
          >
           
          </div>
          <div
            
            class="flex justify-center items-center mx-auto text-xs font-extrabold text-black bg-green-300 p-4 rounded-md"
          >
           
          </div>
          <div
            
            class="flex justify-center items-center mx-auto text-xs font-extrabold text-black bg-green-300 p-4 rounded-md"
          >
           
          </div>
        </div> -->

         <form class="mt-6" action="#"  @submit.prevent="signUpWithEmail">
         
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
          <button
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Sign In
          </button>
          <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500"> Already have an account? </span>
            </div>
          </div>

          <router-link
            to="/About"
            class="w-full inline-flex justify-center text-sm font-medium text-indigo-600 cursor-pointer"
          >
            login
          </router-link>
          <div class="mt-6"></div>
        </div>
        </form> 

        <hr class="my-6 w-full" /> 
        <!-- <button
          type="button"
          class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
         
        >
           <div class="flex items-center justify-center">
            <span class="ml-4"> LogOut </span>
          </div> 
        </button> -->

        <button
       @click="signInWithGoogle"
          type="button"
          class="w-full block  bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
           
        >
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="w-6 h-6"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b">
                <use xlink:href="#a" overflow="visible" />
              </clipPath>
              <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
              <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
              <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
            </svg>
            <span class="ml-4"> Log in with Google</span>
          </div>
        </button>
         

        <button
     @click="signInWithGithub"
          type="button"
          class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
           
        >
          <div class="flex items-center justify-center">
            <svg
              fill="currentColor"
              class="w-6 h-6 m-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span class="ml-4"> Log in with Github</span>
          </div>
        </button>
      </div>
    </div>
  </section>
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
   async signInWithGoogle(){
    const {user,error}=await  supabase.auth.signInWithOAuth({
      provider:'google'
    })
    if(error){
      console.log(error);
    }else{
      console.log(user);
    }
   },
   async signInWithGithub(){
   const {user,error}=await supabase.auth.signInWithOAuth({
    provider:"github"
   })
   if(error){
     console.log(error);
   }else{
   console.log(user);
   }
    
   },
   async signUpWithEmail(){
   const { user, error } = await supabase.auth.signUp({
  email:this.email,
  password:this.password,
})
if(error){
  console.log(error);
}else{
  console.log(user);
  this.$router.push('/About')
}
}
}


} 


</script>


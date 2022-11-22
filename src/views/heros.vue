<template>
    
    <main class=" p-2 pr-10 md:flex hidden justify-end items-center mx-auto flex-row gap-x-20">
    <div class=" uppercase pr-96 text-black text-xl flex  font-bold">Coder</div>
    <nav class="  bg-blue-500 text-white   p-3 rounded-3xl">
    <router-link to="/" class="text-white">Home</router-link>  |
    <router-link to="/about"  class="text-white">About</router-link>  |
    <router-link to="/services"  class="text-white">services</router-link> | |
    <router-link to="/login"  class="text-white">Logout</router-link>  
    
  </nav>
   </main> 
   
    <main>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="relative overflow-hidden bg-transparent dark:bg-slate-900">
        <div class="mx-auto max-w-7xl">
          <div
            class="relative z-10 bg-transparent dark:bg-slate-800 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32"
          >
            <svg
              class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
  
            <div>
              <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div class="flex w-full items-center justify-between md:w-auto">
                      <a href="#">
                        <!-- https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600 -->
                      </a>
                      <div class="-mr-2 flex items-center md:hidden">
                  
                      </div>
                    </div>
                  </div>
                  <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                   
  
                    
                    
  
                     
   
                  </div>
                </nav>
              </div>
  
              <!--
              Mobile menu, show/hide based on menu open state.
    
              Entering: "duration-150 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
              <div
                class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div
                  class="overflow-hidden rounded-lg bg-white dark:bg-slate-900 shadow-md ring-1 ring-black ring-opacity-5"
                >
                  
               
                 
                   
                </div>
              </div>
            </div>
  
            <main
              class="  bg-transparent mx-auto   max-w-7xl px-4  "  
            >
              <div class="sm:text-center lg:text-left">
                <h1
                  class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl"
                >
                  <span class="block xl:inline">Take it to next level</span>
                  <span class="block text-indigo-600 xl:inline">
                    learn the skills lead  <p class="ml-24">the future.</p></span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-gray-500 sm:mx-auto font-mono sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat odit dolore perferendis optio natus. Alias atque neque debitis amet perferendis a recusandae assumenda enim, ad, dicta rerum ipsa provident non!
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <router-link
                      to="/"
                      class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-1 md:px-3 md:text-lg"
                      ><button> Learn More</button> 
                    </router-link>
                  </div>

                  <div class=" mx-20 rounded-md shadow">
                    <router-link
                      to="/"
                      class="flex w-full items-center justify-center rounded-md border border-transparent  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-1 md:px-3 md:text-lg"
                      ><button> get started</button> 
                    </router-link>
                     
                  </div>
                 
                </div>
              </div>
            </main> 
   
          </div>
        </div>
         
       <!--  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
           <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
         src="../assets/lap.jpg"  
            alt=""
          /> 
        </div> -->
      </div>
      <div class="custom-shape-divider-bottom-1668769796">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
 
    </main>
  
    
  <div  
    class="   relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full bg-blue-500"  
  >
  
    <div
      class="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
    >

    

      <img
        src="../assets/lap.jpg"
        class="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
        alt=""
      />
    </div>
    <div class="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
      <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <div>
            <p
              class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-white uppercase rounded-full bg-teal-accent-400"
            >
              E-TECH SOLUTIONS.
            </p>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400 sm:text-4xl sm:leading-none"
          >
            Computer shop.<br class="hidden md:block" />

            <span class="inline-block text-deep-purple-accent-400 dark:text-gray-400"
              >Nakuru</span
            >
          </h2>
          <p class="text-base text-white dark:text-gray-400 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente iste, 
            impedit cum temporibus error, deserunt tempore voluptates amet accusamus,
             harum culpa alias neque ex odit modi dicta ducimus. Labore, nulla!
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente iste, 
            impedit cum temporibus error, deserunt tempore voluptates amet accusamus,
             harum culpa alias neque ex odit modi dicta ducimus. Labore, nulla!
          </p>
        </div>
      </div>
    </div>
  </div>
  

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
      Copyright © 2022 E-tech solutions
    </div>
    
  </template>
  
  <script>
  /* import Dropdown1 from "./Dropdown.vue"; */
   
  export default {
    
    mounted() {
      this.donate = true;
    },
    data() {
      return {
        mode: false,
        donate: false,
        give: "donate",
      };
    },
    methods: {
      toggleMode() {
        this.mode = !this.mode;
      },
      Donate() {
        navigateTo("/Popup");
      },
    },
  };
  </script>
  
  <style>
.custom-shape-divider-bottom-1668769796 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1668769796 svg {
    position: relative;
    display: block;
    width: calc(158% + 1.3px);
    height: 442px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1668769796 .shape-fill {
    fill: #2d93ce;
}
</style>
   
  
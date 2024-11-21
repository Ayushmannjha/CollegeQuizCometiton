import './polyfills.server.mjs';
import{a,b as s,c as m,d as o,e as n,f as l,g as i,o as x,p as y,s as w,w as C,z as g}from"./chunk-OGXT6IEW.mjs";var d=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-login"]],decls:23,vars:0,consts:[[1,"bg-gradient-to-b","from-blue-50","to-blue-100","min-h-screen","flex","items-center","justify-center","relative","overflow-hidden"],[1,"absolute","top-10","left-20","w-64","h-64","bg-blue-300","rounded-full","opacity-20","animate-float"],[1,"absolute","bottom-10","right-20","w-64","h-64","bg-blue-400","rounded-full","opacity-20","animate-float-alt"],[1,"w-full","max-w-md","bg-white","rounded-lg","shadow-xl","p-8","relative","z-10"],[1,"text-3xl","font-bold","text-center","text-blue-700"],[1,"text-center","text-blue-500","mb-6"],[1,"mb-4"],["for","email",1,"block","text-sm","font-medium","text-blue-700"],["type","email","id","email","name","email","placeholder","Enter your email",1,"mt-1","w-full","px-4","py-2","border","rounded-md","focus:ring-blue-500","focus:border-blue-500"],["for","password",1,"block","text-sm","font-medium","text-blue-700"],["type","password","id","password","name","password","placeholder","Enter your password",1,"mt-1","w-full","px-4","py-2","border","rounded-md","focus:ring-blue-500","focus:border-blue-500"],["type","submit",1,"w-full","bg-blue-500","text-white","py-2","rounded-md","hover:bg-blue-600","transition","duration-300","ease-in-out"],[1,"text-center","text-sm","text-gray-600","mt-4"],["href","register.html",1,"text-blue-500","hover:underline"]],template:function(t,M){t&1&&(o(0,"body",0),l(1,"div",1)(2,"div",2),o(3,"div",3)(4,"h2",4),i(5,"Login"),n(),o(6,"p",5),i(7,"Sign in to take your coding challenges"),n(),o(8,"form")(9,"div",6)(10,"label",7),i(11,"Email"),n(),l(12,"input",8),n(),o(13,"div",6)(14,"label",9),i(15,"Password"),n(),l(16,"input",10),n(),o(17,"button",11),i(18," Login "),n()(),o(19,"p",12),i(20," Don't have an account? "),o(21,"a",13),i(22,"Register"),n()()()())},styles:[`@keyframes _ngcontent-%COMP%_float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
  
      @keyframes _ngcontent-%COMP%_float-alt {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(20px);
        }
      }
  
      .animate-float[_ngcontent-%COMP%] {
        animation: _ngcontent-%COMP%_float 6s infinite ease-in-out;
      }
  
      .animate-float-alt[_ngcontent-%COMP%] {
        animation: _ngcontent-%COMP%_float-alt 6s infinite ease-in-out;
      }`]})};var h=[{path:"",component:d}],u=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e});static \u0275inj=a({imports:[g.forRoot(h),g]})};var p=class e{title="Frontend";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,M){t&1&&l(0,"router-outlet")},dependencies:[C]})};var c=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e,bootstrap:[p]});static \u0275inj=a({providers:[y()],imports:[x,u]})};var b=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e,bootstrap:[p]});static \u0275inj=a({imports:[c,w]})};export{b as a};



import { create } from "zustand";
import { useShallow } from "zustand/shallow";


export const useGlobalStore = create((set, get) => {

  global.deepLinkArray = [];

  return {

 appDataInitialized: false,
 appDataInitialize: (router) => {
  
   if(get().appDataInitialized)return;
  set({ router:router, appDataInitialized: true});
},

 increaseDeepLink: (source, sourceTag) => {


    if(!global.deepLinkArray?.length)document.documentElement.classList.add("hideScroll");
    history.pushState(null, null, `${get().pathname}${sourceTag?`#${sourceTag}`:''}`);
    global.deepLinkArray.push(source);

    
    },

    decreaseDeepLink: () => {


      const executeLink = () => {


        if(global.deepLinkArray.length>0) {
          window.history.go(-global.deepLinkArray.length); 
          return global.deepLinkArray=[];
       }

        //Sada su ocisceni deep Linkovi, pa moze next link da se klikne i hidescroll remove.


          document.documentElement.classList.remove("hideScroll");


       global.executeNextLinkProcessing = false;
          if(global.executeNextLink !== get().pathname)get().router.push(global.executeNextLink);
          global.executeNextLink=undefined;
  

      }

    

    
      
  

      if(global.executeNextLink) global.executeNextLinkProcessing = true;
        
      
 //Odavde pocinje prava funkcija.
    //Ako je [] vraca se []
    global.deepLinkArray = global.deepLinkArray.slice(0, -1);
    if(global.executeNextLink)  return executeLink();
    if(!global.deepLinkArray.length)document.documentElement.classList.remove("hideScroll");
      
      
    },
        //Retainuje se(cuvaju se u zivotu komponente koje su stvorile deep linkove, a nisu zadnji deep link) ako ako se ne procesuira nextLink, i source nije poslednji element u global.deepLinkArray, tj. nije poslednji deep link
      shouldRetainDeepLink: (deepLinkReference) => !global.executeNextLinkProcessing && global.deepLinkArray?.at(-1) !== deepLinkReference,
     router: null, // initially null, initialized on app
    pathname: '/',
    setPathname: (pathname)=> set({pathname})
    
}
}
);



// Export a custom hook with useShallow pre-applied
export const useGlobalStoreShallow = (selector) => 
  useGlobalStore(useShallow(selector));
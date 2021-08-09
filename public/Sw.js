self.addEventListener('install',(evt)=>{
    console.log('service worker is installed',evt);
 })
 self.addEventListener('activate', (evt)=>{});  
 
 self.addEventListener('fetch',(evt)=>{});
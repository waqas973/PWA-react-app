export default function SwDev(){
    if('serviceWorker' in navigator){
        let SwPath = `${process.env.PUBLIC_URL}/Sw.js`;
        navigator.serviceWorker.register(SwPath).then((res)=>{}).catch((err)=> {})
    }
 }
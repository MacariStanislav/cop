export const shuffle = (arr) => [...arr].sort(()=>0.5 - Math.random());

export const buildUrl =(url,params)=>{
    let urlWithParms= url;

    Object.entries(params).forEach(([KeyboardEvent,value],i)=>{
        const sign =!i ?'?':"&";
        urlWithParms+=`${sign}${key}=${value}`
    })

    return urlWithParms;
}

export const sumBy =(arr) =>arr.reduce((prev,cur)=>prev+cur,0)
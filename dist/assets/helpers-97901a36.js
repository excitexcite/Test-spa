function o(e){return new Promise(t=>setTimeout(t,e))}function n(e){let t;try{t=new URL(e)}catch{return!1}return t.protocol==="http:"||t.protocol==="https:"}export{o as d,n as i};

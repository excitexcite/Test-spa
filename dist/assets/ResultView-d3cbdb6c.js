import{r as m,p as g,o as l,c as a,t as _,x as v,A as k,b as e,g as C,h as f,_ as w,i as L,T as x,F as u,j as E,a as $,B as d,q as A,s as y,n as T,y as N}from"./index-0ca68b2e.js";import{i as R}from"./helpers-97901a36.js";const b={__name:"CountdownTimer",props:["time"],emits:["elapsed"],setup(c,{emit:o}){const s=m(c.time*60),p=setInterval(()=>{s.value===0?(clearInterval(p),o("elapsed")):s.value--},1e3),i=g(()=>{const t=Math.floor(s.value/60);return t<10?"0"+t:t}),n=g(()=>{const t=s.value%60;return t<10?"0"+t:t});return(t,h)=>(l(),a("time",null,_(v(i))+":"+_(v(n)),1))}},S={},V={width:"29",height:"29",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B=e("path",{d:"M20.0378 15.205C19.9815 15.2895 19.9815 15.3741 19.9533 15.4868C19.9251 15.8532 20.2069 16.1914 20.5733 16.2195C20.9397 16.2477 21.2779 15.9659 21.3061 15.5995C21.3061 15.515 21.3061 15.4304 21.3343 15.2895C21.3343 15.1486 21.3343 15.064 21.3343 14.9795C21.3343 14.1622 21.1933 13.3731 20.9397 12.6121C20.6015 11.6257 20.0097 10.752 19.3051 10.0193C18.4314 9.1456 17.3604 8.52558 16.1486 8.18738C15.5849 8.04646 14.9649 7.96191 14.373 7.96191C14.1758 7.96191 13.9785 7.96191 13.753 7.9901C13.5557 8.01828 13.3585 8.04646 13.1612 8.07465C12.7948 8.13101 12.5411 8.49739 12.6257 8.83559C12.6821 9.20197 13.0484 9.45562 13.3866 9.37107C13.5557 9.34288 13.6967 9.3147 13.8658 9.3147C13.8939 9.3147 13.9221 9.3147 13.9503 9.3147C14.0912 9.3147 14.2321 9.28652 14.373 9.28652C15.9231 9.28652 17.3604 9.90654 18.375 10.9493C19.3896 11.9639 20.0097 13.3449 20.0378 14.8949V14.9513C20.0378 15.064 20.0378 15.1486 20.0378 15.205Z",fill:"white"},null,-1),M=e("path",{d:"M23.7581 15.825C23.7299 16.1914 24.0118 16.5296 24.3782 16.5577C24.7445 16.5859 25.0827 16.3041 25.1109 15.9377C25.1391 15.6277 25.1391 15.3177 25.1391 15.0077C25.1391 14.3876 25.0827 13.7958 24.9982 13.204C24.6318 10.9493 23.5327 8.92013 21.9826 7.37006C20.2071 5.59453 17.8397 4.43903 15.2187 4.24174C14.9368 4.21356 14.6268 4.21356 14.345 4.21356C14.035 4.21356 13.725 4.21356 13.4149 4.24174C13.1049 4.26993 12.7949 4.29811 12.4849 4.35448C12.1185 4.41084 11.8649 4.77722 11.9494 5.11542C12.0058 5.4818 12.3722 5.73545 12.7104 5.6509C12.9077 5.62271 13.0768 5.59453 13.274 5.56635C13.3586 5.56635 13.4431 5.53816 13.5277 5.53816C13.8095 5.50998 14.0913 5.50998 14.345 5.50998C15.3032 5.50998 16.2051 5.6509 17.0787 5.90454C18.6006 6.35547 19.9534 7.17278 21.0526 8.27192C21.9544 9.17378 22.6872 10.2729 23.1663 11.4566C23.589 12.5276 23.8427 13.7112 23.8427 14.9513C23.8427 15.0359 23.8427 15.1486 23.8427 15.2331C23.7863 15.4586 23.7581 15.6277 23.7581 15.825Z",fill:"white"},null,-1),D=e("path",{d:"M24.7163 4.66448C22.0389 1.98709 18.3752 0.352478 14.3168 0.352478C13.894 0.352478 13.4713 0.380661 13.0486 0.408844C12.6258 0.437027 12.2031 0.493393 11.7803 0.577942C11.4139 0.634308 11.1603 1.00069 11.2448 1.33888C11.3012 1.70526 11.6676 1.95891 12.0058 1.87436C12.2031 1.84618 12.3722 1.818 12.5694 1.78981C12.7667 1.76163 12.964 1.73345 13.1613 1.73345C13.5558 1.70526 13.9222 1.67708 14.3168 1.67708C17.9806 1.67708 21.3062 3.17078 23.7299 5.56634C26.1255 7.9619 27.6192 11.2875 27.6192 14.9795C27.6192 15.1768 27.6192 15.4022 27.6192 15.5995C27.6192 15.7686 27.591 15.9377 27.591 16.135C27.5628 16.5014 27.8447 16.8396 28.211 16.8677C28.5774 16.8959 28.9156 16.6141 28.9438 16.2477C28.972 15.825 29.0002 15.4022 29.0002 15.0077C29.0002 10.9775 27.3655 7.31369 24.7163 4.66448Z",fill:"white"},null,-1),O=e("path",{d:"M27.9572 21.7434L22.9688 19.066C21.306 18.1641 21.2497 18.756 19.5023 20.6161C19.0796 21.067 18.2905 22.2507 17.3604 22.0252C15.4158 21.5461 11.7802 18.6996 10.5965 17.4032C10.0328 16.7832 7.60909 13.824 7.5809 12.8657C7.52454 11.4002 10.7374 10.6675 9.69463 7.87733L7.46817 2.88894C5.38263 -1.90218 -0.451265 5.76361 0.0278472 9.34285C1.2679 18.1641 16.7404 32.4248 25.3644 27.7182C27.2808 26.6472 29.8737 22.8989 27.9572 21.7434Z",fill:"white"},null,-1),q=[B,M,D,O];function F(c,o){return l(),a("svg",V,q)}const P=k(S,[["render",F]]),U=e("div",{class:"header__logo-wrapper"},[e("img",{alt:"Site logo",src:E})],-1),Z=e("div",null,[e("p",{class:"header__title"},"Готово")],-1),j={class:"page"},z=e("p",{class:"footer__result"}," TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, ",-1),K=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolor iste fugiat harum ullam, doloremque nihil. Magnam natus omnis dolores ratione, culpa veniam modi et doloremque ipsum, nesciunt accusantium in voluptatum! Nemo adipisci excepturi asperiores illo similique rem voluptates velit provident distinctio magnam. Officiis, quibusdam ex accusantium deserunt dicta voluptatum. ",-1),G={__name:"ResultLayout",setup(c){return(o,r)=>(l(),a(u,null,[C(w,null,{default:f(()=>[U,Z]),_:1}),e("main",j,[L(o.$slots,"default")]),C(x,null,{default:f(()=>[z,K]),_:1})],64))}};const H={class:"result__response response"},J={class:"response__container"},Q={class:"result__response-list"},W={class:"result__response-option"},X={class:"result__response-sublist"},Y=["href"],e1=["href"],s1={__name:"ResultDataList",props:["resultList"],setup(c){return(o,r)=>(l(),a("div",H,[e("div",J,[e("ul",Q,[(l(!0),a(u,null,$(c.resultList,(s,p)=>(l(),a("li",{key:p,class:"result__response-list-item"},[Array.isArray(s.value)?(l(),a(u,{key:0},[e("p",W,_(s.key)+":",1),e("ul",X,[(l(!0),a(u,null,$(s.value,(i,n)=>(l(),a("li",{class:"result__response-sublist-item",key:n},[e("a",{class:"result__response-link",href:i},_(i),9,Y)]))),128))])],64)):(l(),a(u,{key:1},[d(_(s.key)+": ",1),v(R)(s.value)?(l(),a("a",{key:0,class:"result__response-link",href:s.value},_(s.value),9,e1)):(l(),a(u,{key:1},[d(_(s.value),1)],64))],64))]))),128))])])]))}};const t1={class:"result"},l1={class:"result__container"},a1=e("h1",{class:"result__title"},"Ваш результат рассчитан:",-1),n1=e("p",{class:"result__subtitle"},[e("span",{class:"text-underlined"},"Вы относитесь к 3%"),d(" респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону! ")],-1),o1=e("p",{class:"result__get-result"},"Скорее получите свой результат!",-1),i1=e("p",{class:"result__disclaimer"}," В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона ",-1),r1={class:"result__make-call"},_1=["disabled"],c1={key:0,class:"result__spinner"},p1={__name:"ResultView",setup(c){const o=m(!0),r=m(!1),s=m([]);async function p(){r.value=!0;const i=await fetch("https://swapi.dev/api/people/1/");if(i.ok){const n=await i.json();for(const t in n)if(Object.hasOwnProperty.call(n,t)){const h=n[t],I=t.charAt(0).toUpperCase()+t.slice(1).replace("_"," ");s.value.push({key:I,value:h.length?h:"none"})}}else console.log("Error while getting data");r.value=!1}return(i,n)=>{const t=A("BaseSpinner");return l(),y(G,null,{default:f(()=>[e("section",t1,[e("div",l1,[a1,n1,o1,i1,e("p",r1,[d(" Звоните скорее, запись доступна всего "),C(b,{onElapsed:n[0]||(n[0]=h=>o.value=!1),time:"10",class:"result__timer"}),d(" минут ")]),e("button",{class:T(["result__cta",o.value?"":"button-disabled"]),onClick:p,disabled:!o.value},[C(P),d(" Позвонить и прослушать результат ")],10,_1),r.value?(l(),a("div",c1,[C(t)])):!r.value&&s.value.length?(l(),y(s1,{key:1,resultList:s.value},null,8,["resultList"])):N("",!0)])])]),_:1})}}};export{p1 as default};
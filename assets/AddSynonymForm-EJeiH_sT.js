import{u as j,r as n,b as v,R as h,j as o,L as I,a as N}from"./index-DsjQk2Xt.js";import{u as W,a as C,i as D,S as T,E as $,p as O,T as r,b as U,A as g}from"./useFetchData-Bb7EsPki.js";const B=()=>{const x=j(),[c,d]=n.useState(""),[u,y]=n.useState(null),[l,i]=n.useState(null),[m,s]=n.useState(!1),[L,R]=n.useState(!0),f=v(),e=new URLSearchParams(f.search).get("word")||"";e||x(h.SEARCH);const{loading:A,getData:p}=W({url:`${C}/${e.trim()}`,enable:!0,callBack:a=>{var t;s(A),y(a),D(a)?i(null):i((t=a[0])==null?void 0:t.groupId)}}),w=a=>{d(a.target.value.trim()),R(a.target.validity.valid)},E=()=>{s(!0);const a={word:e,synonym:c};O(`${g}`,a).then(t=>{r({text:"The Word and it's Synonym were added with success",type:"success"}),i(t.data.groupId),y(t.data.newSynonym),d("")}).catch(t=>{var S;r({text:(S=t.response)==null?void 0:S.data.error,type:"error"})}).finally(()=>{s(!1)})},b=async()=>{s(!0),U(`${g}/${l}`,{synonym:c}).then(()=>{p(),d(""),r({text:"Synonym was added with success",type:"success"})}).catch(a=>{var t;r({text:(t=a.response)==null?void 0:t.data.error,type:"error"})}).finally(()=>{s(!1)})},_=()=>{l?b():E()};return o.jsxs("div",{className:"mt-10 card-box",children:[o.jsx(T,{isValid:L,handleChange:w,value:c,label:`Add Synonyms to ${e}`,handleSearchAction:_,buttonText:"Add To List"}),o.jsx(I,{className:"btn",to:h.SEARCH,children:"Back"}),o.jsx(N,{loading:m}),u&&o.jsx($,{word:e,synonyms:u,isLoading:m,setIsLoading:s,searchWord:p,groupId:l})]})};export{B as default};

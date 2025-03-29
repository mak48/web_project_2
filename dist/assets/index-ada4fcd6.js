(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const u="719cf7d3e3934d1b89090733252903",y="https://api.weatherapi.com/v1/current.json";async function a(t){try{const e=await fetch(`${y}?key=${u}&q=${t}`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const r=await e.json();g(r)}catch(e){console.error("Error fetching weather data:",e),L()}}async function f(t){const e="https://api.weatherapi.com/v1/autocomplete.json";try{const r=await fetch(`${e}?key=${u}&q=${t}`);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(r){return console.error("Error fetching autocomplete suggestions:",r),[]}}const p=document.querySelector("#theme-toggle");document.querySelector("#location-input");const s=document.querySelector("#city-input"),l=document.querySelector("#get-weather-button"),d=document.querySelector("#weather-details"),m=document.querySelector("#error-message");p.addEventListener("click",()=>{document.body.classList.toggle("dark-theme")});l.addEventListener("click",()=>{const t=s.value;t&&a(t)});function h(t){const e=document.querySelector("#autocomplete-suggestions");e.innerHTML="",t.forEach(r=>{const c=document.createElement("li");c.textContent=`${r.name}, ${r.region}, ${r.country}`,c.addEventListener("click",()=>{s.value=r.name,e.innerHTML="",a(r.name)}),e.appendChild(c)})}s.addEventListener("input",async()=>{const t=s.value;if(t.length>2){const e=await f(t);h(e)}else{const e=document.querySelector("#autocomplete-suggestions");e.innerHTML=""}});l.addEventListener("click",()=>{const t=s.value;a(t)});async function g(t){const e=document.querySelector("#city-name"),r=document.querySelector("#temperature"),c=document.querySelector("#condition"),o=document.querySelector("#weather-link");e.textContent=t.location.name,r.textContent=t.current.temp_c,c.textContent=t.current.condition.text,o.href=t.location.url,o.textContent="WeatherAPI.com",d.classList.remove("hidden"),m.classList.add("hidden")}function L(){d.classList.add("hidden"),m.classList.remove("hidden")}

const animals=['🐯','🦁','🦊','🐼','🐨','🐵','🐺','🐰'];
function startSetup(){
const names=document.getElementById('names').value.split('\n').filter(x=>x.trim());
const race=document.getElementById('race'); race.innerHTML='';
let pos=[];
names.forEach((n,i)=>{
 let d=document.createElement('div');
 d.className='lane';
 d.innerHTML=`<div class="runner" id="r${i}">${animals[i%animals.length]} ${n}</div>`;
 race.appendChild(d); pos.push(0);
});
let t=parseInt(document.getElementById('time').value)||15;
const mv=setInterval(()=>{
 pos=pos.map((p,i)=>{
   p+=Math.random()*15;
   document.getElementById('r'+i).style.left=p+'px';
   return p;
 });
},100);
const cd=setInterval(()=>{
 t--;
 if(t<=0){
  clearInterval(mv); clearInterval(cd);
  let rank=names.map((n,i)=>({n,p:pos[i]})).sort((a,b)=>b.p-a.p);
  document.getElementById('podium').innerHTML=
  `<h2>🏆 ผลการแข่งขัน</h2><h3>🥇 ${rank[0]?.n||''}</h3><h3>🥈 ${rank[1]?.n||''}</h3><h3>🥉 ${rank[2]?.n||''}</h3>`;
 }
},1000);
}
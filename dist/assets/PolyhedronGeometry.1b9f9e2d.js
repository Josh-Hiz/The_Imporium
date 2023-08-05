import{B as U,F as b,V as h,d as M}from"./utils.8c864b2f.js";class B extends U{constructor(u=[],w=[],V=1,y=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:u,indices:w,radius:V,detail:y};const o=[],a=[];j(y),P(V),I(),this.setAttribute("position",new b(o,3)),this.setAttribute("normal",new b(o.slice(),3)),this.setAttribute("uv",new b(a,2)),y===0?this.computeVertexNormals():this.normalizeNormals();function j(t){const n=new h,e=new h,f=new h;for(let r=0;r<w.length;r+=3)d(w[r+0],n),d(w[r+1],e),d(w[r+2],f),A(n,e,f,t)}function A(t,n,e,f){const r=f+1,l=[];for(let s=0;s<=r;s++){l[s]=[];const c=t.clone().lerp(e,s/r),i=n.clone().lerp(e,s/r),m=r-s;for(let p=0;p<=m;p++)p===0&&s===r?l[s][p]=c:l[s][p]=c.clone().lerp(i,p/m)}for(let s=0;s<r;s++)for(let c=0;c<2*(r-s)-1;c++){const i=Math.floor(c/2);c%2===0?(x(l[s][i+1]),x(l[s+1][i]),x(l[s][i])):(x(l[s][i+1]),x(l[s+1][i+1]),x(l[s+1][i]))}}function P(t){const n=new h;for(let e=0;e<o.length;e+=3)n.x=o[e+0],n.y=o[e+1],n.z=o[e+2],n.normalize().multiplyScalar(t),o[e+0]=n.x,o[e+1]=n.y,o[e+2]=n.z}function I(){const t=new h;for(let n=0;n<o.length;n+=3){t.x=o[n+0],t.y=o[n+1],t.z=o[n+2];const e=g(t)/2/Math.PI+.5,f=N(t)/Math.PI+.5;a.push(e,1-f)}F(),S()}function S(){for(let t=0;t<a.length;t+=6){const n=a[t+0],e=a[t+2],f=a[t+4],r=Math.max(n,e,f),l=Math.min(n,e,f);r>.9&&l<.1&&(n<.2&&(a[t+0]+=1),e<.2&&(a[t+2]+=1),f<.2&&(a[t+4]+=1))}}function x(t){o.push(t.x,t.y,t.z)}function d(t,n){const e=t*3;n.x=u[e+0],n.y=u[e+1],n.z=u[e+2]}function F(){const t=new h,n=new h,e=new h,f=new h,r=new M,l=new M,s=new M;for(let c=0,i=0;c<o.length;c+=9,i+=6){t.set(o[c+0],o[c+1],o[c+2]),n.set(o[c+3],o[c+4],o[c+5]),e.set(o[c+6],o[c+7],o[c+8]),r.set(a[i+0],a[i+1]),l.set(a[i+2],a[i+3]),s.set(a[i+4],a[i+5]),f.copy(t).add(n).add(e).divideScalar(3);const m=g(f);z(r,i+0,t,m),z(l,i+2,n,m),z(s,i+4,e,m)}}function z(t,n,e,f){f<0&&t.x===1&&(a[n]=t.x-1),e.x===0&&e.z===0&&(a[n]=f/2/Math.PI+.5)}function g(t){return Math.atan2(t.z,-t.x)}function N(t){return Math.atan2(-t.y,Math.sqrt(t.x*t.x+t.z*t.z))}}static fromJSON(u){return new B(u.vertices,u.indices,u.radius,u.details)}}export{B as P};
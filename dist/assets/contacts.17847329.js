import{S as h,a as p,P as y,W as M,e as g,M as i,b as s,c as x,G as P,O as b,I as G,d as S}from"./OrbitControls.8716efcb.js";/* empty css              */new Array;new h({color:16777215,program:function(e){e.beginPath()}});const a=new p,n=new y(80,window.innerWidth/window.innerHeight,.1,1e3),r=new M({canvas:document.querySelector("#background")});r.setPixelRatio(window.devicePixelRatio);r.setSize(window.innerWidth,window.innerHeight);n.position.setZ(50);n.position.setY(0);r.render(a,n);const z=new g(10,1.1,300,20,8,7),D=new i({color:16777215,wireframe:!0,transparent:!0,opacity:.5}),d=new s(z,D);a.add(d);const v=new x(3.25,25,9),A=new i({color:16711680,wireframe:!1,transparent:!0,opacity:.7}),W=new s(v,A);a.add(W);const c=new P;a.add(c);function E(){const e=new G(.7,1),l=new i({color:16777215,wireframe:!0}),t=new s(e,l),[f,m,u]=Array(3).fill().map(()=>S.randFloatSpread(500));t.position.set(f,m,u),t.userData.rx=Math.random()*.01-.005,t.userData.ry=Math.random()*.01-.005,t.userData.rz=Math.random()*.01-.005,c.add(t)}Array(1500).fill().forEach(E);var o=new b(n,r.domElement);o.minPolarAngle=Math.PI/2;o.maxPolarAngle=Math.PI/2;o.minDistance=50;o.maxDistance=0;const w=function(){requestAnimationFrame(w),c.children.forEach(e=>{e.rotation.x+=e.userData.rx,e.rotation.y+=e.userData.ry,e.rotation.z+=e.userData.rz}),d.rotation.z+=.001,o.update(),r.render(a,n)};w();window.addEventListener("resize",function(){r.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()});

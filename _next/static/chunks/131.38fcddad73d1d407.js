"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[131],{5131:function(r,e,s){s.r(e),s.d(e,{worker:function(){return t}});var a=s(9436),n=s(5800);let o=[a.rest.post("".concat(n.Bq,"/api/form"),async(r,e,s)=>{let a=await r.json();return"admin@gmail.com"===a.email&&"qwerty123456"===a.password?e(s.json({login:!0})):e(s.delay(2e3),s.status(403),s.json({error:"Invalid email or password."}))})],t=(0,a.setupWorker)(...o)}}]);
import{v as s}from"./eip712-CNS7axRm.js";let t=!1;const n=function(r){return new Uint8Array(s(r))};let o=n;function e(r){return o(r)}e._=n;e.lock=function(){t=!0};e.register=function(r){if(t)throw new Error("randomBytes is locked");o=r};Object.freeze(e);export{e as r};
//# sourceMappingURL=random-Cx618_9w.js.map

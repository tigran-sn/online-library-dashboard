import{a as n}from"./chunk-F4LPE2TG.js";import{Da as i,W as r,Z as o,da as a}from"./chunk-QCNKWFM4.js";var s=class t{API_URL="https://fakerapi.it/api/v2/persons";http=a(n);persons=i([]);getPersons(){return this.http.get(`${this.API_URL}?_quantity=100`).pipe(r(e=>this.persons.set(e.data)))}static \u0275fac=function(p){return new(p||t)};static \u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})};export{s as a};

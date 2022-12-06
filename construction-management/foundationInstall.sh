#!/bin/bash



#assuming you are added to the developers directory



#make sure you are in your REACT Program



#NEEDS TO BE CHANGED DEPENDING ON PERSON

USER="Samuel.Hoggatt"



file="C:/Users/$USER/.npmrc"



npmrcAddition="

@ktg:registry=https://kiewitcorp.pkgs.visualstudio.com/_packaging/ktg_npm/npm/registry/



always-auth=true



@fortawesome:registry=https://npm.fontawesome.com/



//npm.fontawesome.com/:_authToken=2D80AE66-A7FE-46E4-8C38-D7FAA5EA3976"



printf "\n%s" "$npmrcAddition" >> $file



npm install -g vsts-npm-auth



vsts-npm-auth -config C:/Users/$USER/.npmrc



npm install @ktg/foundation-components
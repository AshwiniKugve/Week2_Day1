
import {test} from "@playwright/test"

test('User profile', async({page})=>{


    function userProfile(name){
    console.log(`Hello, ${name}!`);
    }

    userProfile("Ashwini");


})
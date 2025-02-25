import { useState } from "react";
import data from'./data';

export default function Acco(){

    return
        <div>
        
    <div class = "wrapper">
        <div class = "block">

        {
            data && data.length > 0 ? 
                data.map(vari => 
                <div class="title"> 
                <div> {vari.question} </div>
                
                
                
                </div>)
            
            :<div> No data found </div>

        }


        </div>


    </div>
        
        

    </div>
    

}
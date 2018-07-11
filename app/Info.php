<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $table = 'data';
   protected $fillable = [
   			'sandwich',          
            'tamano',            
            'combos',            
            'extras',            
            'especies',          
            'convertir',         
            'wrapoensalada',     
            'pan',               
            'quesos',            
            'tostar',           
            'vegetales',         
            'salsas',            
            'pago',              
            'numero',
            'estado'];  
}

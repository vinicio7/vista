<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use DB;
use Validator;
use App\Info;

class InformacionController extends Controller
{
    protected $result       = false;
    protected $message      = 'Ocurrió un problema al procesar su solicitud';
    protected $records      = Array();
    protected $status_code  = 200;

    public function info()
    {
        try {
            $records = Info::where('estado',1)->get();
            $this->status_code  = 200;
            $this->result       = true;
            $this->message      = 'Datos consultados correctamente';
            $this->records      = $records;
        } catch (Exception $e) {
            $this->status_code  = 200;
            $this->result       = false;
            $this->message      = env('APP_DEBUG') ? $e->getMessage() : $this->message;
        } finally {
            $response = [
                'result'    =>  $this->result,
                'message'   =>  $this->message,
                'records'   =>  $this->records
            ];
            return response()->json($response, $this->status_code);
        }
    }

    public function aprob($id)
    {
        try {
            $records = Info::find($id);
            if ($id) {
                $records->estado = 2;
                $records->save();
            }
            $this->status_code  = 200;
            $this->result       = true;
            $this->message      = 'Datos actualizados correctamente';
            $this->records      = $records;
        } catch (Exception $e) {
            $this->status_code  = 200;
            $this->result       = false;
            $this->message      = env('APP_DEBUG') ? $e->getMessage() : $this->message;
        } finally {
            $response = [
                'result'    =>  $this->result,
                'message'   =>  $this->message,
                'records'   =>  $this->records
            ];
            return response()->json($response, $this->status_code);
        }
    }
}

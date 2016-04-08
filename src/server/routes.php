<?php
/**
 * Created by PhpStorm.
 * User: max
 * Date: 05/01/16
 * Time: 16:02
 */

use Siervo\Request;
use Siervo\Response;

$dev = 'src/client/';
$pro = 'build/';

$path = $dev; 

$si = \Siervo\Siervo::getInstance();

$si->get("/", function(Request $req, Response $res) use ($path){
    $res->sendFile($path.'index.html');
});

$si->get("/test", function(Request $req, Response $res) use ($path){
    $res->sendFile($path.'index.html');
});
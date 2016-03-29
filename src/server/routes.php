<?php
/**
 * Created by PhpStorm.
 * User: max
 * Date: 05/01/16
 * Time: 16:02
 */

use Siervo\Request;
use Siervo\Response;

$si = \Siervo\Siervo::getInstance();

$si->get("/", function(Request $req, Response $res){
    $res->sendFile('src/client/index.html');
});

$si->get("/test", function(Request $req, Response $res){
    $res->sendFile('src/client/index.html');
});
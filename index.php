<?php
/**
 * Created by PhpStorm.
 * User: max
 * Date: 05/01/16
 * Time: 14:36
 */

use Siervo\Request;
use Siervo\Response;
use \Siervo\Siervo;

require "vendor/autoload.php";

$si = Siervo::getInstance();

$si->uso(function(Request $req, Response $res, $next){
    $req->body = json_decode($req->body);
    $next();
});

require "src/server/routes.php";

$si->run();
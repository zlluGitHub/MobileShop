<?php
/**
 * @Author: Marte
 * @Date:   2018-05-18 20:51:46
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-19 10:44:55
 */
    header ( "Content-type: text/html; charset=utf-8" ); //设置文件编码格式
    include_once("conn.php"); //连接数据库
    $product=mysqli_query($conn,"select * from product");
    $product_picture=mysqli_query($conn,"select * from product_picture");
    $results = array();
    //判断是哪一个请求方式和请求数据
    if ($_SERVER["REQUEST_METHOD"]=="GET") {
        if($_GET['mark'] == "product_picture"){
            while ($rows=mysqli_fetch_assoc($product_picture)){
               $results[] = $rows;
            };
            echo json_encode($results);
        }else if($_GET['mark'] == "product"){
            while ($rows=mysqli_fetch_assoc($product)){
               $results[] = $rows;
            };
            echo json_encode($results);
        }
    }
?>
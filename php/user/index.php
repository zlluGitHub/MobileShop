<?php
/**
 * @Author: Marte
 * @Date:   2018-05-18 20:51:46
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-26 18:10:18
 */
    header ( "Content-type: text/html; charset=utf-8" ); //设置文件编码格式
    include_once("../conn.php"); //连接数据库
    $product=mysqli_query($conn,"select * from user");
   // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rows=mysqli_fetch_assoc($product);

        echo $rows['username'];
   // }
?>
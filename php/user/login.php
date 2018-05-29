<?php
/**
 * @Author: Marte
 * @Date:   2018-05-18 20:51:46
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-26 15:55:13
 */
    header ( "Content-type: text/html; charset=utf-8" ); //设置文件编码格式
    include_once("../conn.php"); //连接数据库
    $product=mysqli_query($conn,"select * from user");
    $rows=mysqli_fetch_assoc($product);
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if($rows['username'] == $_POST['username']){
        }else{
            echo "用户名错误！";
            return;
        };
        if($rows['password'] == $_POST['password']){

        }else{
            echo "密码错误！";
        };
    }
?>
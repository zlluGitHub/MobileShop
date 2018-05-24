<?php
/**
 * @Author: Marte
 * @Date:   2018-05-18 20:51:46
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-18 21:15:25
 */
    header ( "Content-type: text/html; charset=utf-8" ); //设置文件编码格式
    include_once("conn.php"); //连接数据库
    $product=mysqli_query($conn,"select * from product");
    $results = array();
    if ($_SERVER["REQUEST_METHOD"] == "GET"  ) {
        //获取一级菜单数据
        while ($rows=mysqli_fetch_assoc($product)){
           $results[] = $rows;
        };
        //获取二级菜单数据

        if($results){
            echo json_encode($results);
        }else{
            echo mysql_error();
       };
    }
?>
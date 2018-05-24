<?php
/**
 * @Author: Marte
 * @Date:   2018-05-16 20:54:14
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-18 19:27:11
 */
    header ( "Content-type: text/html; charset=utf-8" ); //设置文件编码格式
    include_once("conn.php"); //连接数据库
    $category=mysqli_query($conn,"select * from category");
    $results = array();
    if ($_SERVER["REQUEST_METHOD"] == "POST"  ) {
        //获取一级菜单数据
        while ($rows=mysqli_fetch_assoc($category)){
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
<?php
/**
 * @Author: Marte
 * @Date:   2018-05-16 20:54:14
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-18 19:22:35
 */
    header ( "Content-type: text/html; charset=utf-8" ); //设置文件编码格式
    include_once("conn.php"); //连接数据库
    $qw= "select * from brand where categoryid=".$_POST['id'];
    $brand=mysqli_query($conn,$qw);
    //$brand=mysqli_query($conn,"select * from brand where id=".$_GET['id']);
    $results = array();
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //获取一级菜单数据
        while ($rows=mysqli_fetch_assoc($brand)){
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
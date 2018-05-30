<?php
/**
 * @Author: Marte
 * @Date:   2018-05-16 20:54:14
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-29 21:11:30
 */
    header ( "Content-type: text/html; charset=utf-8" ); //设置文件编码格式
    include_once("conn.php"); //连接数据库
    //$category=mysqli_query($conn,"select * from category");
    //mysqli_fetch_array(resource result [,int result_type]); $rows['id']或$rows[0]
    //mysqli_fetch_abject(resource result); $rows=>id
    //mysqli_fetch_row(resource result);  $rows[0]
    //mysqli_fetch_assoc(resource result);  $rows['id']

    //判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
    //$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
    //$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法

    //获取二级分类的数据

    $results = array();

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        switch ($_GET["tableName"]) {
        case 'category': $table_name = "category";
            break;
        case 'brand': $table_name = "brand";
            break;

        default:

            break;
        };

        $table_name=mysqli_query($conn,"select * from $table_name");
        while ($rows=mysqli_fetch_assoc($table_name)){
           $results[] = $rows;
        };

        if($results){
            echo json_encode($results);
        }else{
            echo mysql_error();
       };
    } else if ($_SERVER["REQUEST_METHOD"] == "POST"){

    }


?>
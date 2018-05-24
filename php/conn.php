<?php
/**
 * @Author: Marte
 * @Date:   2018-05-16 20:51:52
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-16 23:02:25
 * 数据库链接
 */
$conn = mysqli_connect("localhost", "root", "123456", "e_commerce") or die("连接数据库服务器失败！".mysqli_error()); //连接MySQL服务器，选择数据库
mysqli_query($conn,"set names utf8"); //设置数据库编码格式utf8
?>
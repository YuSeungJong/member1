<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String id = (String)request.getAttribute("resId");
	if(id != null) {
%>
	{"sw" : " 환영합니다."}

	<%}else{%>
	
	{"sw" : "가입실패"}
<%
}
%>
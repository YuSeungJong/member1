/**
 * 
 */
function idcheck(){
	idvalue = $('#id').val().trim();
	
	//공백체크
	if(idvalue.length <1) {
		$('#idspan').html("아이디 입력").css('color','red');
		return false;
	}
	
	//아이디 길이  4-12
	if(idvalue.length<4 || idvalue >12 ){
		$('#idspan').html("아이디 4~12까지 입력").css('color','red');
		return false;
	}
	
	//아이디 정규식 -소문자로 시작하고 대문자와 숫자로 조합 가능
	idreg =/^[a-z][a-zA-Z0-9]{3,11}$/;
	if(!(idreg.test(idvalue))){
		$('#idspan').html("아이디  형식오류").css('color','red');
		return false;
	}else {
		$('#idspan').html("✔").css('color','green');
	}
	
	return true;
}


//비밀번호 - 공백. 길이, 정규식
function passcheck() {
	
	passvalue =$('#pwd').val().trim();
	passvalue1 =$('#pwd1').val().trim();
	
// 비밀번호 공백체크 
	if(passvalue.length<1){
		$('#pwdspan').html("비밀번호 입력").css('color','red');
		return false;
	}
// 비밀번호 길이  8-12
	if(passvalue.length <8 || passvalue >12 ){
		$('#pwdspan').html("비밀번호 8~12사이").css('color','red');
		return false;
	}
// 비밀번호 정규식 
	passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,12}$/;
	if(!(passreg.test(passvalue))){
		$('#pwdspan').html("비밀번호 형식오류").css('color','red');
		return false;
	}else{
		$('#pwdspan').html("✔").css('color','green');
	}
	
	
// 비밀번호 확인 
	if(passvalue != passvalue1){
		$('#pwd1span').html("비밀번호 다시확인 ").css('color','red');
		return false;
	}else{
		$('#pwd1span').html("✔").css('color','green');
	}
	
}

//// 이름 - 공백, 길이 , 정규식 
function namecheck() {
	namevalue = $('#name').val().trim();
// 공백 체크
	if(namevalue.length <1){
		$('#namespan').html("이름 입력").css('color','red');
		return false;
	}
// 이름 길이 2-5
	if(namevalue.length<2 || namevalue.length>5){
		$('#namespan').html("이름 2~5입력").css('color','red');
		return false;
	}
// 이름 정규식
	namereg = /^[가-힣]{2,5}$/; 
	if(!(namereg.test(namevalue))){
		$('#namespan').html("이름 형식오류").css('color','red');
		return false;
	}else{
		$('#namespan').html("✔").css('color','green');
	}
}

//생년월일 정규식 
function bircheck() {
	birvalue =$('#bir').val().trim();
	
	if(birvalue.length <1 ) {
		$('#birspan').html("생년월일 형식").css('color','red');
		return false;
	}
	sub = parseInt(birvalue.substr(0,4));
	age = 2020-sub;
	if(age < 10 ){
		$('#birspan').html("나이 제한, 당신은 "+age+"세").css('color','red');
		return false;
	}else{
		$('#birspan').html("올바른 나이 입력<br>" + birvalue + "/age" + age).css('color','green');
	}
}
//성별 
function gendcheck() {
	gendvalue = $("#gend").val().trim();
	
	if(gendvalue == "성별" ){
		$('#gendspan').html("선택").css('color','red');
	}
	else if(gendvalue == "남자" ){
		$('#gendspan').html("남자").css('color','green');
	}else if(gendvalue == "여자" ){
		$('#gendspan').html("여자").css('color','green');
	}
	return true;
}


//전화번호 - 공백, 정규식
function hpcheck() {
	
	telvalue =$('#hp').val().trim();
//전화번호 공백
	if(telvalue.length<1){
		$('#hpspan').html("전화번호 입력").css('color','red');
		return false;
	}
// 전화번호 정규식 
	telreg = /^\d{3}-\d{4}-\d{4}$/;
	if(!(telreg.test(telvalue))){
		$('#hpspan').html("전화번호 형식오류").css('color','red');
		return false;
	}else{
		$('#hpspan').html("✔").css('color','green');
	}
}

//이메일 - 공백, 정규식
function emailcheck() {
	mailvalue = $('#email').val().trim();
//이메일 -공백
	if(mailvalue.length <1){
		$('#emailspan').html("이메일 입력").css('color','red');
		return false;
	}
// 이메일 정규식
	mailreg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z]+){1,2}$/;
	if(!(mailreg.test(mailvalue))){
		$('#emailspan').html("이메일 형식오류").css('color','red');
		return false;
	}else{
		$('#emailspan').html("✔").css('color','green');
	}
	
}
// 상세주소 
function addcheck() {
	addvalue = $('#add2').val().trim();
	if(addvalue.length <1) {
	$('#add2span').html("상세주소 입력").css('color','red');
		return false;
	}else{
		$('#add2span').html("✔").css('color','green');
	}
}


function regcheck(){
	idcheck();
	passcheck();
	namecheck();
	bircheck();
	gendcheck();
	hpcheck();
	emailcheck();
	addcheck();
	return true;
}
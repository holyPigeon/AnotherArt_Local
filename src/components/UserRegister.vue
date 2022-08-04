<template>
    <div id="wrapper" class="container-fluid">
        <section>
            <div class="container px-4">
                <div class="row gx-4 justify-content-center w-75 m-auto">
                    <div class="row position-static d-block">
                        <h4 class="mb-3 text-center">아이디 생성</h4>
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-md-6 offset-md-3">
                                    <label for="" class="form-label">이름</label>
                                    <input type="text" class="form-control" placeholder="이름" value="" required>
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="" class="form-label">닉네임</label>
                                    <input type="text" class="form-control" placeholder="닉네임" value="" required>
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="studentId" class="form-label">아이디</label> <button type="button"
                                        class="btn btn-outline-dark btn-sm mb-2" data-bs-toggle="modal"
                                        data-bs-target="#duplicateCheckModal">중복체크</button>
                                    <input type="text" class="form-control" id="studentId" placeholder="아이디" value=""
                                        required>
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="password" class="form-label">암호</label>
                                    <input type="password" class="form-control" id="password" placeholder="암호" value=""
                                        required>
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="password2" class="form-label">암호 확인</label>
                                    <input type="password" class="form-control" id="password2" placeholder="암호 확인"
                                        value="" required>
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="" class="form-label">학교명</label> <button type="button"
                                        class="btn btn-outline-dark btn-sm mb-2" data-bs-toggle="modal"
                                        data-bs-target="#univModal">학교 찾기</button>
                                    <input type="text" class="form-control" placeholder="학교명" value="" required>
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="username" class="form-label">주소</label> <input type="button" @click="execDaumPostcode()" 
                                    class="form-label" value="우편번호 찾기">
                                    <!-- <button type="button" class="btn btn-outline-dark btn-sm mb-2"
                                        data-bs-toggle="modal" data-bs-target="#addressModal">주소 찾기</button> -->
                                    <br>
                                    <input type="text" v-model="postcode" class="form-control" placeholder="우편번호">
                                    <input type="text" id="address" class="form-control" placeholder="주소">
                                    <input type="text" id="detailAddress" class="form-control" placeholder="상세주소">
                                    <input type="text" id="extraAddress" class="form-control" placeholder="참고항목">
                                    <!-- <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="username" placeholder="이름" required>
                                    </div> -->
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="phoneNumber" class="form-label">전화번호</label>
                                    <input type="tel" class="form-control" id="phoneNumber" placeholder="전화번호" value=""
                                        required>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row">
                        <hr class="my-4 col-md-6 offset-md-3">
                    </div>

                    <div class="row">
                        <button class="btn btn-outline-dark btn-lg col-md-6 offset-md-3" type="submit"
                            id="signup">완료</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'userRegister',
    methods: {
        execDaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    if (this.extraAddress !== "") {
                        this.extraAddress = "";
                    }
                    if (data.userSelectedType === "R") {
                        // 사용자가 도로명 주소를 선택했을 경우
                        this.address = data.roadAddress;
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        this.address = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === "R") {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            this.extraAddress += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            this.extraAddress +=
                                this.extraAddress !== ""
                                    ? `, ${data.buildingName}`
                                    : data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (this.extraAddress !== "") {
                            this.extraAddress = `(${this.extraAddress})`;
                        }
                    } else {
                        this.extraAddress = "";
                    }
                    // 우편번호를 입력한다.
                    this.postcode = data.zonecode;
                },
            }).open();
        },
    }
}

</script>

<style>
</style>
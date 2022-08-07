<template>
    <div id="wrapper" class="container-fluid">
        <div class="container px-4s">
            <div class="row gx-4 justify-content-center m-auto">
                <div class="col-md-10 position-static d-block p-3 bg-light">
                    <h4 class="mb-3 text-center">아이디 생성</h4>
                    <form class="needs-validation" novalidate>
                        <div class="row g-3">
                            <div class="col-md-6 offset-md-3 mb-3">
                                <label for="name" class="form-label">이름</label>
                                <input type="text" class="form-control form-control-lg p-3" id="name" name="name"
                                    placeholder="이름" value="" required>
                            </div>

                            <div class="col-md-6 offset-md-3 mb-3">
                                <label for="nickname" class="form-label">닉네임</label>
                                <input type="text" class="form-control form-control-lg p-3" id="nickname"
                                    name="nickname" placeholder="닉네임" value="" required>
                            </div>

                            <div class="col-md-6 offset-md-3 mb-2">
                                <div class="row">
                                    <label for="Id" class="form-label">아이디</label>
                                    <div class="col-md-8 mb-2">
                                        <input type="text" class="form-control form-control-lg p-3" id="Id" name="Id"
                                            placeholder="아이디" value="" required>
                                    </div>
                                    <div class="col-md-4">
                                        <button type="button" class="form-control btn btn-outline-dark p-3 mt-1"
                                            data-bs-toggle="modal" data-bs-target="#duplicateCheckModal">중복체크</button>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-6 offset-md-3 mb-3">
                                <label for="password" class="form-label">암호</label>
                                <input type="password" class="form-control form-control-lg p-3" id="password"
                                    name="password" placeholder="암호" value="" required>
                            </div>

                            <div class="col-md-6 offset-md-3 mb-3">
                                <label for="password2" class="form-label">암호 확인</label>
                                <input type="password" class="form-control form-control-lg p-3" id="password2"
                                    name="password2" placeholder="암호 확인" value="" required>
                            </div>

                        </div>

                        <div class="row">
                            <hr class="my-4 col-md-12 offset-md-0">
                        </div>

                        <div class="row g-3">

                            <div class="col-md-6 offset-md-3 mb-2">
                                <label for="" class="form-label">학교명</label>
                                <div class="row">
                                    <div class="col-md-8">
                                        <input type="text" class="form-control form-control-lg p-3" placeholder="학교명"
                                            value="" required>
                                    </div>
                                    <div class="col-md-4">
                                        <button type="button" class="form-control btn btn-outline-dark p-3 mt-1"
                                            data-bs-toggle="modal" data-bs-target="#univModal">학교 찾기</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-3 mb-3">

                                <!-- <button type="button" class="btn btn-outline-dark btn-sm mb-2"
                                        data-bs-toggle="modal" data-bs-target="#addressModal">주소 찾기</button> -->
                                <div class="row">
                                    <label for="username" class="form-label">주소</label>
                                    <div class="col-md-8 mb-2">
                                        <input type="text" v-model="postcode" class="form-control form-control-lg"
                                            placeholder="우편번호" />
                                    </div>
                                    <div class="col-md-4 mb-1">
                                        <input type="button" @click="execDaumPostcode()" value="주소 검색"
                                            class="form-control btn btn-outline-dark p-2 mt-1" />
                                    </div>
                                </div>
                                <!-- <div class="row">
                                    <input type="text" v-model="postcode" class="form-control form-control-lg col-md col-md-offset-1" placeholder="우편번호">
                                    <input type="button" @click="execDaumPostcode()" class="form-label col-md" value="우편번호 찾기">
                                    </div> -->
                                <input type="text" v-model="address" id="address"
                                    class="form-control form-control-lg mb-2" placeholder="주소">
                                <input type="text" id="detailAddress" class="form-control form-control-lg mb-2"
                                    placeholder="상세주소">
                                <input type="text" v-model="extraAddress" id="extraAddress"
                                    class="form-control form-control-lg" placeholder="참고항목">

                                <!-- <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="username" placeholder="이름" required>
                                    </div> -->
                            </div>

                            <div class="col-md-6 offset-md-3 mb-3">
                                <label for="phoneNumber" class="form-label">전화번호(-을 빼고)</label>
                                <input type="tel" class="form-control form-control-lg p-3" id="phoneNumber"
                                    placeholder="전화번호" value="" required>
                            </div>
                        </div>
                        <div class="row">
                            <hr class="my-4 col-md-12 offset-md-0">
                        </div>
                        <div class="row">
                            <button class="btn btn-outline-dark btn-lg col-md-6 offset-md-3 p-3" type="submit"
                                id="signup">완료</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userRegister',
    data() {
        return {
            postcode: '',
            address: '',
            extraAddress: '',
        }
    },
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
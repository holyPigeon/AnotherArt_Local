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
                                    <label for="studentId" class="form-label">아이디</label> <button type="button" class="btn btn-outline-dark"
                                    data-bs-toggle="modal" data-bs-target="#duplicateCheckModal">중복체크</button>
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
                                    <label for="" class="form-label">학교명</label> <button type="button" class="btn btn-outline-dark"
                                        data-bs-toggle="modal" data-bs-target="#univModal">학교 찾기</button>
                                    <input type="text" class="form-control" placeholder="학교명" value="" required>
                                </div>

                                <div class="col-md-6 offset-md-3">
                                    <label for="username" class="form-label">주소</label> <button type="button" class="btn btn-outline-dark"
                                        data-bs-toggle="modal" data-bs-target="#addressModal">주소 찾기</button>
                                    <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="username" placeholder="이름" required>
                                    </div>
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
}
</script>

<style>
</style>
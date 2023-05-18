<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="emailInput">Email address <sup class="text-danger">*</sup></label>
                            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp"
                                placeholder="Enter email" ref="emailInput">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div class="form-group">
                            <label for="passInput">Password <sup class="text-danger">*</sup></label>
                            <input type="password" class="form-control" id="passInput" placeholder="Password" ref="passInput">
                        </div>
                        <button type="button" class="btn btn-primary" @click="getInfoLogin">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <popup-noti-login :infoLogin="infoLogin"></popup-noti-login>
    </div>
</template>

<script>
import PopupNotiLogin from './PopupNotiLogin.vue';

export default {
  components: { PopupNotiLogin },
    data() {
        return {
            infoLogin: {
                emailLogin: "",
                passLogin: ""
            }
        }
    },
    methods: {
        getInfoLogin() {
            this.infoLogin.emailLogin = this.$refs.emailInput.value;
            this.infoLogin.passLogin = this.$refs.passInput.value;
            // console.log(this.infoLogin);
            
        }
    },
    computed: {
        
    }
}
</script>

<style scoped></style>
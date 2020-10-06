import {
    BaseComponent
} from '../BaseComponent.js'
import {
    validateEmail
} from '../utils.js'
import {
    MD5
} from '../utils.js'

const style = /* html */ `
<style>
    * {
        font-family: 'Titillium Web', sans-serif;
        text-align: center;
    }
    h1 {
        color: #ffffff;
        font-size: 40px;
    }
    img {
        margin-bottom: 50px;
        max-width:200px;
    }
    a {
        color: #ffffff
    }
    a:hover {
        color: #007acc;
    }
    .register-screen {
        border: 0;
        background: url(https://images.squarespace-cdn.com/content/v1/52ec28b3e4b0644432d9fd33/1454538036222-JT0VJJKPI23Q2PQ9WHQM/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/IMG_0034.JPG?format=1500w) no-repeat center;
        background-size: cover;
        width: 100%;
	    min-height:100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15em 0 1em;
    }

    .btn-register {
        color: #ffffff;
        font-family: Titillium Web, sans-serif;
        font-size: 20px;
        background: #4EFF0B;
        color: #001427;
        border: none;
        border-radius: 5px;
        outline: none;
        width:100px;
        border: 0;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .btn-register:hover {
        background-color: #607a94;
        cursor: pointer;
        
    }

</style>
`;

class RegisterScreen extends BaseComponent {
    constructor() {
        super();

        this.state = {
            errors: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },

            data: {
                name: '',
                email: '',
                password: '',
                score: 0,
                status: 'online',
            }
        }
    }
    render() {
        this._shadowRoot.innerHTML = /* html */ `
        ${style}
        
        <section class='register-screen'>
            <h1>CARO ZONE</h1>
            <img src="https://lh3.googleusercontent.com/R2NTrDbjejFDmh-ejLbTZyIv5mY6bN3opl1rfVKibNc-AxlCD9h62lE5yrab0p3babg" style="width:30%; height: 30%">
            <form class='form-register'>
                <input-wrapper class='name' label='Name (*)' type='text' error='${this.state.errors.name}' value='${this.state.data.name}'></input-wrapper>
                <input-wrapper class='email' label='Email (*)' type='email' error='${this.state.errors.email}' value='${this.state.data.email}'></input-wrapper>
                <input-wrapper class='password' label='Password (*)' type='password' error='${this.state.errors.password}' value='${this.state.data.password}'></input-wrapper>
                <input-wrapper class='confirm-password' label='Confirm password (*)' type='password' error='${this.state.errors.confirmPassword}'></input-wrapper>
                <br>
                <button class='btn-register'>REGISTER</button>
                <br>
                <a href="#!/login">Already have an account? Log in</a>
            </form>
        </section>
        
        `;

        this.$formRegister = this._shadowRoot.querySelector('.form-register');
        this.$formRegister.onsubmit = async (event) => {
            event.preventDefault();
            // Lấy dữ liệu từ các input-wrapper
            let name = this._shadowRoot.querySelector('.name').value;
            let email = this._shadowRoot.querySelector('.email').value;
            let password = this._shadowRoot.querySelector('.password').value;
            let confirmPassword = this._shadowRoot.querySelector('.confirm-password').value;

            // Kiểm tra dữ liệu nhập vào, nếu có lỗi thì show ra
            let isPassed = true;

            if (name == '') {
                isPassed = false;
                this.state.errors.name = 'Input your name!';
            } else {
                this.state.errors.name = '';
                this.state.data.name = name;
            }

            if (!email || !validateEmail(email)) {
                isPassed = false;
                this.state.errors.email = 'Input your email!';
            } else {
                this.state.errors.email = '';
                this.state.data.email = email;
            }
            

            if (password == '') {
                isPassed = false;
                this.state.errors.password = 'Input your password!';
            } else {
                this.state.errors.password = '';
                this.state.data.password = password;
            }

            if (confirmPassword == '' || confirmPassword != password) {
                isPassed = false;
                this.state.errors.confirmPassword = 'Your password is not correct!';
            } else {
                this.state.errors.confirmPassword = '';
            }

            // Lưu dữ liệu vào firebase
            if (isPassed) {
                this.state.data.password = MD5(this.state.data.password).toString();
                // check email trùng
                let response = await firebase.firestore()
                    .collection('users')
                    .where('email', '==', email)
                    .get();

                // thêm 
                if (response.empty) {
                    await firebase.firestore().collection('users').add(this.state.data);
                    swal('Sign up successfully!');
                    router.navigate('/login');
                } else {
                    swal('Your email has already been used!');
                }

            }

            this.setState(this.state);
        }
    }
}

window.customElements.define('register-screen', RegisterScreen)
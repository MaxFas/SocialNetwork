import React from "react";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../assets/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreReduxType} from "../../redux/redux-store";
import style from "../../components/common/FormControls/FormControls.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const maxLengthText = maxLengthCreator(20)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: fastsovmax@yandex.ru</p>
            <p>Password: test</p>
            <div><Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLengthText]}/></div>
            <div><Field placeholder={'Password'} name={'password'} type={'password'} component={Input}/></div>
            <div><Field type='checkbox' name={'rememberMe'} component={Input}/> remember me</div>
            {props.error&&<div className={style.formSummaryError}>{props.error}</div>}
            <div><button>
                Login
            </button></div>
        </form>)
}

const LoginRedux = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: LoginType) => {

    const onSubmit = (formData:FormDataType) => {
props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>
    return <div>
        <h1>LOGIN</h1>
        <LoginRedux onSubmit={onSubmit}/>
             </div>
}

const MSTP = (state: StoreReduxType) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(MSTP, {login}) (Login)
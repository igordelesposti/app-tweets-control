import React from "react";
import { WrapperSvg, AvatarSvg, CustomPaper, LoginWrapper, Entrar, Form, Inputs, EntrarButton, Cadastrar, Span } from './styles'
import { signUpAdministrator } from "../../actions/user";
import { connect } from 'react-redux';
import { routes } from "../Router";
import { push } from "connected-react-router";

export class SignUpAdministrator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpAdministratorForm: {}
        }
    }


    handleInput = (event) => {
        const { name, value } = event.target

        this.setState({ signUpAdministratorForm: { ...this.state.signUpAdministratorForm, [name]: value } })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.SignUpAdministrator(this.state.signUpAdministratorForm)
    }
    render() {
        const { signUpAdministratorForm } = this.state
        return (

            <LoginWrapper>
                <CustomPaper elevation={3}>
                    <WrapperSvg>
                        <AvatarSvg src={require("../../assets/images/undraw_profile_pic_ic5t.svg")}></AvatarSvg>
                    </WrapperSvg>
                    <Form onSubmit={this.handleFormSubmit}>

                        <Entrar variant="h6">Entre com as informações para criar um usuário Administrador.</Entrar>
                        <Inputs
                            name="name"
                            label="Nome"
                            required
                            type="text"
                            variant="outlined"
                            value={signUpAdministratorForm.name}
                            InputProps={{ placeholder: "Digite seu nome" }}
                            onChange={this.handleInput}
                        />

                        <Inputs
                            name="email"
                            label="E-mail"
                            required
                            type="email"
                            variant="outlined"
                            value={signUpAdministratorForm.email}
                            InputProps={{ placeholder: "email@email.com" }}
                            onChange={this.handleInput}
                        />

                        <Inputs
                            pattern="{6,}"
                            name="password"
                            label="Senha"
                            required
                            type="password"
                            variant="outlined"
                            value={signUpAdministratorForm.password}
                            InputProps={{ placeholder: "Insira sua senha." }}
                            onChange={this.handleInput}
                        />

                        <EntrarButton type="submit" color="primary" variant="contained">Cadastrar</EntrarButton>

                        <Cadastrar>
                            Quer voltar para tela inicial?
                        <Span
                                onClick={this.props.goToHomePage}
                            > Clique Aqui.</Span>
                        </Cadastrar>
                    </Form>
                </CustomPaper>
            </LoginWrapper >

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SignUpAdministrator: (body) => dispatch(signUpAdministrator(body)),
        goToHomePage: () => dispatch(push(routes.root))
    }
}

export default connect(null, mapDispatchToProps)(SignUpAdministrator);
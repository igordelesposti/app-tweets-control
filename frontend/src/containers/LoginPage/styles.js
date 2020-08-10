import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

export const WrapperSvg = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 30px;
`

export const AvatarSvg = styled.img`
    width: 150px;
    height: 150px;
`
export const CustomPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 400px;
    margin: 0 auto;
    margin-top: 250px;
`
export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height:100vh;
    background: #38ef7d;
`

export const Entrar = styled(Typography)`
    margin-bottom: 100px;
    text-align: center;
    font-weight: bold;
    color: green;
`

export const Inputs = styled(TextField)`
    
`
export const EntrarButton = styled(Button)`
    border-radius: 2px;
    margin-top: 32px;
`

export const Cadastrar = styled(Typography)`
    margin-top: 28px;
    padding: 5px 20px 5px 20px;
    font-size: 8px;
    text-align: center;
    opacity: 60%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 33px;
`

export const Span = styled.span`
    cursor: pointer;
    :hover{
        color: blue;
        text-decoration: underline;
    }
`
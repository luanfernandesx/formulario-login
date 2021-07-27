import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import './App.scss'

const schema = yup.object().shape({
  email: yup.string().email('O campo e-mail é inválido')
   .required('O campo e-mail é obrigatorio!'),
   senha: yup.string().required('O campo senha é obrigatório!')
})

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

    
  function handleLogin({email,senha}) {
    console.log(email,senha)
  }

  return (
     <div className="container">
       <form onSubmit={handleSubmit(handleLogin)} className="login-form">
         <h3>Login</h3>
         <div>
           <label>E-mail</label>
           <input 
            type="text" 
            name="email"
            {...register('email')}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              {...register('senha')}
            />
            <span>{errors.senha?.message}</span>
          </div>
          <button type="submit">Entrar</button>
       </form>
      </div> 
  );
}

export default App;

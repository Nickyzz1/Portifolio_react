import style from './App.module.css'
import { Navbar } from './components/Navbar'


function App() {

  return (
    <>
    <Navbar/>
    <main>

    <div className={style.container} id="home">
            
            <div>
                <img src="https://i.pinimg.com/736x/d0/be/1b/d0be1b4391541895548d827ef558e550.jpg" alt=""/>
            </div>
            
            <section className ={style.helloWorld}>
                
                <section>
                    <div>
                        <h1 className={style.typeWriting}>HI, i'm <span>Nicolle</span></h1>
                        <h2 className={style.typeWriting2}>i'm a <span>Developer</span></h2>
                    </div>
                </section>
                
                <p>Hello world! Eu me chamo Nicolle, tenho 18 anos e tenho + de 1 ano de experiência no mundo digital. Sou apaixonada pela minha área de atuação e atualmente, minha principal área de desenvolvimento é Front-end. Até aqui minha trajeytória foi marcada por projetos desafiadores e aqui abaixo você poderá encontrar alguns deles! <br/>Faça uma boa viagem </p>
                
                <nav className={style.contacts}>
                    <ul>
                        
                        <a href="https://www.instagram.com/nicollerodriguessiqueira?igsh=MXhwYThta2ExNmV0Mw==" target="_blank">
                            <img className={style.icon}name="instagram" src="https://img.icons8.com/?size=100&id=85154&format=png&color=000000 " alt=""/>  
                        </a>
                        
                        <a href="https://www.linkedin.com/in/nicolle-rodrigues-siqueira-198113260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" ><img  className={style.icon} name="linkedin" src="https://img.icons8.com/?size=100&id=60443&format=png&color=000000" alt="" /></a>
                        
                        <a href="https://github.com/Nickyzz1/" target="_blank"><img  className={style.icon} name="github" src="https://img.icons8.com/?size=100&id=zehXPLJSAbBB&format=png&color=000000" alt=""/></a>
                        
                        <a href="https://wa.me/qr/EXZNCADDRD6SF1" target="_blank"><img  className={style.icon} name="whatsapp" src="https://img.icons8.com/?size=100&id=16466&format=png&color=000000" alt=""/></a>
                        
                        <button type="submit"  className={style.button}> <a href="https://wa.me/qr/EXZNCADDRD6SF1" target="_blank">Me contate</a></button>
                        
                    </ul>
                </nav>
            </section>
        </div>
  </main>
    </>
  )
}

export default App

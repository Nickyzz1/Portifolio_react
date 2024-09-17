import style from './App.module.css'
import { Navbar } from './components/Navbar'


function App() {

  return (
    <>
    <Navbar/>

    <main>

    <div className={style.container} id="home">
            
            <div className={style.perfil}>
                <img src="https://i.pinimg.com/736x/d0/be/1b/d0be1b4391541895548d827ef558e550.jpg" alt=""/>
            </div>
            
            <section className ={style.helloWorld}>
                
                <section>
                    <div>
                        <h1 className={style.typeWriting}>HI, i'm <span>Nicolle</span></h1>
                        <h2 className={style.typeWriting2}>i'm a <span>Developer</span></h2>
                    </div>
                </section>
                
                <p className={style.myDescription} >Hello world! Eu me chamo Nicolle, tenho 18 anos e tenho + de 1 ano de experiência no mundo digital. Sou apaixonada pela minha área de atuação e atualmente, minha principal área de desenvolvimento é Front-end. Até aqui minha trajeytória foi marcada por projetos desafiadores e aqui abaixo você poderá encontrar alguns deles! <br/>Faça uma boa viagem </p>
                
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

        
        <div className={style.box} id="habilidades">
            
            <section className={style.content}>
                
                <h1 className = {style.titles}>Habilidades</h1>
                
                <div className={style.galery}>
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                        <figcaption>SQL</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                        <figcaption>MySQL</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                        <figcaption>Java</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                        <figcaption>C</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" />
                        <figcaption>SQL Server</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000" alt=""/>
                        <figcaption>Power BI</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://img.icons8.com/?size=100&id=13654&format=png&color=000000" alt=""/>
                        <figcaption>Excel</figcaption>
                    </figure>
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        <figcaption>CSS3</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={`${style.skills} ${style.fadeIn}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        <figcaption>HTML5</figcaption>
                    </figure>
                </div>                
            
            </section>
            
        </div>
        
        <div className={style.box} id="formação">
            
            <section className={style.content}>
                
                <h1 className={style.titles}>Formação acadêmica & Experiencias de trabalho</h1>
                
                <div className={style.imgAcademic}>
                    <figure>
                        <img className={style.academic} src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Bras%C3%A3o_PUCPR.png" alt=""/>
                        <figcaption>Graduando Analise e desenvolvimento de sitemas na PUCPR</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={style.academic} src="https://www.researchgate.net/publication/366596809/figure/fig3/AS:11431281109572098@1672096855548/A-PUCPR-possui-63-cursos-de-graduacao-16-programas-de-pos-graduacao-Stricto-Sensu.png" alt=""/>
                        <figcaption>Pontifácia Universidade Católica do Paraná</figcaption>
                    </figure>
                    
                    <figure>
                        <img className={style.academic} src="https://www.provida.net/wp-content/uploads/2021/01/Thumb_350x245_Curitiba.jpg" alt=""/>
                        <figcaption>2º semestre de técnico em Desenvolvimento de Sistemas</figcaption>
                    </figure>
                    
                    <figure>
                        
                        <img className={style.academic} src="https://www.institucionalpositivo.com.br/wp-content/uploads/2020/08/Agua_verde_fachada-1024x683.jpg" alt=""/>
                        <figcaption>Experiencia em web design - Positivo</figcaption>
                        
                    </figure>
                    
                    <figure>
                        <img className={style.academic} src="https://i.pinimg.com/736x/08/04/a8/0804a8c521ff5459d3ea3c06a0bcdc0c.jpg" alt=""/>
                        <figcaption>Engeenering Technical School - Bosch</figcaption>
                    </figure>
                </div>
                
            </section>
            
        </div>
        
        <div className={style.box} id="projetos"/>
            
            <h1 className={style.titles} >Agora aos Projetos!</h1>

                <h2 className={style.projetoTitle} >Batery Hero!</h2>

                <div className={style.projeto} >
                    
                    <img className={style.imgs_projeto}   src="https://i.pinimg.com/736x/b2/11/b3/b211b3654f254100fc8a0d90ef72089c.jpg" alt=""/>
                    
                    <img className={style.imgs_projeto} src="https://i.pinimg.com/736x/c1/dc/a0/c1dca0bf683343d1a722919a820e8a4a.jpg" alt=""/>
                    
                    <img className={style.imgs_projeto} src="https://i.pinimg.com/736x/be/3a/b5/be3ab5668555676213687be03e29237a.jpg" alt=""/>
                    
                </div>
                
                <p className={`${style.paragraph} ${style.card}`}  >Um projeto feito com integração de IoT, web, firebase e banco de dados, realizado na Bosch Curitiba. A ideia do projero é uma bateria elétrica construída do zero com prototipagem IoT utilizando o microcontrolador ESP32 para fazer a comunicação dos sinais sensoriais e web. <br/>Tecnologias usadas: Thonny, VS Code, IoT, JavaScript, css, html, firebase, sql server. <br/> <a className={style.github} href="https://github.com/sasa2754/Drums_Hero">Link Github</a> </p>

                
                
            <div/>

            <h2 className={style.projetoTitle} >Bomber Boy!</h2>

                <div className={style.projeto}>
                    
                    <img  style={{width:'20%', borderRadius: '9px'}}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu80lxT-Q8VIGF0pphfHsSSs8cjAU8wjFNYQ&s" alt=""/>
                
                </div>
                
                <p className={`${style.paragraph} ${style.card}`} >Inspirado no Bomberman, projeto final do 1º semestre de Analise e Desenvolvimento de Sistemas no Senai foi chamado de Bomber Boye foi completamente programado em C e construido em 7 dias. <br />  <a href="https://github.com/wallacin07/ProjetoFinalC">Link github</a> </p>

            <div/>

            {/* <h2  >Robótica: Lego MindStorms</h2> */}

            {/* <div className="video-gallery">
                <video autoplay muted loop style="display: flex; width: 10%; border-radius: 9px; box-shadow: 0 0 13px rgba(255, 255, 255, 0.8);" src="assets/img/WhatsApp Video 2024-08-09 at 10.01.44.mp4" alt=""></video>
                <video autoplay muted loop style="display: flex; width: 10%; border-radius: 9px; box-shadow: 0 0 13px rgba(255, 255, 255, 0.8);" src="assets/img/WhatsApp Video 2024-08-09 at 10.01.52.mp4" alt=""></video>
            </div> */}
        
    <div/>
    </main>
  </>
  )
}

export default App;

/* eslint-disable no-unused-vars */
import SocialButton from './SocialButton'
import  CustomAlert from './CustomAlert'
import Formulario from './Formulario';


const Registro = () => {

    const linkedinIcon = '../src/assets/icons/Linkedin.svg'; 
    const GithubIcon = '../src/assets/icons/Github.svg'
    const FacebookIcon = '../src/assets/icons/Facebook.svg'
    

  return (
    <>
      <div>
        <SocialButton icon={linkedinIcon} platform="LinkedIn" />
        <SocialButton icon={GithubIcon} platform="GithubIcon" />
        <SocialButton icon={FacebookIcon} platform="FacebookIcon" />
      </div>

      <div>
        <Formulario />
       
      </div>

   

    
    </>


     
    

   
  )
}

export default Registro
import React from 'react';
import { Container } from './styles';
import { FacebookIcon, InstagramIcon } from 'assets/icons';

const Footer = () => {
	return (
		<Container>  
			<div>
				<b className="headerMenuFooter">Menu do Rodapé</b>
				<span>Home</span>
				<span>Loja</span>
				<span>Informações</span>
				{/* <span>Nerd</span>
                <span>Geek</span>
                <span>Anime</span>
                <span>Gamer</span>
                <span>Kid</span>
                <span>E-girl</span> */}
				<p>© 2021, Kimochism</p>
			</div>

			<div>
				<b className="headerMenuFooter">Outros</b>
				{/* <span>Pesquisar </span>
                <span>Rastreio</span>
                <span>Perguntas frequentes</span> */}
				<span>Política de Entrega</span>
				<span>Política de Devolução</span>
				<span>Política de Privacidade</span>
				<span>Roupas e o COVID-19</span>
			</div>
            
			<div>
				<b className="headerMenuFooter">Contato</b>
				<span>contato.kimochism@gmail.com</span>
				<div className="socialMedia">
					<a href="https://www.facebook.com/kimochismstore" target='blank'>
						<img src={FacebookIcon} width="10px" alt="Facebook"/>
					</a>
					<br/>
					<a href="https://www.instagram.com/kimochism.store" target='blank'>
						<img src={InstagramIcon} width="20px" alt="Instagram"/>
					</a>
				</div>
			</div>

			<div>
				<b className="headerMenuFooter">Sobre nós</b>
				<p className="Mission">
                A<b> Kimochism 気持ち</b>é uma loja totalmente virtual, especializada em produtos de altíssima qualidade, por um baixo custo.
				</p>
				<p className="Mission">
                Nossa principal missão é fornecer aos nossos clientes as melhores ofertas do mercado, de produtos que possuem qualidade e conforto, através do contato que temos com muitos fabricantes fora do país, oferecemos essa oportunidade a você, futuro cliente, de poder adquirir produtos de ponta com o melhor preço do mercado. 
				</p>
			</div>
		</Container>
	);
};

export default Footer;

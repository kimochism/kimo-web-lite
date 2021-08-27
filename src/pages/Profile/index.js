import React, { useContext } from 'react';
import Menu from 'shared/Menu/index';
import { ArrowIcon, CheckedIcon } from 'assets/icons';
import { Container } from './styles';
import Footer from 'shared/Footer/index';
import UserContext from 'context/userContext';
import { useHistory } from 'react-router-dom';

const Profile = () => {

	const userContext = useContext(UserContext);
	const history = useHistory();

	return (
		<Container>
			<Menu/>
			<div className="container-profile">
				<div className="profile-left">
					<div className="profile-btn-option">
						<button>
							<span>Conta</span>
							<img src={ArrowIcon}/>
						</button>
						<button>
							<span>Endereços</span>
							<img src={ArrowIcon}/>
						</button>
						<button>
							<span>Notificações</span>
							<img src={ArrowIcon}/>
						</button>
						<button>
							<span>Privacidade</span>
							<img src={ArrowIcon}/>
						</button>
						<button>
							<span>Suporte</span>
							<img src={ArrowIcon}/>
						</button>
						<button>
							<span>Sobre</span>
							<img src={ArrowIcon}/>
						</button>
						<button onClick={() => {
							localStorage.removeItem('Authorization');
							localStorage.removeItem('email');
							userContext.isLogged = false;
							userContext.email = null;

							history.push('/');
						}}>
							<span>Sair</span>
							<img src={ArrowIcon}/>
						</button>
					</div>
				</div>
				<div className="profile-right">
					<div className="profile-picture-and-name">
						<div className="profile-picture"></div>
						<span>
                            Usuário Sobrenome
						</span>
					</div>
					<div className="profile-account-form">
						<div>
							<div>
								<label>Nome</label>
								<input type="text" placeholder="Alexandre" disabled/>
							</div>
							<div>
								<label>Sobrenome</label>
								<input type="text" placeholder="Souza"/>
							</div>
						</div>
						<div className="profile-input-is-not">
							<label>Email</label>
							<input type="email" placeholder="alexandre.souza@gmail.com"/>
						</div>
						<div>
							<div>
								<label>Celular</label>
								<input type="number" placeholder="(11) 98765-4321"/>
							</div>
							<div>
								<label>Telefone</label>
								<input type="text" placeholder="9876-5432"/>
							</div>
						</div>
					</div>

					<button>
						<img src={CheckedIcon}/>
					</button>
				</div>
			</div>
			<Footer/>
		</Container>
	);
};

export default Profile;

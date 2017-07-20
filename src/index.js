import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css'; 
import './style770.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './img/logo.png';
import logo from './img/logo.png';
import menuButton from './img/menu-button.png';
import phoneIcon from './img/phone-icon.png';

import fbLogo from './img/fb.png';
import vkLogo from './img/vk.png';
import payment1 from './img/payments/1.png';
import payment2 from './img/payments/2.png';
import payment3 from './img/payments/3.png';
import payment4 from './img/payments/4.png';
import payment5 from './img/payments/5.png';
import payment6 from './img/payments/6.png';
import payment7 from './img/payments/7.png';
import payment8 from './img/payments/8.png';
import payment9 from './img/payments/9.png';
import payment10 from './img/payments/10.png';
import payment11 from './img/payments/11.png';
import payment12 from './img/payments/12.png';
import payment13 from './img/payments/13.png';
import payment14 from './img/payments/14.png';
import payment15 from './img/payments/15.png';
import bottomAdv1 from './img/bottom-adv1.png';
import bottomAdv2 from './img/bottom-adv2.png';
import bottomAdv3 from './img/bottom-adv3.png';
import expert1 from './img/expert1.png';
import expert2 from './img/expert2.png';
import expert3 from './img/expert3.png';
import sideAdv1 from './img/side-adv1.png';
import sideAdv2 from './img/side-adv2.png';
import sideAdv3 from './img/side-adv3.png';
import sideAdv4 from './img/side-adv4.png';
import sideAdv5 from './img/side-adv5.png';
import sideAdv6 from './img/side-adv6.png';
import mainAdv1 from './img/main-adv1.png';
import mainAdv2 from './img/main-adv2.png';
import mainAdv3 from './img/main-adv3.png';
import mainAdv4 from './img/main-adv4.png';
import mainAdvShadow from './img/main-adv-shadow.png';
import rateLine from './img/rate-line.png';
import notebooks from './img/notebooks.png';
import mainButton from './img/button.png';
import menuArrow from './img/menu-arrow.png';



class Header extends React.Component{
	constructor(props) {
    super(props);
    this.state = {showMainMenu: false,
    			menuParams : {
    				'0' : false,
    				'1' : false,
    				'2' : false,
    				'3' : false
    			}};
    this.handleButtonMouseEnter = this.handleButtonMouseEnter.bind(this);
    this.handleMenuMouseLeave = this.handleMenuMouseLeave.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);    
  	}

  	handleButtonMouseEnter() {
    //this.setState({showMainMenu: true});
  	}
  	handleMenuMouseLeave() {
    //this.setState({showMainMenu: false});
  	}
  	handleButtonClick() {
  		this.setState({showMainMenu: this.state.showMainMenu === false});
  		console.log("click");
  	}
	render() {
		return (
			<div className="header">
			{this.state.showMainMenu ? <MenuMain subMenuVisible = {this.state.menuParams} onMouseLeave={this.handleMenuMouseLeave} /> : <div/>}
				<img src={menuButton} alt="" className="menu-button" onClick={this.handleButtonClick} onMouseEnter={this.handleButtonMouseEnter}/>
				<img src={logo} alt="" className="logo" />
				<ul className="menu">
					<li><a href="#" className="active" onClick={() => this.setState({showMainMenu:true,
																						menuParams : {
																			    				'0' : true,
																			    				'1' : false,
																			    				'2' : false,
																			    				'3' : false
																			    			}})}>Компания</a></li>
					<li><a href="#">Платформа</a></li>
					<li onClick={() => this.setState({showMainMenu:true,
																						menuParams : {
																			    				'0' : false,
																			    				'1' : true,
																			    				'2' : false,
																			    				'3' : false
																			    			}})}><a href="#">Обучение</a></li>
					<li onClick={() => this.setState({showMainMenu:true,
																						menuParams : {
																			    				'0' : false,
																			    				'1' : false,
																			    				'2' : true,
																			    				'3' : false
																			    			}})}><a href="#">Аналитика</a></li>
					<li onClick={() => this.setState({showMainMenu:true,
																						menuParams : {
																			    				'0' : false,
																			    				'1' : false,
																			    				'2' : false,
																			    				'3' : true
																			    			}})}><a href="#">Инструменты</a></li>
				</ul>
				<div className="contact">
					<img src={phoneIcon} alt=""/>
					<a href="tel:88005056704"><p className="phone">8 800 505 67 04</p></a>
				</div>
			</div>
			);
	}
}

class BottomFeatures extends React.Component{
	render() {
		return (
				<div className="bottom-features">
					<div className="content">
						<div className="feature">
							<h2>ПОПОЛНЕНИЕ И СНЯТИЕ СРЕДСТВ</h2>
							<div className="feature-block">
								<img src={bottomAdv1} alt=""/>
								<p>Удобно и выгодно: более 35 способов пополнить счет без </p>
								<a href="">> ПОПОЛНИТЬ СЧЕТ</a>
								<a href="">> СНЯТИЕ СРЕДСТВ</a>
							</div>
						</div>
						<div className="feature">
							<h2>ТОРГОВАЯ ОНЛАЙН ПЛОЩАДКА</h2>
							<div className="feature-block">
								<img src={bottomAdv2} alt=""/>
								<p>Online платформа 770capital дает возможность в любом месте и в любое время зарабатывать на самом динамичном </p>
								<a href="">ОНЛАЙН ПЛАТФОРМА</a>
							</div>
						</div>
						<div className="feature">
							<h2>ЭФФЕКТИВНОЕ ОБУЧЕНИЕ</h2>
							<div className="feature-block">
								<img src={bottomAdv3} alt=""/>
								<a href="">> ЧТО ТАКОЕ FOREX</a>
								<a href="">> ОТВЕТЫ НА ВОПРОСЫ</a>
								<a href="">> ПОЛУЧЕНИЕ ПРИБЫЛИ</a>
							</div>
						</div>
					</div>
				</div>
			);
	}
}

class Payments extends React.Component{
	render() {
		return (
				<div className="payments">
					<div className="content">
						<div className="line1">
							<img src={payment1} alt=""/>
							<img src={payment2} alt=""/>
							<img src={payment3} alt=""/>
							<img src={payment4} alt=""/>
							<img src={payment5} alt=""/>
							<img src={payment6} alt=""/>
							<img src={payment7} alt=""/>
							<img src={payment8} alt=""/>
						</div>
						<div className="line2">
							<img src={payment9} alt=""/>
							<img src={payment10} alt=""/>
							<img src={payment11} alt=""/>
							<img src={payment12} alt=""/>
							<img src={payment13} alt=""/>
							<img src={payment14} alt=""/>
							<img src={payment15} alt=""/>
						</div>
					</div>
				</div>
			);
	}
}

class Footer extends React.Component{
	render() {
		return (
			<div className="footer">
				<div className="content">
					<div className="footer-left">
						<img src={fbLogo} alt=""/>
						<img src={vkLogo} alt=""/>
						<p>Бесплатный телефон по РФ: <a href="">8-800-505-67-04</a> <br />
							Москва: <a href="">+7 (495) 134-12-77</a> <br /> Лондон: <a href="">+44 (20) 380-744-28</a> <br />
							Рига: <a href="">+371 (67) 660-741</a> <br /> Вильнюс: <a href="">+ 370 (5) 2-111-426</a></p>
						<p>Payments are provided by MAXI Platinum Limited, <br />Bul. „Iztochen” №137, fl. 2, app. 8, Bulgaria, Plovdiv, ZIP 4000 <br/>© 2017, 770capital. Все права защищены.
						</p>
					</div>
					<div className="footer-right">
						<div className="links">
							<a href="">Трейдинг</a>
							<a href="">Преимущества</a>
							<a href="">Форекс прогноз на сегодня</a>
							<a href="">Форекс прогноз на неделю</a>
							<a href="">Финансовый календарь</a>
							<a href="">О нас</a>
							<a href="">Предупреждение о риске</a>
							<a href="">Политика конфиденциальности</a>
							<a href="">Условия торговли</a>
							<a href="">Помощь</a>
						</div>
						<p className="warning">Важно: Торговля на валютном рынке сопряжена с рисками. Мы настоятельно рекомендуем Вам прочитать наши <a href="">Положения и Условия</a> до того, как Вы сделаете какие-либо инвестиции.</p>
					</div>
				</div>
			</div>
			);
	}
}

class Predictions extends React.Component {
	render() {
		return (
				<div className="predictions-block">
					<div className="prediction-header">
						<h2>ФОРЕКС ПРОГНОЗ НА КАЖДЫЙ ДЕНЬ</h2>
					</div>
					<div className="content">
						<div className="predictions">
							<div className="prediction">
								<p className="date">1 августа, 2017</p>
								<h2>«Доллар навёрстывает упущенное и укрепляется против всех валют!»</h2>
								<p className="prediction-text">В экономической статистике пятницы - в центре внимания рынка окажется публикация в США февральских индексов экономической уверенности потребителей, оценки текущих условий и инфляционных ожиданий - от университета Мичигана; </p>
							</div>
							<div className="prediction">
								<p className="date">1 августа, 2017</p>
								<h2>«Доллар навёрстывает упущенное и укрепляется против всех валют!»</h2>
								<p className="prediction-text">В экономической статистике пятницы - в центре внимания рынка окажется публикация в США февральских индексов экономической уверенности потребителей, оценки текущих условий и инфляционных ожиданий - от университета Мичигана; </p>
							</div>
							<div className="prediction">
								<p className="date">1 августа, 2017</p>
								<h2>«Доллар навёрстывает упущенное и укрепляется против всех валют!»</h2>
								<p className="prediction-text">В экономической статистике пятницы - в центре внимания рынка окажется публикация в США февральских индексов экономической уверенности потребителей, оценки текущих условий и инфляционных ожиданий - от университета Мичигана; </p>
							</div>
							<div className="prediction">
								<p className="date">1 августа, 2017</p>
								<h2>«Доллар навёрстывает упущенное и укрепляется против всех валют!»</h2>
								<p className="prediction-text">В экономической статистике пятницы - в центре внимания рынка окажется публикация в США февральских индексов экономической уверенности потребителей, оценки текущих условий и инфляционных ожиданий - от университета Мичигана; </p>
							</div>
						</div>
					</div>
				</div>
			);
	}
}

class DoubleBlock extends React.Component {
	render() {
		return (
				<div className="double-block">
					<div className="left-block">						
						<div className="experts">
						<h2>ЭКСПЕРТНАЯ АНАЛИТИКА НАШИХ ЭКСПЕРТОВ:</h2>
							<div className="expert">
								
								<div className="data">
									<p className="date">11 апреля | Драгоценные металлы<img src={expert1} alt=""/>Василий Жуков</p>
									<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ipsum!</p>
								</div>
							</div>
							<div className="expert">
								
								<div className="data">
									<p className="date">11 апреля | Драгоценные металлы<img src={expert2} alt=""/>Василий Жуков</p>
									<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, temporibus.</p>
								</div>
							</div>
							<div className="expert">
								
								<div className="data">
									<p className="date">11 апреля | Драгоценные металлы<img src={expert3} alt=""/>Василий Жуков</p>
									<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, non!</p>
								</div>
							</div>
							<a href="#">БОЛЬШЕ ЭКСПЕРТНОЙ АНАЛИТИКИ...</a>
						</div>
					</div>
					<div className="right-block">
						<div className="right-block-content">
							<h2>ГОРЯЧАЯ НОВОСТЬ ОЖИДАЕТСЯ ЧЕРЕЗ</h2>
							<div className="timer">
								<p>23:45:03</p>
							</div>
							<h3 className="news-name">США</h3>
							<p className="news">Подобное предложение можно было бы считать рискованным, однако, можно отметить, что в период с 1995 по 2014 годы </p>
							<div className="button-open">
								<p>ОТКРЫТЬ СЧЕТ</p>
							</div>
						</div>
						
					</div>
				</div>
			);
	}
}

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="main-block">



							<div className="side-features" id="left-side-features">
								<div className="side-feature">
									<img src={sideAdv1} alt=""/>
									<p>68 валют</p>
								</div>
								<div className="side-feature">
									<img src={sideAdv2} alt=""/>
									<p>Кредитное плечо</p>
								</div>
								<div className="side-feature">
									<img src={sideAdv3} alt=""/>
									<p>Работаем с 2010года</p>
								</div>
							</div>



					<div className="content">
						
							<div className="slider">
								<img src={notebooks} alt=""/>
								<h1>770capital — Форекс трейдинг</h1>
								<h2>Надежный партнер в работе на финансовых рынках</h2>
								<h3>770capital – это международная компания, которая предоставляет своим клиентам самые современные сервисы по работе на мировом валютном рынке.</h3>
							</div>
						
						<div className="main-button">
							<img src={mainButton} alt=""/>
						</div>
						<div className="main-features">
							<div className="main-feature">
								<img src={mainAdv1} alt=""/>
								<p>ВАЛЮТА</p>
								<img src={mainAdvShadow} alt=""/>
							</div>
							<div className="main-feature">
								<img src={mainAdv2} alt=""/>
								<p>НЕФТЬ</p>
								<img src={mainAdvShadow} alt=""/>
							</div>
							<div className="main-feature">
								<img src={mainAdv3} alt=""/>
								<p>АКЦИИ</p>
								<img src={mainAdvShadow} alt=""/>
							</div>
							<div className="main-feature">
								<img src={mainAdv4} alt=""/>
								<p>ДРАГ.МЕТАЛЛ</p>
								<img src={mainAdvShadow} alt=""/>
							</div>
						</div>
					</div>


							<div className="side-features" id="right-side-features">
								<div className="side-feature">
									<img src={sideAdv4} alt=""/>
									<p>Надежность</p>
								</div>
								<div className="side-feature">
									<img src={sideAdv5} alt=""/>
									<p>Отсутствие комиссии</p>
								</div>
								<div className="side-feature">
									<img src={sideAdv6} alt=""/>
									<p>Фиксированный спред</p>
								</div>
							</div>

					</div>

					<div className="rates">
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
	 					<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
						<img src={rateLine} alt=""/>
						<div className="rate">
							<p className="rate-name">GPB/USD</p>
							<p className="rate-value">0.00000 | 00000.0</p>
						</div>
					</div>
				</div>

			);
	}
}

class MenuMain extends React.Component {
	constructor(props) {
    super(props);
    this.handleMenuHeaderClick = this.handleMenuHeaderClick.bind(this);    
  	}


  	handleMenuHeaderClick(param) {
  		var item = document.getElementsByClassName("subMenu")[param];
  		item.classList.remove("subMenuInitial");
    	if(!this.props.subMenuVisible[param]){
    		item.classList.remove("subMenuHidden");
    		item.classList.add("subMenuShown");
    		this.props.subMenuVisible[param] = true;
    	} else {
    		item.classList.add("subMenuHidden");
    		item.classList.remove("subMenuShown");
    		this.props.subMenuVisible[param] = false;
    	}
  	}

  	componentDidUpdate() {
  				var array = this.props.subMenuVisible;
				console.log(array);
				var i;
				for(i = 0; i<4; i++) {
					//if(array[i]) {
						var param = i;
						var item = document.getElementsByClassName("subMenu")[param];
						
				    	if(this.props.subMenuVisible[param]){
				    		item.classList.remove("subMenuInitial");
				    		item.classList.remove("subMenuHidden");
				    		item.classList.add("subMenuShown");
				    		this.props.subMenuVisible[param] = true;
				    	} else {
				    		/*item.classList.add("subMenuHidden");
				    		item.classList.remove("subMenuShown");
				    		this.props.subMenuVisible[param] = false;*/
				    	}
					//}
				}
  		}

  	componentDidMount() {
  				var array = this.props.subMenuVisible;
				console.log(array);
				var i;
				for(i = 0; i<4; i++) {
					//if(array[i]) {
						var param = i;
						var item = document.getElementsByClassName("subMenu")[param];
						
				    	if(this.props.subMenuVisible[param]){
				    		item.classList.remove("subMenuInitial");
				    		item.classList.remove("subMenuHidden");
				    		item.classList.add("subMenuShown");
				    		this.props.subMenuVisible[param] = true;
				    	} else {
				    		/*item.classList.add("subMenuHidden");
				    		item.classList.remove("subMenuShown");
				    		this.props.subMenuVisible[param] = false;*/
				    	}
					//}
				}
  		}
  	
	render() {
		
				
				/*for (value in array) {

				}*/
				/**/
		return (
			<div className="MenuMain">
				<h3 onClick={() => this.handleMenuHeaderClick(0)}>КОМПАНИЯ<img className="menuArrow" src={menuArrow}/></h3>
				<div className="subMenu subMenuInitial">
					<h4>Преимущесва</h4>
					<h4>Лицензии и свидетельства</h4>
					<h4>Бонусы и акции</h4>
					<h4>Отзывы наших клиентов</h4>
					<h4>Приведи друга</h4>
					<h4>Служба поддержки</h4>
				</div>
				<h3>ПЛАТФОРМА</h3>
				<h3 onClick={() => this.handleMenuHeaderClick(1)}>ОБУЧЕНИЕ<img className="menuArrow" src={menuArrow}/></h3>
				<div className="subMenu subMenuInitial">
					<h4>Что такое Форекс</h4>
					<h4>Ответы на вопросы</h4>
					<h4>Как работает Форекс</h4>
					<h4>Как торговать на Форекс?</h4>
					<h4>Получение прибыли</h4>
					<h4>Словарь терминов</h4>
					<h4>Как выбрать брокера</h4>
					<h4>Как выбрать платформу</h4>					
					<h4>Стратегии на рыне Форекс</h4>
					<h4>Стратегия "Три свечи"</h4>
				</div>
				<h3 onClick={() => this.handleMenuHeaderClick(2)}>АНАЛИТИКА<img className="menuArrow" src={menuArrow}/></h3>
				<div className="subMenu subMenuInitial">
					<h4>Форекс прогноз на сегодня</h4>
					<h4>Новостная лента Форекс</h4>
					<h4>Экономический календарь</h4>
				</div>
				<h3 onClick={() => this.handleMenuHeaderClick(3)}>ИНСТРУМЕНТЫ<img className="menuArrow" src={menuArrow}/></h3>
				<div className="subMenu subMenuInitial">
					<h4>Валюты</h4>
					<h4>Индексы</h4>
					<h4>Энергоносители</h4>
					<h4>Акции</h4>
					<h4>Драгоценные металлы</h4>
					<h4>Таблица текущих спредов</h4>
					<h4>Даты истечения фьючерсных контрактов</h4>
				</div>
				
				
			
			</div>

			);
	}
}

class MenuRegistration extends React.Component {
	render() {
		return (
			<div className="MenuRegistration">
				<div className="tabs">
					<div className="activeTab"><h3>Регистрация</h3></div>
					<div><h3>Вход</h3></div>
				</div>
				<form>
					<MenuField name={"Имя"} fieldId={"firstNameField"} pId={"firstNameP"}/>
					<MenuField name={"Телефон"} fieldId={"secondNameField"} pId={"secondNameP"}/>
					<MenuField name={"Страна"} fieldId={"countryField"} pId={"countryP"}/>
					<MenuField name={"Email"} fieldId={"emailField"} pId={"emailP"}/>
					<MenuField name={"Пароль"} fieldId={"passwordField"} pId={"passwordP"}/>
					<MenuField name={"Пароль еще раз"} fieldId={"passwordConfirmField"} pId={"passwordConfirmP"}/>
					<div className="agreeBlock">
						<input type="checkbox" id="agree"/>
						<p>Я прочитал и согласен с условиями предоставления сервиса и иными регламентирующими документами 770Capital. Эти документы являются неотъемлемой частью пользовательского соглашения</p>
					</div>
					<div className="RegistrationButton"><p>РЕГИСТРАЦИЯ</p></div>
				</form>


			</div>
			);
	}
}

class MenuField extends React.Component { 
	constructor(props) {
    super(props);
    this.handleFieldFocus = this.handleFieldFocus.bind(this); 
    this.handleFieldFocusOut = this.handleFieldFocusOut.bind(this);   
  	}


  	handleFieldFocus(param, paramField) {
  		var itemP = document.getElementById(param);
  		var itemField = document.getElementById(paramField);
  		itemP.classList.remove("FieldSignInitional");
  		itemP.classList.remove("FieldSignOutFocus");
    	itemP.classList.add("MenuFieldOnFocus"); 
    	itemField.focus();   	
  	}
  	handleFieldFocusOut(paramP, paramField) {
  		var itemP = document.getElementById(paramP);
  		var itemField = document.getElementById(paramField);
  		//alert(itemField.value);
  		if(itemField.value === "") {
  			itemP.classList.remove("FieldSignInitional");
  			itemP.classList.add("FieldSignOutFocus");
  			itemP.classList.remove("MenuFieldOnFocus"); 
  		}
  	}
	render() {
		return(
			<div className="MenuField" onClick={() => this.handleFieldFocus(this.props.pId,this.props.fieldId)} onBlur={() => this.handleFieldFocusOut(this.props.pId,this.props.fieldId)}>
				<p className="FieldSignInitional FieldSign" id={this.props.pId}>{this.props.name}</p>
				<input id={this.props.fieldId}  type="text" defaultValue="" onSelect={() => this.handleFieldFocus(this.props.pId,this.props.fieldId)} onBlur={() => this.handleFieldFocusOut(this.props.pId,this.props.fieldId)}/>
			</div>
			);
	}
}








class Page extends React.Component{
	


	render() {
		return (
			<div>
				
				<MenuRegistration/>
				<Header />
				<Main/>
				<DoubleBlock/>
				<Predictions/>
				<BottomFeatures/>
				<Payments/>
				<Footer/>
			</div>
			);
	}
}

  ReactDOM.render(
    <Page/>,
    document.getElementById('root')
  );


registerServiceWorker();

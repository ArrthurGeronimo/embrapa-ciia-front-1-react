import React from "react";
import { NavLink } from "react-router-dom";

import './style.css';

import DividerSimple from './../../../Components/DividerSimple';
import DividerWithText from './../../../Components/DividerWithText';
import FazendaAdministracaoCard from './../../../Components/FazendaAdministracaoCard';
import FazendaDadosCard from './../../../Components/FazendaDadosCard';

import TalhaoIcon from './../../../../assets/img/icons/talhao.png';
import PiqueteIcon from './../../../../assets/img/icons/piquete.png';
import EstacaoIcon from './../../../../assets/img/icons/estacao.png';
import AnimalIcon from './../../../../assets/img/icons/animal.png';
import SensorIcon from './../../../../assets/img/icons/sensor.png';

import PrecipitacaoIcon from './../../../../assets/img/icons/precipitacao.png';
import TemperaturaIcon from './../../../../assets/img/icons/temperatura.png';
import UmidadeDoArIcon from './../../../../assets/img/icons/umidadeDoAr.png';
import VentoIcon from './../../../../assets/img/icons/vento.png';
import RadiacaoIcon from './../../../../assets/img/icons/radiacao.png';
import PressaoIcon from './../../../../assets/img/icons/pressao.png';
import InsolacaoIcon from './../../../../assets/img/icons/insolacao.png';
import TemperaturaSoloIcon from './../../../../assets/img/icons/temperaturaSolo.png';
import UmidadeSoloIcon from './../../../../assets/img/icons/umidadeDoSolo.png';
import PastagemIcon from './../../../../assets/img/icons/pastagem.png';
import CercaIcon from './../../../../assets/img/icons/cerca.png';
import CochoIcon from './../../../../assets/img/icons/cocho.png';
import BebedouroIcon from './../../../../assets/img/icons/bebedouro.png';
import AnimaisIcon from './../../../../assets/img/icons/animais.png';

class Fazenda extends React.Component {
  render() {
    return (
    <div className="ui container">
      	<div className="row">
	      	<div className="ui breadcrumb">
	      	<NavLink to="/fazendas" className="section">Minhas Fazendas</NavLink>
	      		<i aria-hidden="true" className="right angle icon divider"></i>
	      		<div className="active section">Fazenda Raio de Sol</div>
	      	</div>
        </div>
        <div className="row">
            <div className="ui center aligned container">
            	<h1 className="title">Raio de Sol</h1>
            	<DividerSimple />
            </div>
        </div>
        <div className="ui placeholder segment fazenda-informacoes">
        	<h1>Informações da Fazenda</h1>
        </div>
		<DividerWithText text="Administração" />
		<div className="ui centered cards fazenda-administracao">
			<FazendaAdministracaoCard 
				name="Talhões"
				quant="4"
				img={TalhaoIcon}
			/>
			<FazendaAdministracaoCard 
				name="Piquetes"
				quant="6"
				img={PiqueteIcon}
			/>
			<FazendaAdministracaoCard 
				name="Estações"
				quant="2"
				img={EstacaoIcon}
			/>
			<FazendaAdministracaoCard 
				name="Animais"
				quant="10"
				img={AnimalIcon}
			/>
			<FazendaAdministracaoCard 
				name="Sensores"
				quant="2"
				img={SensorIcon}
			/>
		</div>
		<DividerWithText text="Dados" />
		<div className="ui centered cards fazenda-dados">
			<div className="ui doubling five column grid">
				<FazendaDadosCard 
					title="Precipitação"
					img={PrecipitacaoIcon}
				/>
				<FazendaDadosCard 
					title="Temperatura"
					img={TemperaturaIcon}
				/>
				<FazendaDadosCard 
					title="Umidade do Ar"
					img={UmidadeDoArIcon}
				/>
				<FazendaDadosCard 
					title="Vento"
					img={VentoIcon}
				/>
				<FazendaDadosCard 
					title="Radiação"
					img={RadiacaoIcon}
				/>
				<FazendaDadosCard 
					title="Pressão"
					img={PressaoIcon}
				/>
				<FazendaDadosCard 
					title="Insolação"
					img={InsolacaoIcon}
				/>
				<FazendaDadosCard 
					title="Temperatura do Solo"
					img={TemperaturaSoloIcon}
				/>
				<FazendaDadosCard 
					title="Umidade do Solo"
					img={UmidadeSoloIcon}
				/>
				<FazendaDadosCard 
					title="Pastagem"
					img={PastagemIcon}
				/>
				<FazendaDadosCard 
					title="Cerca"
					img={CercaIcon}
				/>
				<FazendaDadosCard 
					title="Cocho"
					img={CochoIcon}
				/>
				<FazendaDadosCard 
					title="Bebedouro"
					img={BebedouroIcon}
				/>
				<FazendaDadosCard 
					title="Animais"
					img={AnimaisIcon}
				/>

			</div>
		</div>

    </div>
    );
  }
}

export default Fazenda;

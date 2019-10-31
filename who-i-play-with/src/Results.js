import React, { Component } from 'react';
import qs from 'query-string';

const testJSON = '{"Olysia": 662, "Riot WxWatch": 318, "Creyslz": 123, "Machuka": 95, "Tonkatsu": 60, "Lux": 58, "AssassinStorm": 53, "AsianRabbit": 39, "Runictifa": 20, "LittleTinglan": 9, "iamtreelynna": 9, "Felicious": 9, "OXStormthunder": 9, "slythegreat": 7, "Tiern": 5, "j00boy": 5, "foe16": 4, "Venddetta": 4, "FatalElement": 4, "TheMooseMasoose": 4, "MasterPhuc": 4, "I Lift Everyday": 4, "IxAcesnipexI": 3, "ohnoitskono": 3, "mTalbs90": 3, "Fillet of Fish": 3, "Laxluster": 3, "SENPAl FOX": 3, "happypegasus": 3, "DancingWisp": 3, "shakeit": 3, "Kenson Mei": 3, "Drahmen": 3, "Marcelus Bot": 3, "ShadowXerum": 3, "Skiie": 2, "2RealHollister": 2, "Boing Zoom": 2, "haruhime": 2, "GYFl": 2, "Bariya": 2, "Kled777": 2, "JoeVen": 2, "bbAmber": 2, "Zofin": 2, "Refulperizer": 2, "FatHalpert": 2, "feistybear": 2, "Naarael": 2, "skMukhyang": 2, "Sheeppard": 2, "xoxfragilexox": 2, "Aruxium": 2, "ku klux batman": 2, "GOLDENTBE": 2, "Ddawgwolf": 2, "PrincipleSoup": 2, "KillMeSenpaii": 2, "Vidrimante": 2, "Brigadier Cross": 2, "TSturtledove": 2, "AlmightyFork": 2, "legendsofECU": 2, "Bogart That J": 2, "ChefJess": 2, "Rythetic": 2, "Obi Wan Chadnobi": 2, "Zhihao Hu": 2, "Jerome045": 2, "Jellybeanxo": 2, "Young Sicko Mo ": 2, "Wraith Slay3r": 2, "ThePenReaper": 2, "Sman377": 2, "damoose101": 2, "zaccufdsfds": 2, "ASmallCookie": 2, "PegLegAntoine": 2, "Riahkinz": 2, "SmellMyAshehole": 2, "Master16": 2, "SCR0TUMBL4ST": 2, "DragonsBane6347": 2, "xX oppy Xx": 2, "BAKsilog Supreme": 2, "LeBrOnWaDe129": 2, "Gothmmogs": 2, "CaptainAnonymous": 2, "Yepitsme": 2, "CeIina": 2, "Bokagna": 2, "BoostedAyyLmao": 2, "capnJayd": 2, "KB LeoRain": 2, "xiaokuang": 2, "Panile": 2, "Poodip18": 2, "tonystark44": 2, "cycloid235": 2, "KamCastle": 2, "joshua k payne": 2, "Yoso Solomid": 2, "Kahos1995": 2, "Deeeeeebo": 2, "Colonel Autism": 2, "SzMaGiiCzS": 2, "AzPikaKnight": 2, "Donkeyboxer": 2, "AlanPhoFalan": 2, "xdx001": 2, "Mistress Lulu": 2, "Asarei": 2, "Soletta": 2, "Fermentor": 2, "Adugr8": 2, "Short Hair Girl": 2, "kAyzZee": 2, "UnfairCloud": 2, "AmazingGrace": 2, "mxyako": 1, "FullKusha": 1, "NA Prince": 1, "Bard Stuck Iron": 1, "iSeeDeWi": 1, "Borschka": 1, "ServiusWolf": 1, "Jabers": 1, "F1recr0tch": 1, "TimmY6Uu ": 1, "DragoniteDVR": 1, "Black Pikachu": 1, "NicePCCanIHaveIt": 1, "SonsOfLight": 1, "PancakeBacon": 1, "Mr ChouChi": 1, "Creampa": 1, "Ms Yukii": 1, "Im0rtalKn1ght": 1, "TouchMeSan": 1, "quite lewd": 1, "GoldenPaladin": 1, "TheMilchMan": 1, "PapaGrigorio": 1, "Shock Reborn": 1, "bobaamilktea": 1, "Wiz12": 1, "Robin 10": 1, "krothdom": 1, "mentox11": 1, "Muscleboi": 1, "Nsanee": 1, "DawnUnderHeav3n ": 1, "LoRxI": 1, "MistyTale": 1, "Sharj1": 1, "AlwaysLosingLane": 1, "emmakillyou": 1, "iMattchu": 1, "VastVoltage": 1, "skerperp": 1, "joemkim0308": 1, "zoozonic": 1, "drunknn": 1, "bigbombs98": 1, "AnxiousBoiOwO": 1, "SSG Debt": 1, "8985365471881L2": 1, "LittIe Lotus ": 1, "LZ SHADOWWALKER": 1, "LeGeNdTvS": 1, "CazadordeSombra": 1, "Rordren": 1, "JKeil187": 1, "m09n flower": 1, "brimstonebetty": 1, "Z\u00ecma": 1, "1trickcamlie": 1, "Tyroue": 1, "IlIlIIlIIllIlIl": 1, "Wager": 1}';

class Results extends Component {
	render() {
		//const name = this.props.location.query.__summonerName;
		//const region = this.props.location.query.__region;
		const params = qs.parse(this.props.location.search)
		let data = JSON.parse(testJSON); 
		let keys = Object.keys(data);
		let elems = keys.map((t) => (<ul> {t} - {data[t]} </ul>));
		return (<div>
			<p>
			Welcome, {params.summoner} from {params.region}
			</p>
			{elems}
            </div>
			);
	}
}

export default Results;
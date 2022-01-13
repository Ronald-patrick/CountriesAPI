import { useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import "./index.css"

function App() {
	
	const [countries, setCountries] = useState([]);
	const [selected, setSelected] = useState({});
	const [modal, setmodal] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {

	}, [countries])

	
	const getData = async ()=>{
		const res = await fetch("https://restcountries.com/v3.1/subregion/asia");
		const data = await res.json();
		setCountries(data);
		console.log("here");
	}

	const removeModal = ()=>{
		setmodal(false);
	}

	const toggleModal = (data)=>{
		setmodal(true);
		setSelected(data);
	}

  return (
	  <>
		  {modal && <Modal remove={removeModal} data={selected}/>}
		  <div className="wrap-main">
		
		<h1>Asian Countries INFO</h1>
		<h2>Tap to get info</h2>
		<button onClick={getData} className="btn">Refresh <svg style={{width:40}} xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg></button>
		<div className="container">
			{
				countries.map(cn =>(
					<Card borders={cn.borders} region={cn.region} population={cn.population} capital={cn.capital} name={cn.name.common} flags={cn.flags.svg} subRegion={cn.subregion} toggle={toggleModal} languages={cn.languages}/>
				))
			}
		</div>
	</div>
	  </>
  );
}

export default App;

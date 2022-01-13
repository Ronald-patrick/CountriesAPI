import React from 'react'
import "./Modal.css"

const Modal = ({remove,data}) => {
	console.log(data);
	return (
		<div className='modal' onClick={remove}>
			<div className='mdata'>
				<img src={data.flags} alt="Flag" />
				<h1>{data.name}</h1>
				<p>Region : {data.region}</p>
				<p>Sub-Region : {data.subRegion}</p>
				<p>Capital : {data.capital}</p>
				<p>Population : {data.population}</p>
				<p>Languages : {data.langs}</p>
				<p>Borders : {data.borderlist}</p>
				

			</div>
		</div>
	)
}

export default Modal

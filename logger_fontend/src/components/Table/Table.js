import React from 'react'

const Table = ({data = []}) => {

	if (data.length === 0){
		return <h2>No data</h2>
	}

	const columns = Object.keys(data[0])
	
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					{columns.map((column, i) => <th key={column} scope="col">{column}</th>)}
				</tr>
			</thead>
			<tbody>
				{data.map((row, i) => (
					<tr key={i}>
						{columns.map((column, i) => (
							<td key={row[column]}>{row[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
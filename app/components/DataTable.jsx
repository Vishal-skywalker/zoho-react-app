import React from 'react';

const DataTable = ({ data }) => {
	const columns = data[0] ? Object.keys(data[0]) : [];
	return (
		<table className="w-full border-collapse border border-gray-300">
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column} className="border border-gray-300 p-2">{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, i) => (
					<tr key={i}>
						{columns.map((column) => (
							<td key={column} className="border border-gray-300 p-2">{row[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default DataTable;
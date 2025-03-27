import React, { useState } from 'react';
import DataTable from './DataTable';

const ZohoCOQLViewer = () => {
  const [query, setQuery] = useState('select Full_Name, Account_Name.Account_Name FROM Contacts WHERE Account_Name.Account_Name != ""');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runCOQLQuery = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const response = await window.ZOHO.CRM.API.coql({ "select_query": query });
      setData(response.data);
    } catch (err) {
      setError(JSON.stringify(err) || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-4">
        <textarea
          type="text"
          placeholder="Enter COQL query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={runCOQLQuery}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Run Query'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      {data && <DataTable data={data} />}
    </div>
  );
};

export default ZohoCOQLViewer;

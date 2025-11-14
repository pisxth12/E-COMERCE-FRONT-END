import React, { useEffect, useState } from 'react';
import { usersAPI } from '../services/users'; 

const DebugAPI = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('=== DEBUGGING API RESPONSE ===');
        const response = await usersAPI.getUsers();
        console.log('Full response:', response);
        console.log('Response data:', response.data);
        console.log('Type of response.data:', typeof response.data);
        console.log('Is array?', Array.isArray(response.data));
        
        if (response.data && typeof response.data === 'object') {
          console.log('Object keys:', Object.keys(response.data));
        }
        
        setApiResponse(response.data);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  if (loading) return <div className="p-4">Loading debug info...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-4">API Response Debug</h2>
      <div className="mb-4">
        <strong>Response Type:</strong> {typeof apiResponse}
      </div>
      <div className="mb-4">
        <strong>Is Array:</strong> {Array.isArray(apiResponse) ? 'Yes' : 'No'}
      </div>
      {apiResponse && typeof apiResponse === 'object' && (
        <div className="mb-4">
          <strong>Object Keys:</strong> {Object.keys(apiResponse).join(', ')}
        </div>
      )}
      <div className="mt-4">
        <strong>Full Response Data:</strong>
        <pre className="bg-white p-4 rounded border mt-2 overflow-auto">
          {JSON.stringify(apiResponse, null, 2)}
        </pre>
      </div>
      <p className="mt-4 text-sm text-gray-600">Check browser console for more details</p>
    </div>
  );
};

export default DebugAPI;
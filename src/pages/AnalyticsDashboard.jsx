import { useEffect, useState } from "react";
import GraphPanel from "../components/GraphPanel";
import { getAnalytics } from "../api";

export default function AnalyticsDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAnalytics().then((res) => setData(res));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📈 BookVault Analytics</h1>
      {data ? <GraphPanel data={data} /> : <p>Loading analytics...</p>}
    </div>
  );
}

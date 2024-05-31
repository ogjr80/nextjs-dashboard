

import Link from 'next/link';
import { fetchStartups } from '@/app/lib/prismaQueries';

const StartupsPage = async () => {
   const data = await fetchStartups(); 

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('/data/sampleData.json')
  //     .then((response) => response.json())
  //     .then((data) => setData(data.startups));
  // }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Startups</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data && data.map((startup) => (
          <Link href={`/dashboard/startups/${startup.id}`} key={startup.id}>
            <div className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg transition">
              <img src={startup.logo} alt={`${startup.name} logo`} className="w-full h-32 object-contain mb-4" />
              <h3 className="text-lg font-bold mb-2">{startup.name}</h3>
              <p><strong>Founder:</strong> {startup.founderDetails}</p>
              <p><strong>Type:</strong> {startup.type}</p>
              <p><strong>Grant Amount:</strong> ${startup.grantAmountApproved.toLocaleString()}</p>
              <p><strong>Contact:</strong> {startup.contactInformation}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StartupsPage;

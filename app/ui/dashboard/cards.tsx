import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { fetchOverview } from '@/app/lib/prismaQueries';

// import {data} from '/data/sampleData.json';




const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { 
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData();
  const data = await fetchOverview();
  // const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
  // const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
  // const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
  // const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

  console.log(data); 

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
      {
        data.map(d => {
          return (
            <>
              <Card title="Total Startups" value={d.totalStartups} type="invoices" />
              <Card title="Total Grant Disbured" value={d.totalGrantsDisbursed} type="collected" />
              <Card title="Total Funds Utilized" value={d.totalFundsUtilized} type="pending" />
              <Card
                title="Total Funds Remaining"
                value={d.totalFundsRemaining}
                type="customers"
              />
            </>
        )
      })
      }
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

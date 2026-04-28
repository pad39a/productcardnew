interface ComponentSpecTableProps {
  data?: {
    label: string;
    value: string;
  }[];
}

// Hardcoded component specification data
const hardcodedData = [
  { label: 'In-Run Bias', value: 'Yes' },
  { label: 'Bias Over Temp', value: 'Yes' },
  { label: 'Bias TurnOn-TurnOff', value: 'Yes' },
  { label: 'Allan Variance', value: 'Yes' },
  { label: 'Scale Factor Error', value: 'Yes' },
  { label: 'Misalignment', value: 'Yes' },
  { label: 'Cross Axis', value: 'Yes' },
];

export function ComponentSpecTable({ data = hardcodedData }: ComponentSpecTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Specification
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Included
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((spec, i) => (
            <tr key={i} className="bg-white hover:bg-slate-50/50 transition-colors">
              <td className="px-4 py-4 text-[14px] font-medium text-slate-900 text-center" style={{ fontFamily: 'Inter' }}>
                {spec.label}
              </td>
              <td className="px-4 py-4 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

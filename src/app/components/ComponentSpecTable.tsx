interface ComponentSpecTableProps {
  data: {
    mpn: string;
    standards: string[];
    technology: string;
    radiation: string;
    bands: string[];
    vswr: string;
    polarization: string;
    lnaGain: string;
  };
}

export function ComponentSpecTable({ data }: ComponentSpecTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              MPN
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Standards
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Technology
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Configuration
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Bands
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              VSWR
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Polarization
            </th>
            <th className="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              LNA Gain
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="bg-white hover:bg-slate-50/50 transition-colors">
            <td className="px-4 py-6 text-[14px] font-medium text-slate-900 text-center" style={{ fontFamily: 'Inter' }}>
              {data.mpn}
            </td>
            <td className="px-4 py-6 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
              {data.standards.map((std, i) => (
                <div key={i}>{std}</div>
              ))}
            </td>
            <td className="px-4 py-6 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
              {data.technology}
            </td>
            <td className="px-4 py-6 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
              {data.radiation}
            </td>
            <td className="px-4 py-6 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
              {data.bands.map((band, i) => (
                <div key={i}>{band}</div>
              ))}
            </td>
            <td className="px-4 py-6 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
              {data.vswr}
            </td>
            <td className="px-4 py-6 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
              {data.polarization}
            </td>
            <td className="px-4 py-6 text-[14px] text-slate-600 text-center" style={{ fontFamily: 'Inter' }}>
              {data.lnaGain}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

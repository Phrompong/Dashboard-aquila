type TableType1Props = {
  data: { title?: string; headers: string[]; rows: any[] };
};

export default function TableType1(props: TableType1Props) {
  const { data } = props;
  return (
    <table>
      <tr>
        {data?.title && (
          <th
            className="border border-gray-300 px-4 py-2 text-center align-middle w-2 vertical-text underline"
            rowSpan={data?.rows?.length + 1}
          >
            {data.title}
          </th>
        )}
        {data?.headers?.map((header, index) => (
          <th
            key={index}
            className="border border-gray-300 px-4 py-2 text-center align-middle w-34"
          >
            {header}
          </th>
        ))}
      </tr>

      {data?.rows?.map((row, index) => (
        <tr key={index}>
          <td className="border border-gray-300 px-4 py-2 text-left align-center w-100">
            {row.thailand}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.dec0}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.jan}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.feb}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.mar}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.apr}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.may}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.jun}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.jul}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.aug}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.sep}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.oct}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.nov}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-center align-middle w-34">
            {row.dec}
          </td>
        </tr>
      ))}
    </table>
  );
}

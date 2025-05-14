export default function GasVolume() {
  const data = {
    headers: ["Shipper", "Source", "Actual - Plan \n 1 Nov - 30 Nov 2024"],
    rows: [
      {
        shipper: "PTT",
        source: "Pipegas",
        diff: "+51",
      },
      {
        shipper: "PTT",
        source: "LNG",
        diff: "+21",
      },
      {
        shipper: "PTT",
        source: "EGAT + IPP",
        diff: "+52",
      },
      {
        shipper: "PTT",
        source: "Pipegas",
        diff: "+36",
      },
      {
        shipper: "PTT",
        source: "SPP",
        diff: "-1",
      },
      {
        shipper: "PTT",
        source: "IND + NGV",
        diff: "-58",
      },
      {
        shipper: "กฟพ",
        source: "LNG",
        diff: "+10",
      },
      {
        shipper: "HKP",
        source: "LNG",
        diff: "-26",
      },
      {
        shipper: "BGRIMM",
        source: "LNG",
        diff: "-17",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4">
        <span className="text-left font-bold">
          ปริมาณก๊าซจริงเทียบแผน PPM 11 พ.ย. 2567 (MMscfd)
        </span>
        <table>
          <thead>
            <tr>
              {data?.headers?.map((header, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-center align-middle w-34"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.rows.map((item, index) => {
              let isShowShipper =
                item.shipper !== data.rows[index - 1]?.shipper;
              return (
                <tr key={index} className="border-b border-gray-300">
                  {isShowShipper && (
                    <td
                      className="border border-gray-300 px-4 py-2 align-center text-center"
                      rowSpan={
                        data.rows.filter((i) => i.shipper === item.shipper)
                          .length
                      }
                    >
                      {item.shipper}
                    </td>
                  )}
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {item.source}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {item.diff}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-col gap-2">
          <span className="text-left font-bold">หมายเหตุ</span>
          <span className="text-left">
            - เป็นข้อมูล Operation อาจมีความคลาดเคลื่อนจากข้อมูล Billing
          </span>
        </div>
      </div>
    </div>
  );
}

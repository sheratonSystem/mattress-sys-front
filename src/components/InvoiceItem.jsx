const InvoiceItem = ({ item }) => {
  const {
    id,
    cutomerName,
    shipmentAddress,
    invocieDate,
    receiptDate,
    paymentMethod,
    shipmentCharge,
    retailOffer,
    totalPrice,
    paidMoney,
    remainingMoney,
  } = item;

  return (
    <li className="m-2 rounded-md bg-gray-700 flex flex-wrap items-center justify-evenly md:justify-between lg:justify-around flex-row-reverse text-right">
      <div className="p-2 ti:flex flex-row-reverse">
        <p className="m-1">
          رقم الفاتورة: <span className="text-blue-500">{id}</span>
        </p>
      </div>
      <div className="p-2 ti:flex flex-row-reverse">
        <p className="m-1">
          اسم العميل: <span className="text-blue-500">{cutomerName}</span>
        </p>
        <p className="m-1">
          عنوان العميل: <span className="text-blue-500">{shipmentAddress}</span>
        </p>
        <p className="m-1">
          تاريخ الفاتورة:{" "}
          <span className="text-blue-500">
            {new Date(invocieDate).toLocaleDateString("ar-EG")}
          </span>
        </p>
        <p className="m-1">
          تاريخ الاستلام:{" "}
          <span className="text-blue-500">
            {new Date(receiptDate).toLocaleDateString("ar-EG")}
          </span>
        </p>
      </div>
      <div className="p-2 ti:flex flex-row-reverse">
        <p className="m-1">
          طريقة الدفع: <span className="text-blue-500">{paymentMethod}</span>
        </p>
        <p className="m-1">
          مصاريف التوصيل:
          <span className="text-blue-500">{shipmentCharge.price}</span>
        </p>
        <p className="m-1">
          اللي دفع مصاريف التوصيل:
          <span className="text-blue-500">{shipmentCharge.payer}</span>
        </p>
        <p className="m-1">
          خصم المعرض: <span className="text-blue-500">{retailOffer}</span>
        </p>
      </div>
      <div className="p-2 ti:flex flex-row-reverse">
        <p className="m-1">
          المبلغ الاجمالي: <span className="text-green-500">{totalPrice}</span>
        </p>
        <p className="m-1">
          المبلغ المدفوع:
          <span className="text-green-500">{paidMoney}</span>
        </p>
        <p className="m-1">
          المبلغ المتبقي:
          <span className="text-green-500">{remainingMoney}</span>
        </p>
      </div>
    </li>
  );
};

export default InvoiceItem;

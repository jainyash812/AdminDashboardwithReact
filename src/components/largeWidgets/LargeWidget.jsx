import "./largewidget.css";

export default function LargeWidget() {
  const Button = ({ type }) => {
    return <button className={"largeWidgetButton " + type}>{type}</button>;
  };
  return (
    <div className="largeWidget">
      <h3 className="largeWidgetTitle">Latest Transactions</h3>
      <table className="largeWidgetTable">
        <tr className="largeWidgetRow">
          <th className="largeWidgetHeader">Customer</th>
          <th className="largeWidgetHeader">Date</th>
          <th className="largeWidgetHeader">Amount</th>
          <th className="largeWidgetHeader">Status</th>
        </tr>
        <tr className="largeWidgetRow">
          <td className="largeWidgetUser">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png"
              alt=""
              className="largeWidgetImg"
            />
            <span className="largeWidgetName">Big Show</span>
          </td>
          <td className="largeWidgetDate">13 Oct 2021</td>
          <td className="largeWidgetAmount">$922.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="largeWidgetRow">
          <td className="largeWidgetUser">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png"
              alt=""
              className="largeWidgetImg"
            />
            <span className="largeWidgetName"> Roman Reigns</span>
          </td>
          <td className="largeWidgetDate">19 Aug 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="largeWidgetRow">
          <td className="largeWidgetUser">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png"
              alt=""
              className="largeWidgetImg"
            />
            <span className="largeWidgetName"> Roman Reigns</span>
          </td>
          <td className="largeWidgetDate">2 Jun 2021</td>
          <td className="largeWidgetAmount">$12.00</td>
          <td className="largeWidgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="largeWidgetRow">
          <td className="largeWidgetUser">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png"
              alt=""
              className="largeWidgetImg"
            />
            <span className="largeWidgetName"> Seth Rollins</span>
          </td>
          <td className="largeWidgetDate">2 Jan 2021</td>
          <td className="largeWidgetAmount">$52.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

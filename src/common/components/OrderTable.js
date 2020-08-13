import React from 'react'
import './OrderTable.css';

/**
 * 列印用table.
 */
export default class OrderTable extends React.Component {

  render() {
    const { orderId, custName, phone, date, time, fixAmount, device, color, devicePin, errorDesc, imei, memo } = this.props.printData;
    return (
      <table className="printTable" cellPadding="0" cellSpacing="0" width="95%" height="95%">
        <thead>
          <tr>
            <th colSpan="6">睿+ 手機電腦維修</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tdstyle" width="14%">維修單號</td>
            <td className="tdstyle" colSpan="3">{orderId}</td>
            <td className="tdstyle" width="14%">日期</td>
            <td className="tdstyle" width="18%">{date}</td>
          </tr>
          <tr>
            <td className="tdstyle">客戶姓名</td>
            <td className="tdstyle">{custName}</td>
            <td className="tdstyle" width="14%">聯繫電話</td>
            <td className="tdstyle">{phone}</td>
            <td className="tdstyle">送修時間</td>
            <td className="tdstyle">{time}</td>
          </tr>
          <tr>
            <td className="tdstyle">機型</td>
            <td className="tdstyle">{device}</td>
            <td className="tdstyle">設備顏色</td>
            <td className="tdstyle">{color}</td>
            <td className="tdstyle">解鎖密碼</td>
            <td className="tdstyle">{devicePin}</td>
          </tr>
          <tr>
            <td className="tdstyle">IMEI(序號)</td>
            <td className="tdstyle" colSpan="3">{imei}</td>
            <td className="tdstyle">維修報價</td>
            <td className="tdstyle">{fixAmount}</td>
          </tr>
          <tr>
            <td className="tdstyle">維修故障</td>
            <td className="tdstyle" colSpan="5">{errorDesc}</td>
          </tr>
          <tr>
            <td className="tdstyle">備註</td>
            <td className="tdstyle" colSpan="5">{memo}</td>
          </tr>
          <tr>
            <td className="tdstyle" rowSpan="2" colSpan="5" style={{ fontSize: '85%', color: '#666666' }}>
              <ol>
                <li>經通知可取件後請30日內領回，逾時本店將不再另行通知，有權回收處置。</li>
                <li>對於進入檢測維修過程的機器，若客人決定不維修，不能保證恢復以前故障狀態。<br />【例：送修前可以開機但顯示異常，送回時可能無顯示，送修前白蘋果退修時不開】</li>
                <li>送修手機內含軟體與資料可能在維修過程中遺失，送修前請先備份，亦不負責賠償。</li>
                <li>取件時，請當場測試所有功能後簽收，離店後僅針對同一維修問題進行保修。</li>
                <li>拆卸手機時若發現有進水痕跡或變形，拆卸過程造成的故障皆不保固。<br />【例：原本可以開機要換電池，拆卸後變成不開機，依泡水機進行報價】</li>
                <li>經檢測後報價，若同意維修後亦不得取消，若取消沒收訂金或需付500工本費。</li>
                <li>交由本店維修後，造成機體故障受損，將由本店負責賠償，賠償以新台幣5000為上限，<br />
                  客戶若不同意本店有權不進行維修【進水手機一律收800檢測費，可折抵維修費】</li>
              </ol>
            </td>
            <td className="tdstyle signin">取件簽名</td>
          </tr>
          <tr>
            <td className="tdstyle signin">客戶簽名</td>
          </tr>
          <tr>
            <td className="tdstyle" colSpan="4">地址：411台中市太平區新平路三段364號</td>
            <td className="tdstyle" colSpan="2">營業時間：9:00 ~ 21:00</td>
          </tr>
          <tr>
            <td className="tdstyle" colSpan="6">電話：(04)23916552</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
